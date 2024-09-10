import bcrypt from 'bcryptjs'
import User from '../model/User.js'
import generateTokenAndSetCookie from '../utils/generateToken.js'
import { BadRequestError, NotFoundError } from '../errors/index.js'

export const signup = async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body

  if (password !== confirmPassword) {
    throw new BadRequestError("Passwords don't match")
  }

  const user = await User.findOne({ username })

  if (user) {
    throw new BadRequestError('Username already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
  // const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
  const profilePic = `https://i.pravatar.cc/150?u=${username}`

  const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    profilePic,
    // profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
  })

  await newUser.save()
  generateTokenAndSetCookie(newUser._id, res)

  res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    username: newUser.username,
    profilePic: newUser.profilePic,
  })
}

export const login = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || '')

  if (!user || !isPasswordCorrect) {
    throw new BadRequestError('Invalid username or password')
  }

  generateTokenAndSetCookie(user._id, res)

  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    username: user.username,
    profilePic: user.profilePic,
  })
}

export const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 0 })
  res.status(200).json({ message: 'Logged out successfully' })
}

import jwt from 'jsonwebtoken'
import User from '../model/User.js'
import { UnauthenticatedError, NotFoundError } from '../errors/index.js'

const protectRoute = async (req, res, next) => {
  // get token from cookie
  const token = req.cookies.jwt
  if (!token) {
    throw new UnauthenticatedError('Unauthenticated - No Token Provided')
  }

  // decode = {userId}
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  if (!decoded) {
    throw new UnauthenticatedError('Unauthenticated - Invalid Token')
  }

  // find user from userId return from token
  const user = await User.findById(decoded.userId).select('-password')
  if (!user) {
    throw new NotFoundError('User not found')
  }

  // add user to to req.user
  req.user = user

  next()
}

export default protectRoute

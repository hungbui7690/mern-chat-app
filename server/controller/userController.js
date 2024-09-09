import User from '../model/User.js'

export const getUsersForSidebar = async (req, res) => {
  const loggedInUserId = req.user._id

  const filteredUsers = await User.find({
    _id: { $ne: loggedInUserId }, // NOT IN -> because we want to get the list of people on the left sidebar -> these people are friends -> not include logged in user here
  }).select('-password')

  res.status(200).json(filteredUsers)
}

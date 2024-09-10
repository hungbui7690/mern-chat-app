import Conversation from '../model/Conversation.js'
import Message from '../model/Message.js'
import { getReceiverSocketId, io } from '../socket/socket.js'

export const sendMessage = async (req, res) => {
  const { message } = req.body
  const { id: receiverId } = req.params
  const senderId = req.user._id
  // console.log('senderId: ', senderId, 'receiverId: ', receiverId)

  // find record in Conversation based on senderID & receiverID
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  })

  // create record in Conversation if not exist
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    })
  }

  // create new Message
  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  })

  // add new message to Conversation
  if (newMessage) {
    conversation.messages.push(newMessage._id)
  }

  // Method 1
  // await conversation.save();
  // await newMessage.save();

  // Method 2: run in parallel
  await Promise.all([conversation.save(), newMessage.save()])

  // SOCKET.IO
  // const receiverSocketId = getReceiverSocketId(receiverId)
  // if (receiverSocketId) {
  //   // io.to(<socketId>).emit() used to send events to specific client
  //   io.to(receiverSocketId).emit('newMessage', newMessage)
  // }

  res.status(201).json(newMessage)
}

export const getMessages = async (req, res) => {
  const { id: receiverId } = req.params
  const senderId = req.user._id
  // console.log('senderId: ', senderId, 'receiverId: ', receiverId)

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  }).populate('messages') // NOT REFERENCE BUT ACTUAL MESSAGES

  if (!conversation) return res.status(200).json([])
  const messages = conversation.messages
  res.status(200).json(messages)
}

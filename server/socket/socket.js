import { Server } from 'socket.io'
import http from 'http'
import express from 'express'

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
})

const userSocketMap = {} // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]
}

io.on('connection', (socket) => {
  console.log('user connected', socket.id)

  // client side
  //  const socket = io('http:localhost:5000', {
  //   query: {
  //     userId: authUser._id,
  //   },
  // })

  // server side can access by using handshake.query.userId
  const userId = socket.handshake.query.userId
  if (userId) userSocketMap[userId] = socket.id

  io.emit('getOnlineUsers', Object.keys(userSocketMap)) // send event to all connected clients

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
    delete userSocketMap[userId]
    io.emit('getOnlineUsers', Object.keys(userSocketMap))
  })
})

export { app, io, server }

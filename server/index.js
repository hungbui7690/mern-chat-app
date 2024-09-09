import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authRouter from './routes/authRoutes.js'
import messageRouter from './routes/messageRoute.js'
import userRouter from './routes/userRoute.js'
import { connectDB } from './db/connect.js'

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('🏓 pong')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/message', messageRouter)
app.use('/api/v1/user', userRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server Running on port ${PORT}`)
})

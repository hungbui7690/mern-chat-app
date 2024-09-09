import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
import authRouter from './routes/authRoutes.js'
import { connectDB } from './db/connect.js'

app.use(express.json())

app.get('/', (req, res) => {
  res.send('🏓 pong')
})

app.use('/api/v1/auth', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server Running on port ${PORT}`)
})

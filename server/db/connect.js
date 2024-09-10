import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connect to MongoDB')
  } catch (error) {
    console.log('Cannot connect to DB', error.message)
  }
}

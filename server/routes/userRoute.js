import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getUsersForSidebar } from '../controller/userController.js'

const router = express.Router()

router.get('/', authMiddleware, getUsersForSidebar)

export default router

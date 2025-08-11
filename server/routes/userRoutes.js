import express from 'express'
import auth from '../middlerwares/auth.js'
import { getPublishedCreations, getUserCreations, toggleLikeCreations } from '../controllers/userController'


const userRouter = express.Router()

userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.get('/get-published-creations', auth, getPublishedCreations)
userRouter.post('/get-like-creation', auth, toggleLikeCreations)

export default userRouter


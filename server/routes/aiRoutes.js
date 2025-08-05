import express from 'express'
import { auth } from '../middlerwares/auth.js'
import { generateArticle } from '../controllers/aiController.js'


const router = express.Router()

router.post('/generate-article', auth, generateArticle)

export default router
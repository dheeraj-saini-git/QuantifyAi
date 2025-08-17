import express from 'express'
import auth from '../middlerwares/auth.js'
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from '../controllers/aiController.js'
import upload from '../configs/multer.js'

const router = express.Router()

router.post('/generate-article', auth, generateArticle)
router.post('/generate-blog-title', auth, generateBlogTitle)
router.post('/generate-image', auth, generateImage)
// router.post('/generate-image', auth, (req,res)=>{ console.log('api worked')})

router.post('/remove-image-background', auth, upload.single('image'), removeImageBackground)
router.post('/remove-image-object', auth, upload.single('image'), removeImageObject)
router.post('/resume-review', auth, upload.single('resume'), resumeReview)


export default router
import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import { clerkMiddleware, requireAuth } from '@clerk/express'

const app = express()
const PORT = process.env.PORT|| 3000

app.use(cors())
app.use(express.json()),
app.use(clerkMiddleware())

app.get('/', (req,res)=> res.send('Server is Live!'))
app.use(requireAuth())
app.get('/auth', (req,res)=> res.send('Server is authenticated!'))


app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})
import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

const app = express()
const PORT = process.env.PORT|| 3000

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=> res.send('Server is Live!'))

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})
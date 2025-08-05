import { clerkClient } from "@clerk/express"
import OpenAI from "openai"
import sql from "../configs/db.js";

const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateArticle = async (req,res)=>{
    try {
        const {userId} = req.auth()
        const {prompt, length} = req.body
        const plan = req.plan
        console.log(req.body)
        const free_usage = req.free_usage

        if(plan !== 'premium' && free_usage >= 10){
            return res.json({success: false, message: "Limited reached. Upgrade to continue"})
        }

        const response = await openai.chat.completions.create({
            model : "gemini-2.0-flash",
            messages : [{
                role : "user",
                content : prompt,
            }],
            temperature : 0.7,
            max_tokens : length
        })

        const content = response.choices[0].message.content

        await sql `INSERT INTO creations (user_id, prompt, content, type) values(${userId}, ${prompt}, ${content}, 'article')`

        if(plan !== 'premium'){
            await clerkClient.users.updateUserMetadata(userId,{
                privateMetadata : {
                    free_usage : free_usage + 1
                }
            })
        }

        res.json({success:true, content})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
        
    }
}
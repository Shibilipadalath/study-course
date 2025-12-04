import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"




const app=express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("env"))


app.get('/',()=>{
    console.log("hi");
})


const PORT=process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})
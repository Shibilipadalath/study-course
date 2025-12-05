import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import authRouter from "./routes/auth.route.js";
import blogRoutes from "./routes/blog.route.js";
import galleryCategoryRoutes from "./routes/category.route.js";
import galleryRoutes from "./routes/gallery.route.js";


const app=express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))


app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRoutes);
app.use("/api/gallery-category", galleryCategoryRoutes);
app.use("/api/gallery", galleryRoutes);


const PORT=process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})
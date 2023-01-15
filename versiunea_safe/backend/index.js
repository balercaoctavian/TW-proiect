import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import CourseRoute from './routes/CourseRoute.js';
import UserRoute from './routes/UserRoute.js';
dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use(CourseRoute);
app.use(UserRoute);

app.listen(process.env.APP_PORT,()=>{
    console.log('server running');
});
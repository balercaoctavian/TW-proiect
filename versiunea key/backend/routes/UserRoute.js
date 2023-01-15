import express from "express";
import {
    getUserByKey
} from '../controllers/UserControllers.js';

const router=express.Router();

router.get('/users/:userKey',getUserByKey);

export default router;
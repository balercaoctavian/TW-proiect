import express from "express";
import {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} from '../controllers/CourseControllers.js';

const router=express.Router();

router.get('/courses',getCourses);
router.get('/courses/:courseId',getCourseById);
router.post('/courses',createCourse);
router.patch('/courses/:courseId',updateCourse);
router.delete('/courses/:courseId',deleteCourse);

export default router;
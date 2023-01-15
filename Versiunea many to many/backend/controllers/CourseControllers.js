import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getCourses = async(req, res) => {
    try {
        const response= await prisma.course.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCourseById = async(req, res) => {
    try {
        const response= await prisma.course.findUnique({
            where : {
                courseId: Number(req.params.courseId)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createCourse = async(req, res) => {
    const {userId, userKey, name, desc, startDate, durata} = req.body;
    try {
        const course = await prisma.course.create({
            data:{
                userId: userId,
                userKey: userKey,
                name: name,
                desc: desc,
                startDate: startDate,
                durata: durata,
                pozitiv: 0,
                neutru: 0,
                negativ: 0
            }
        });
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateCourse = async(req, res) => {
    const {name, desc, startDate, durata, pozitiv, neutru, negativ} = req.body;
    try {
        const course = await prisma.course.update({
            where: {
                courseId: Number(req.params.courseId)
            },
            data:{
                name: name,
                desc: desc,
                startDate: startDate,
                durata: durata,
                pozitiv: pozitiv,
                neutru: neutru,
                negativ: negativ
            }
        });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteCourse = async(req, res) => {
    try {
        const course = await prisma.course.delete({
            where: {
                courseId: Number(req.params.courseId)
            }
        });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
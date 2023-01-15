import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export const getUserByKey = async(req, res) => {
    try {
        const response= await prisma.user.findUnique({
            where : {
                userKey: req.params.userKey
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

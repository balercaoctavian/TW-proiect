import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export const getUserById = async(req, res) => {
    try {
        const response= await prisma.user.findUnique({
            where : {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

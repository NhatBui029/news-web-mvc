import prisma from "../libs/db-client"

export const getCategories = async ()=>{
    return await prisma.category.findMany();
}
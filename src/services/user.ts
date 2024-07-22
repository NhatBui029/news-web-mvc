import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export interface User {
    id?: number,
    email: string,
    password: string,
    rePassword?: string,
    name: string
    role?: Role,
    createdAt?: Date
    deletedAt?: Date
}

export enum Role {
    CLIENT = "CLIENT",
    ADMIN = "ADMIN"
}

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findFirst({
        where: {
            email,
            deletedAt: null
        }
    })
}

export const createUser = async(data: User)=>{
    return await prisma .user.create({
        data: data
    })
}
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const seed = async()=>{

}

void(async()=>{
    try {
        await seed();
    } catch (e) {
        console.log("🚀 ~ void ~ e:", e)
        process.exit(1);
    } finally{
        await prisma.$disconnect();
    }
})
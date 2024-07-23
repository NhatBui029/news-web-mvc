import prisma from "../libs/db-client";

export interface Post {
  id?: number;
  title: string;
  content: string;
  description: string;
  keywords: string;
  imageUrl: string;
  published: boolean;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId: number;
}

export const createPost = async(data: Post)=>{
    return await prisma.post.create({
        data: data
    })
}
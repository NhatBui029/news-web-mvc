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

export const createPost = async (data: Post) => {
  return await prisma.post.create({
    data: data,
  });
};

export const getPosts = async () => {
  return await prisma.post.findMany();
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;
}

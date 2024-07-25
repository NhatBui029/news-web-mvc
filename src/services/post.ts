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
    data: {
      ...data,
      deletedAt: null
    },
  });
};

export const getPosts = async () => {
  return await prisma.post.findMany({
    where: {
      deletedAt: null
    }
  });
};

export const getPostsStored = async () => {
  return await prisma.post.findMany({
    where: {
      deletedAt: {
        not: null
      }
    }
  });
};

export const updatePost = async (id: number,data: Post | {deletedAt: Date|null}) => {
  return await prisma.post.update({
    where: {
      id: id
    },
    data: data
  })
};

export const removePost = async (id: number) => {
  return await prisma.post.update({
    where: {
      id: id
    },
    data: {
      deletedAt: new Date().toISOString()
    }
  })
};


export const getPostById = async (id: number = 1) => {
  return await prisma.post.findFirst({
    where: {
      id: id,
      deletedAt: null
    }
  });
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

import prisma from "../../src/libs/db-client";
import categorySeed from "./category";
import postSeed from "./post";
import userAdminSeed from "./user-admin";

const seed = async () => {
  // await userAdminSeed();
  // await categorySeed();
  await postSeed();
};

void (async () => {
  try {
    await seed();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

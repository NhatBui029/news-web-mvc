/*
  Warnings:

  - You are about to drop the column `authorId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `PostCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `PostCategory` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `PostCategory` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `PostCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `PostCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `PostCategory` DROP FOREIGN KEY `PostCategory_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `PostCategory` DROP FOREIGN KEY `PostCategory_postId_fkey`;

-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `authorId`,
    DROP COLUMN `postId`,
    ADD COLUMN `author_id` INTEGER NOT NULL,
    ADD COLUMN `post_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PostCategory` DROP PRIMARY KEY,
    DROP COLUMN `categoryId`,
    DROP COLUMN `postId`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `post_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`post_id`, `category_id`);

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

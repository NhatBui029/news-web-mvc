/*
  Warnings:

  - You are about to drop the column `author_id` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `author_id` on the `post` table. All the data in the column will be lost.
  - You are about to drop the `postcategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `postcategory` DROP FOREIGN KEY `PostCategory_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `postcategory` DROP FOREIGN KEY `PostCategory_post_id_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `author_id`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `author_id`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL,
    ADD COLUMN `category_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `postcategory`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

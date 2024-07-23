/*
  Warnings:

  - You are about to drop the column `tags` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `tags`,
    ADD COLUMN `keywords` VARCHAR(191) NULL,
    MODIFY `content` VARCHAR(5000) NOT NULL;

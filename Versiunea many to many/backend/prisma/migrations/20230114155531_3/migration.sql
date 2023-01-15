/*
  Warnings:

  - You are about to drop the column `courseId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userKey]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userKey]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_courseId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `courseId`;

-- CreateIndex
CREATE UNIQUE INDEX `Course_userKey_key` ON `Course`(`userKey`);

-- CreateIndex
CREATE UNIQUE INDEX `User_userKey_key` ON `User`(`userKey`);

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

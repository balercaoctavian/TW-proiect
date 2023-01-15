/*
  Warnings:

  - The primary key for the `course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `course` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `courseId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`courseId`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `userId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `Course_userId_key` ON `Course`(`userId`);

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

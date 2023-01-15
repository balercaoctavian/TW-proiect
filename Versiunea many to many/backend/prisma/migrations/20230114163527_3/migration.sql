/*
  Warnings:

  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courseId]` on the table `UserCourse` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Course_userId_key` ON `course`;

-- DropIndex
DROP INDEX `User_courseId_key` ON `user`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `courseId`;

-- CreateIndex
CREATE UNIQUE INDEX `UserCourse_courseId_key` ON `UserCourse`(`courseId`);

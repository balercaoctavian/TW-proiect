/*
  Warnings:

  - A unique constraint covering the columns `[courseId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `courseId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_courseId_key` ON `User`(`courseId`);

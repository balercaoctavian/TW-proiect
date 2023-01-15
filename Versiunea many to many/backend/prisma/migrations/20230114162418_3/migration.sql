/*
  Warnings:

  - A unique constraint covering the columns `[courseId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `UserCourse` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserCourse` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Course_courseId_key` ON `Course`(`courseId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_userId_key` ON `User`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserCourse_id_key` ON `UserCourse`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `UserCourse_userId_key` ON `UserCourse`(`userId`);

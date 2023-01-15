/*
  Warnings:

  - A unique constraint covering the columns `[courseId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Course_courseId_key` ON `Course`(`courseId`);

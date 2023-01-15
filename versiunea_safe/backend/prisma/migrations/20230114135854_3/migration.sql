/*
  Warnings:

  - A unique constraint covering the columns `[createdAt]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Course_createdAt_key` ON `Course`(`createdAt`);

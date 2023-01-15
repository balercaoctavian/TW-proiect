/*
  Warnings:

  - The primary key for the `usercourse` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `usercourse` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`courseId`, `userId`);

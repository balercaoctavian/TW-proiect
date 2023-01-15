/*
  Warnings:

  - Added the required column `userId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `userId` INTEGER NOT NULL;

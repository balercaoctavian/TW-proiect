/*
  Warnings:

  - Added the required column `impressed` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `impressed` INTEGER NOT NULL;

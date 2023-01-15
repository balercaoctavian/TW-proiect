/*
  Warnings:

  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Course_userId_key` ON `course`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `userId`;

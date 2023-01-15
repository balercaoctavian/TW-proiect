/*
  Warnings:

  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_userId_fkey`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_userKey_fkey` FOREIGN KEY (`userKey`) REFERENCES `User`(`userKey`) ON DELETE RESTRICT ON UPDATE CASCADE;

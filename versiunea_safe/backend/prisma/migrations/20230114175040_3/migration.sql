/*
  Warnings:

  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `userKey` on the `course` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_userId_fkey`;

-- DropIndex
DROP INDEX `Course_userKey_key` ON `course`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `userId`,
    DROP COLUMN `userKey`;

-- DropTable
DROP TABLE `user`;

/*
  Warnings:

  - You are about to drop the column `userKey` on the `course` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_userKey_fkey`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `userKey`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Course_userId_key` ON `Course`(`userId`);

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

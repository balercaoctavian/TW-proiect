/*
  Warnings:

  - You are about to drop the column `key` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userKey]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userKey]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userKey` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userKey` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_userId_fkey`;

-- AlterTable
ALTER TABLE `course` ADD COLUMN `userKey` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `key`,
    ADD COLUMN `userKey` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Course_userKey_key` ON `Course`(`userKey`);

-- CreateIndex
CREATE UNIQUE INDEX `User_userKey_key` ON `User`(`userKey`);

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_userKey_fkey` FOREIGN KEY (`userKey`) REFERENCES `User`(`userKey`) ON DELETE RESTRICT ON UPDATE CASCADE;

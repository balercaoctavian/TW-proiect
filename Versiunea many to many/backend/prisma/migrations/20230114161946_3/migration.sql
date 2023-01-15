/*
  Warnings:

  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_userId_fkey`;

-- DropIndex
DROP INDEX `Course_userKey_key` ON `course`;

-- DropIndex
DROP INDEX `User_userKey_key` ON `user`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `userId`;

-- CreateTable
CREATE TABLE `UserCourse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserCourse` ADD CONSTRAINT `UserCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCourse` ADD CONSTRAINT `UserCourse_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

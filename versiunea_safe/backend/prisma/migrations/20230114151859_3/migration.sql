/*
  Warnings:

  - A unique constraint covering the columns `[userKey]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userKey` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `userKey` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Course_userKey_key` ON `Course`(`userKey`);

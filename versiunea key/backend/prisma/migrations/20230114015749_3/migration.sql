/*
  Warnings:

  - You are about to drop the column `endDate` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `endDate`,
    ADD COLUMN `durata` INTEGER NULL;

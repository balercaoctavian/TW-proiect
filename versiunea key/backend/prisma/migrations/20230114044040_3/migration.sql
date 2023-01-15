/*
  Warnings:

  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `price`,
    ADD COLUMN `desc` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - Made the column `durata` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `durata` INTEGER NOT NULL;

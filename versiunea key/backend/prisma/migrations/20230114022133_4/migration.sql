/*
  Warnings:

  - Added the required column `negativ` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neutru` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pozitiv` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `negativ` INTEGER NOT NULL,
    ADD COLUMN `neutru` INTEGER NOT NULL,
    ADD COLUMN `pozitiv` INTEGER NOT NULL;

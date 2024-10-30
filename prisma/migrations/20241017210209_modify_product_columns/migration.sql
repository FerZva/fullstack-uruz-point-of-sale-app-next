/*
  Warnings:

  - You are about to drop the column `branchId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `sku` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `branch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_branchId_fkey`;

-- DropIndex
DROP INDEX `Product_sku_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `branchId`,
    DROP COLUMN `category`,
    DROP COLUMN `sku`,
    ADD COLUMN `description` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `branch`;

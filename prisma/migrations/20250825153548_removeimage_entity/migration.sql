/*
  Warnings:

  - You are about to drop the column `imageId` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Brand" DROP CONSTRAINT "Brand_imageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Category" DROP CONSTRAINT "Category_imageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_imageId_fkey";

-- DropIndex
DROP INDEX "public"."Brand_imageId_key";

-- DropIndex
DROP INDEX "public"."Category_imageId_key";

-- DropIndex
DROP INDEX "public"."Product_imageId_key";

-- AlterTable
ALTER TABLE "public"."Brand" DROP COLUMN "imageId",
ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "imageId",
ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "imageId",
ADD COLUMN     "imageUrl" TEXT;

-- DropTable
DROP TABLE "public"."Image";

-- DropEnum
DROP TYPE "public"."Image_Type";

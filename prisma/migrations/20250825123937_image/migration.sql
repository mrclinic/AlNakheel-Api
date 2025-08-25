/*
  Warnings:

  - You are about to drop the column `image` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Brand" DROP COLUMN "image",
ADD COLUMN     "imageId" INTEGER;

-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "image",
ADD COLUMN     "imageId" INTEGER;

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "image",
ADD COLUMN     "imageId" INTEGER;

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" INTEGER,
    "categoryId" INTEGER,
    "brandId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_productId_key" ON "public"."Image"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_categoryId_key" ON "public"."Image"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_brandId_key" ON "public"."Image"("brandId");

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "public"."Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

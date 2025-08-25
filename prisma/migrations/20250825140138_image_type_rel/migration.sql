/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_brandId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_productId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Brand_imageId_key" ON "public"."Brand"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_imageId_key" ON "public"."Category"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_imageId_key" ON "public"."Product"("imageId");

-- AddForeignKey
ALTER TABLE "public"."Brand" ADD CONSTRAINT "Brand_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Category" ADD CONSTRAINT "Category_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

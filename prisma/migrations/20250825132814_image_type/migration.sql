-- CreateEnum
CREATE TYPE "public"."Image_Type" AS ENUM ('PRODUCT', 'BRAND', 'CATEGORY');

-- AlterTable
ALTER TABLE "public"."Image" ADD COLUMN     "imageType" "public"."Image_Type" NOT NULL DEFAULT 'PRODUCT';

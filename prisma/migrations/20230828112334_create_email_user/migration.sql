/*
  Warnings:

  - You are about to drop the column `Banner` on the `products` table. All the data in the column will be lost.
  - Added the required column `banner` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "Banner",
ADD COLUMN     "banner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email" TEXT NOT NULL;

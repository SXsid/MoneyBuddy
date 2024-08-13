-- CreateEnum
CREATE TYPE "PayStatus" AS ENUM ('debit', 'credit');

-- AlterTable
ALTER TABLE "Transection" ADD COLUMN     "payStatus" "PayStatus" NOT NULL DEFAULT 'credit';

/*
  Warnings:

  - You are about to drop the column `mode` on the `RewardType` table. All the data in the column will be lost.
  - You are about to drop the column `rewardId` on the `RewardType` table. All the data in the column will be lost.
  - Added the required column `modeId` to the `RewardType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RewardType" DROP CONSTRAINT "RewardType_rewardId_fkey";

-- AlterTable
ALTER TABLE "RewardType" DROP COLUMN "mode",
DROP COLUMN "rewardId",
ADD COLUMN     "modeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "RewardMode" (
    "id" SERIAL NOT NULL,
    "mode" TEXT,
    "rewardId" INTEGER NOT NULL,

    CONSTRAINT "RewardMode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RewardMode" ADD CONSTRAINT "RewardMode_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RewardType" ADD CONSTRAINT "RewardType_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "RewardMode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

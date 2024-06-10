/*
  Warnings:

  - You are about to drop the column `modeId` on the `RewardType` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `RewardType` table. All the data in the column will be lost.
  - You are about to drop the `ConditionMode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RewardMode` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rewardId` to the `RewardType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ConditionMode" DROP CONSTRAINT "ConditionMode_conditionId_fkey";

-- DropForeignKey
ALTER TABLE "RewardMode" DROP CONSTRAINT "RewardMode_rewardId_fkey";

-- DropForeignKey
ALTER TABLE "RewardType" DROP CONSTRAINT "RewardType_modeId_fkey";

-- DropIndex
DROP INDEX "Reward_stageId_key";

-- AlterTable
ALTER TABLE "Condition" ADD COLUMN     "conditions" TEXT[];

-- AlterTable
ALTER TABLE "Reward" ADD COLUMN     "mode" TEXT;

-- AlterTable
ALTER TABLE "RewardType" DROP COLUMN "modeId",
DROP COLUMN "type",
ADD COLUMN     "rewardId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ConditionMode";

-- DropTable
DROP TABLE "RewardMode";

-- AddForeignKey
ALTER TABLE "RewardType" ADD CONSTRAINT "RewardType_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

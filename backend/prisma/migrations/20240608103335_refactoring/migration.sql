/*
  Warnings:

  - You are about to drop the column `name` on the `ConditionMode` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `RewardMode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_rewardId_fkey";

-- DropIndex
DROP INDEX "Condition_stageId_key";

-- DropIndex
DROP INDEX "ConditionMode_conditionId_key";

-- DropIndex
DROP INDEX "Item_rewardId_key";

-- AlterTable
ALTER TABLE "ConditionMode" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "type";

-- DropTable
DROP TABLE "RewardMode";

-- CreateTable
CREATE TABLE "RewardType" (
    "id" SERIAL NOT NULL,
    "rewardId" INTEGER NOT NULL,
    "mode" TEXT,
    "type" TEXT,

    CONSTRAINT "RewardType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RewardType" ADD CONSTRAINT "RewardType_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "RewardType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

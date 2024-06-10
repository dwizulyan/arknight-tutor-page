/*
  Warnings:

  - You are about to drop the column `condition` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the column `rewards` on the `Stage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stage" DROP COLUMN "condition",
DROP COLUMN "rewards";

-- CreateTable
CREATE TABLE "Reward" (
    "id" SERIAL NOT NULL,
    "stageId" INTEGER NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RewardMode" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "RewardMode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "rewardId" INTEGER NOT NULL,
    "rarity" TEXT,
    "itemName" TEXT,
    "type" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "stageId" INTEGER NOT NULL,
    "mode" TEXT,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConditionMode" (
    "id" SERIAL NOT NULL,
    "conditionId" INTEGER NOT NULL,
    "name" TEXT,
    "conditions" TEXT[],

    CONSTRAINT "ConditionMode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reward_stageId_key" ON "Reward"("stageId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_rewardId_key" ON "Item"("rewardId");

-- CreateIndex
CREATE UNIQUE INDEX "Condition_stageId_key" ON "Condition"("stageId");

-- CreateIndex
CREATE UNIQUE INDEX "ConditionMode_conditionId_key" ON "ConditionMode"("conditionId");

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "RewardMode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Condition" ADD CONSTRAINT "Condition_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionMode" ADD CONSTRAINT "ConditionMode_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

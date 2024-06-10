/*
  Warnings:

  - You are about to drop the column `conditions` on the `Condition` table. All the data in the column will be lost.
  - You are about to drop the column `mode` on the `Condition` table. All the data in the column will be lost.
  - You are about to drop the column `stageId` on the `Condition` table. All the data in the column will be lost.
  - You are about to drop the column `rewardId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `Reward` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RewardType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `modeId` to the `Condition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dropId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Condition" DROP CONSTRAINT "Condition_stageId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_rewardId_fkey";

-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_stageId_fkey";

-- DropForeignKey
ALTER TABLE "RewardType" DROP CONSTRAINT "RewardType_rewardId_fkey";

-- AlterTable
ALTER TABLE "Condition" DROP COLUMN "conditions",
DROP COLUMN "mode",
DROP COLUMN "stageId",
ADD COLUMN     "condition" TEXT[],
ADD COLUMN     "modeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "rewardId",
ADD COLUMN     "dropId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Reward";

-- DropTable
DROP TABLE "RewardType";

-- CreateTable
CREATE TABLE "Mode" (
    "id" SERIAL NOT NULL,
    "mode" TEXT,
    "stageId" INTEGER NOT NULL,

    CONSTRAINT "Mode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drops" (
    "id" SERIAL NOT NULL,
    "modeId" INTEGER NOT NULL,

    CONSTRAINT "Drops_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mode" ADD CONSTRAINT "Mode_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Condition" ADD CONSTRAINT "Condition_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drops" ADD CONSTRAINT "Drops_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_dropId_fkey" FOREIGN KEY ("dropId") REFERENCES "Drops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

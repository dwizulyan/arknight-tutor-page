import { Hono, Context } from "hono"
import { PrismaClient, Stage, Prisma } from "@prisma/client"
import { constrainedMemory } from "process";

const prisma = new PrismaClient()
const stage = new Hono();

stage.get("/", async (c: Context) => {
    const { id } = c.req.query();
    try {
        if (id) {
            const getStage = await prisma.stage.findFirst({
                where: {
                    id: Number(id)
                },
                include: {
                    chapter: true,
                    mode: {
                        include: {
                            rewards: {
                                include: {
                                    items: true
                                }
                            },
                            conditions: true
                        }

                    }
                }
            });
            return c.json({
                success: true,
                message: `Successfully get Record(s)`,
                data: getStage
            })
        }

        const getStage = await prisma.stage.findMany({
            include: {
                chapter: true,
                mode: {
                    include: {
                        rewards: {
                            include: {
                                items: true
                            }
                        },
                        conditions: true
                    }

                }
            }
        });
        return c.json({
            success: true,
            message: `Successfully get Record(s)`,
            data: getStage
        })
    } catch (err) {
        return c.json({
            success: true,
            message: `Failed`,
            data: err.toString()
        })
    }
})

stage.post("/", async (c: Context) => {
    try {
        const createStage = await prisma.stage.create({
            data: {
                title: "Collapse",
                code: "0-1",
                chapter: {
                    connect: {
                        id: 1,
                    }
                },
                mode: {
                    create: [
                        {
                            mode: "Normal",
                            conditions: {
                                create: {
                                    description: ["The Enemy's vanguard has appeared to your three o'clock. Deploy melee Operators to stop them."]
                                }
                            },
                            rewards: {
                                create: {
                                    items: {
                                        create: [
                                            {
                                                itemName: "Originite Prime",
                                                rarity: "First Clear",
                                                type: "First Clear"
                                            }, {
                                                itemName: "Recruitment Permit",
                                                rarity: "First Clear",
                                                type: "First Clear"
                                            }, {
                                                itemName: "Drill Battle Record",
                                                rarity: "Regular Drops",
                                                type: "Guaranteed"
                                            }, {
                                                itemName: "Drill Battle Record",
                                                type: "Regular Drops",
                                                rarity: "Guaranteed"
                                            }, {
                                                itemName: "Drill Battle Record",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Pure Gold",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Orirock",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Damaged Device",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Ester",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Sugar Substitute",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Oriron Shard",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }, {
                                                itemName: "Diketon",
                                                type: "Extra Drops",
                                                rarity: "Rare"
                                            }
                                        ]
                                    }
                                }
                            }
                        }, {
                            mode: "Challange",
                            conditions: {
                                create: {
                                    description: ["Deployment Points will not automatically recover."]
                                }

                            }, rewards: {
                                create: {
                                    items: {
                                        create: [
                                            {
                                                itemName: "Originite Prime", type: "First Clear", rarity: "First Clear"
                                            },
                                        ]
                                    }
                                }
                            }
                        }
                    ]
                }
            },

        })

        return c.json({
            success: true,
            message: `SuccessFully create Record`,
            data: createStage
        })
    } catch (err) {
        return c.json({
            success: true,
            message: err.toString(),
            data: {}
        })
    }
})

stage.delete("/", async (c: Context) => {
    try {
        // code below function as delete procedure for multiple related records 
        const deleteItems = await prisma.item.deleteMany();
        const deleteReward = await prisma.drops.deleteMany();

        const deleteCondition = await prisma.condition.deleteMany();

        const deleteMode = await prisma.mode.deleteMany();
        const deleteStage = await prisma.stage.deleteMany();
        return c.json({
            success: true,
            message: `SuccessFully delete Record`,
            data: deleteStage
        })
    } catch (err) {
        return c.json({
            success: true,
            message: err.toString(),
            data: {}
        })
    }
})

export default stage
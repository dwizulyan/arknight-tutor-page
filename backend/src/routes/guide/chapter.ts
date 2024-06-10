import { Hono, Context } from "hono"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const chapter = new Hono()

chapter.get("/", async (c: Context) => {
    try {
        const getChapter = await prisma.chapter.findMany();
        return c.json({
            success: true,
            message: `Successfully get Record(s)`,
            data: getChapter
        })
    } catch (err) {
        console.log(err)
    }
})

chapter.post("/", async (c: Context) => {
    const { title, cover } = c.req.query();
    try {
        const createChapter = await prisma.chapter.create({
            data: {
                title: title,
                cover: cover
            }
        })
        return c.json({
            success: true,
            message: `Successfully Create Record`,
            data: createChapter
        })
    } catch (err) {
        console.log()
    }
})

chapter.delete("/", async (c: Context) => {
    const { id } = c.req.query();
    try {
        const deleteChapter = await prisma.chapter.delete({
            where: {
                id: Number(id)
            }
        })
        return c.json({
            success: true,
            message: `Successfully Delete Record`,
            data: deleteChapter
        })
    } catch (err) {
        console.log(err)
    }
})
export default chapter
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from "hono/logger";
import { cors } from "hono/cors";

import stage from "./routes/guide/stage";
import chapterCategory from "./routes/guide/chapterCategory";
import chapter from './routes/guide/chapter';

const app = new Hono()

app.use(logger())
app.use(cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route("/api/guide/stage", stage)
//app.route("/api/guide/category", chapterCategory)
app.route("/api/guide/chapter", chapter)
const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

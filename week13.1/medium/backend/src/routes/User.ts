import { Hono } from 'hono'
import { PrismaClient } from "../generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import {
  signschema,
  signinschema,
  blogschema
} from "@nikhil2211/zod-schema";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>({ strict: false })


userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const valid = signschema.safeParse(body);

  if (!valid.success) {
    return c.json({
      message: "Validation failed"
    })
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    })
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({ jwt: token })
  } catch (e) {
    return c.json({ error: String(e) }, 500)
  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const valid = signinschema.safeParse(body);

  if (!valid.success) {
    return c.json({
      message: "Validation failed"
    })
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: valid.data.email,
        password: valid.data.password
      }
    })
    if (!user) {
      c.status(403);
      return c.json({
        message: "inconrrect creds"
      })
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({ jwt: token, msg: "signedin" })

  } catch (e) {
    return c.json({ error: String(e) }, 500)
  }
})

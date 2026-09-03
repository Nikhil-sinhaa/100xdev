import { Hono } from 'hono' 
import { PrismaClient } from "./generated/prisma/client"; 
import { withAccelerate } from '@prisma/extension-accelerate' 
import { sign, verify } from 'hono/jwt' 
import { z } from 'zod'
import { userRouter } from './routes/User';
import { blogRouter } from './routes/Blog';
import { cors } from 'hono/cors'

const app = new Hono<{ 
  Bindings: { 
    DATABASE_URL: string 
  }, 
  Variables: { 
    userId: string 
  } 
}>({ strict: false })
app.use('/*', cors())

app.route("/api/v1/user", userRouter); 
app.route("/api/v1/blog", blogRouter); 
 

 
app.get('/', (c) => { 
  return c.text('Hello Hono!') 
}) 

 
export default app
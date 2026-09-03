import { Hono } from 'hono' 
import { PrismaClient } from "../generated/prisma/client"; 
import { withAccelerate } from '@prisma/extension-accelerate' 
import { sign, verify } from 'hono/jwt' 
import { blogschema } from '@nikhil2211/zod-schema'

 
export const blogRouter = new Hono<{ 
  Bindings: { 
    DATABASE_URL: string ,
    JWT_SECRET:string
  }, 
  Variables: { 
    userId: string 
  } 
}>({ strict: false })


blogRouter.use('/*', async (c, next) => { 
  const authHeader = c.req.header('authorization') || "";
  if (!authHeader || !authHeader.startsWith('Bearer ')) { 
    return c.json({ error: 'Unauthorized' }, 401) 
  } 
  const token = authHeader.split(' ')[1] 
  
  try {
    const user= await verify(token, c.env.JWT_SECRET, 'HS256')
    if(user){
        c.set("userId",user.id as string)
        await next()
    }
    else{
        c.status(403);
        return c.json({
            message:"you are not logged in"
        })
    }
  } catch(e) {
    c.status(403);
    return c.json({
        message:"you are not logged in"
    })
  }
}) 
 
blogRouter.post('/', async(c) => { 
    const prisma = new PrismaClient({ 
    accelerateUrl: c.env.DATABASE_URL, 
  }).$extends(withAccelerate()); 

 try {
  const body = await c.req.json();
    const valid = blogschema.safeParse(body)

if (!valid.success) {
  return c.json({
    message: "Validation failed"
  }, 400);
}
    
    const authorId = c.get("userId");
    const blog = await prisma.post.create({
      data:{
        title:valid.data.title,
        content:valid.data.content,
        authorId: authorId
      }
    });
    return c.json({
        id:blog.id
    });
 } catch (error) {
    return c.json({ error: 'Failed to create blog' }, 400);
 }
  
}) 
 
blogRouter.get('/bulk', async(c) => { 
      const prisma = new PrismaClient({ 
    accelerateUrl: c.env.DATABASE_URL, 
  }).$extends(withAccelerate()); 
  const blog = await prisma.post.findMany();
  //skiping pagination
  return c.json({blog});  
}) 

blogRouter.get('/:id', async(c) => { 
  const prisma = new PrismaClient({ 
    accelerateUrl: c.env.DATABASE_URL, 
  }).$extends(withAccelerate()); 

  try {
    const id = c.req.param("id");
    const blog = await prisma.post.findFirst({
      where: {
        id: id
      }
    });
    return c.json({ blog });
  } catch (error) {
    return c.json({ error: 'Failed to find blog' }, 400);
  }
}) 
 
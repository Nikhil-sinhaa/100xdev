import { z } from 'zod';

export const signschema = z.object({
  name: z.string().optional(),
  email: z.email(),
  password: z.string()
});

export type signschema = z.infer<typeof signschema>;


export const signinschema = z.object({
  email: z.email(),
  password: z.string()
});

export type signinschema = z.infer<typeof signinschema>;


export const blogschema = z.object({
  title: z.string(),
  content: z.string()
});

export type blogschema = z.infer<typeof blogschema>;
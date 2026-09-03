"use server"

import client from "@/lib/db"

export async function signup(username: string, password: string): Promise<boolean> {
  try {
    await client.user.create({
      data: { username, password }
    })
    return true
  } catch (e) {
    return false
  }
}

export async function signin(username: string, password: string): Promise<boolean> {
  try {
    const user = await client.user.findFirst({
      where: { username, password }
    })
    return !!user
  } catch (e) {
    return false
  }
}

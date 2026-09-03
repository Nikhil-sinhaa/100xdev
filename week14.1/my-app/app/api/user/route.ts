import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/db"

// OLD LOGIC (kept for reference):
// import { PrismaClient } from '../../generated/prisma/client'
// import { PrismaPg } from '@prisma/adapter-pg'
// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
// const client = new PrismaClient({ adapter })


// export async function GET(){
    
//     return Response.json({
//         email:"nikhilsinha@gmail.com",
//         name:"Nikhil"
//     })
// }
export async function GET(req:NextRequest){
    const user = await client.user.findFirst();
    return NextResponse.json({
        username:user?.username,
        name:"Nikhil"
    })
}

export async function POST(req:NextRequest){
    const body = await req.json();
    try {
        
        await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(body);
    return NextResponse.json({
        body,
        message:"You are logged in"
    })
    } catch (error) {
        console.log(error);
        return NextResponse.json(
        { message: "Error while Signing in" },
        { status: 411 }
        );
    }
}



// export async function POST(req:NextRequest){
//     const body = await req.json();
//      for header====>

//   console.log(req.headers.get("authorization"));
//      for query parameters=>
//   console.log(req.nextUrl.searchParams.get("name"));
//   return NextResponse.json({message:"you are signed in"})
// }

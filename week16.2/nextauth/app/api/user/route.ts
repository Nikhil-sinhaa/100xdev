import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Next_Auth } from "@/app/lib/auth";

export async function GET(){
    const session = await getServerSession(Next_Auth);
    return NextResponse.json({
        name:session?.user?.name
    })
}
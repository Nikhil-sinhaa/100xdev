// ❌ ORIGINAL (buggy) CODE — commented out for reference
// import { NextRequest, NextResponse } from "next/server"
// import Providers from `next-auth/providers`          // ❌ backtick syntax + v3 API
//
// export async function GET(req: NextRequest, { params }: { params: Promise<{ authRoutes: string[] }> }) {
//     const { authRoutes } = await params              // ❌ wrong param key (should be 'nextauth')
//     console.log(authRoutes)
//     return NextResponse.json({                       // ❌ stub bypasses NextAuth
//         message: "asd"
//     })
// }
import { Next_Auth } from "@/app/lib/auth"
import NextAuth from "next-auth"

const handler = NextAuth(Next_Auth)

export { handler as GET, handler as POST }


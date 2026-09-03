import { getServerSession } from "next-auth";
import { Next_Auth } from "@/app/lib/auth";

export default async function UserPage(){
    const session = await getServerSession(Next_Auth);
    return <div>
        User components
        {JSON.stringify(session)}
    </div>
}
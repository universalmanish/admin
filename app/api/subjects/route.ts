import db from "@/db/drizzle"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await db.query.subject.findMany()
    console.log(data)
    return NextResponse.json(data)
}
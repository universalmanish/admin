import db from "@/db/drizzle"
import { heading } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params}: {params: {headingId: number}}) => {
    const data = await db.query.heading.findFirst({
        where: eq(heading.id, params.headingId)
    })
    return NextResponse.json(data)
}

export const PUT = async (req: Request, {params}: {params: {headingId: number}}) => {
    const body = await req.json()
    const data = await db.update(heading).set({
        ...body,
    }).where(eq(heading.id, params.headingId)).returning()

    return NextResponse.json(data[0])
}

export const DELETE = async (req: Request, {params}: {params: {headingId: number}}) => {
    const data = await db.delete(heading).where(eq(heading.id, params.headingId)).returning()
    return NextResponse.json(data[0])
}
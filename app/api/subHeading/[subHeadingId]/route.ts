import db from "@/db/drizzle"
import { subHeading } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params}: {params: {subHeadingId: number}}) => {
    const data = await db.query.heading.findFirst({
        where: eq(subHeading.id, params.subHeadingId)
    })
    return NextResponse.json(data)
}

export const PUT = async (req: Request, {params}: {params: {subHeadingId: number}}) => {
    const body = await req.json()
    const data = await db.update(subHeading).set({
        ...body,
    }).where(eq(subHeading.id, params.subHeadingId)).returning()

    return NextResponse.json(data[0])
}

export const DELETE = async (req: Request, {params}: {params: {subHeadingId: number}}) => {
    const data = await db.delete(subHeading).where(eq(subHeading.id, params.subHeadingId)).returning()
    return NextResponse.json(data[0])
}
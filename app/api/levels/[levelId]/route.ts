import db from "@/db/drizzle"
import { levels } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params}: {params: {levelId: number}}) => {
    const data = await db.query.levels.findFirst({
        where: eq(levels.id, params.levelId)
    })
    return NextResponse.json(data)
}

export const PUT = async (req: Request, {params}: {params: {levelId: number}}) => {
    const body = await req.json()
    const data = await db.update(levels).set({
        ...body,
    }).where(eq(levels.id, params.levelId)).returning()

    return NextResponse.json(data[0])
}

export const DELETE = async (req: Request, {params}: {params: {levelId: number}}) => {
    const data = await db.delete(levels).where(eq(levels.id, params.levelId)).returning()
    return NextResponse.json(data[0])
}
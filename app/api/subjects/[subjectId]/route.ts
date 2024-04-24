import db from "@/db/drizzle"
import { subject } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params}: {params: {subjectId: number}}) => {
    const data = await db.query.subject.findFirst({
        where: eq(subject.id, params.subjectId)
    })
    return NextResponse.json(data)
}

export const PUT = async (req: Request, {params}: {params: {subjectId: number}}) => {
    const body = await req.json()
    const data = await db.update(subject).set({
        ...body,
    }).where(eq(subject.id, params.subjectId)).returning()

    return NextResponse.json(data[0])
}

export const DELETE = async (req: Request, {params}: {params: {subjectId: number}}) => {
    const data = await db.delete(subject).where(eq(subject.id, params.subjectId)).returning()
    return NextResponse.json(data[0])
}
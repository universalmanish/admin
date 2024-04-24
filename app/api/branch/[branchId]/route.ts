import db from "@/db/drizzle"
import { branch } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params}: {params: {branchId: number}}) => {
    const data = await db.query.branch.findFirst({
        where: eq(branch.id, params.branchId)
    })
    return NextResponse.json(data)
}

export const PUT = async (req: Request, {params}: {params: {branchId: number}}) => {
    const body = await req.json()
    const data = await db.update(branch).set({
        ...body,
    }).where(eq(branch.id, params.branchId)).returning()

    return NextResponse.json(data[0])
}

export const DELETE = async (req: Request, {params}: {params: {branchId: number}}) => {
    const data = await db.delete(branch).where(eq(branch.id, params.branchId)).returning()
    return NextResponse.json(data[0])
}
import db from "@/db/drizzle"
import { subject } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await db.query.subject.findMany()
    return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  
    const body = await req.json();
  
    const data = await db.insert(subject).values({
      ...body,
    }).returning();
  
    return NextResponse.json(data[0]);
  };

  export const PUT = async (req: Request) => {
  
    const body = await req.json();
    const data = await db.update(subject).set({
      ...body,
    }).where(eq(subject.id, body.id)).returning();
  
    return NextResponse.json(data[0]);
  };
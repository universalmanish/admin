import db from "@/db/drizzle"
import { heading } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await db.query.heading.findMany()
    return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  
    const body = await req.json();
  
    const data = await db.insert(heading).values({
      ...body,
    }).returning();
  
    return NextResponse.json(data[0]);
  };

  export const PUT = async (req: Request) => {
  
    const body = await req.json();
    const data = await db.update(heading).set({
      ...body,
    }).where(eq(heading.id, body.id)).returning();
  
    return NextResponse.json(data[0]);
  };
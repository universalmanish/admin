import db from "@/db/drizzle"
import { subHeading } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await db.query.subHeading.findMany()
    return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  
    const body = await req.json();
  
    const data = await db.insert(subHeading).values({
      ...body,
    }).returning();
  
    return NextResponse.json(data[0]);
  };

  export const PUT = async (req: Request) => {
  
    const body = await req.json();
    const data = await db.update(subHeading).set({
      ...body,
    }).where(eq(subHeading.id, body.id)).returning();
  
    return NextResponse.json(data[0]);
  };
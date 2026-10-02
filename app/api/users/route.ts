import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    const users = await prisma.user.findMany({orderBy:{name:'asc'}})
    if(!users)
        return NextResponse.json('not found',{status:400})
    return NextResponse.json(users)
}
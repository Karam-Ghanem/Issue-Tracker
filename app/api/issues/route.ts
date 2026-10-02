import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import IssueSchema from "@/app/validate";
import authProvider from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";

export async function POST(request:NextRequest){
    const session = await getServerSession(authProvider);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const body = await request.json();
    const validation = IssueSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error:validation.error},{status:400})
    }
    const newIssue = await prisma.issue.create({
        data:{title:body.title,description:body.description}
    })
    return NextResponse.json(newIssue,{status:201})
}
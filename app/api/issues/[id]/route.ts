import authProvider from "@/app/auth/authOptions";
import IssueSchema from "@/app/validate";
import prisma from "@/prisma/client";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

interface Props{
    params:Promise<{id:string}>
}

export async function PATCH(request:NextRequest,{params}:Props){
    const session = await getServerSession(authProvider);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }  
    const {id} = await params;
    const issueID = parseInt(id)
    const body = await request.json();
    const {assignedToUserId,title,description} = body
    if (assignedToUserId){
        const user = await prisma.user.findUnique({ where: { id: assignedToUserId }})
        if(!user) return NextResponse.json({error:"not found"},{status:401})

    }
    const validate = IssueSchema.safeParse(body);
    if(!validate.success)
        return NextResponse.json(validate.error.format(),{status:400})
    const currentIssue = await prisma.issue.findUnique({
        where:({id:issueID})
    })
    if(!currentIssue)
         return NextResponse.json({error:'Not Valid Issue'}, { status: 404 })

    const updatedIssue = await prisma.issue.update({
        where:({id:issueID}),
        data:{
            title,
            description,
            assignedToUserId,
        }
    })
     return NextResponse.json(updatedIssue)
}






export async function DELETE(request:NextRequest,{params}:Props) {
    const session = await getServerSession(authProvider);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const {id} = await params;
    const issueID = parseInt(id)
    const currentIssue = await prisma.issue.findUnique({
        where:({id:issueID})
    })
    if(!currentIssue)
        return NextResponse.json({error:'not found'},{status:404})
    await prisma.issue.delete({
        where:({id:issueID})
    })
    return NextResponse.json({})
}
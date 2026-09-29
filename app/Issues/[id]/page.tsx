import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

interface Props{
params: Promise<{ id: string }>
}
const IssueDetails =async({params}:Props) => {
    const {id} = await params;

    const issueID = parseInt(id)
    const currentIssue = await prisma.issue.findUnique({
        where:{id: issueID}
    })

    if(!currentIssue)
        notFound()

  return (
    <div>
      <p>{currentIssue?.title}</p>
      <p>{currentIssue?.description}</p>
      <p>{currentIssue?.status}</p>
      <p>{currentIssue?.createdAt.toDateString()}</p>
    </div>
  )
}

export default IssueDetails

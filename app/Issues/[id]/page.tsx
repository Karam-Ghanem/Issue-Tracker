import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import prisma from '@/prisma/client'
import { Heading } from '@radix-ui/themes';
import { notFound } from 'next/navigation'
import ReactMarkDown from 'react-markdown';

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
      <Heading>{currentIssue?.title}</Heading>
      <IssueStatusBadge status={currentIssue.status}/>
      <p>{currentIssue?.createdAt.toDateString()}</p>

    <article className="prose lg:prose-xl">
    <div className="bg-cyan-400 p-7"><ReactMarkDown>{currentIssue?.description}</ReactMarkDown></div>

    </article>




    </div>
  )
}

export default IssueDetails

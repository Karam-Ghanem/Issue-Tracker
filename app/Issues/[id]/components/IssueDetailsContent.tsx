import IssueStatusBadge from "@/app/components/IssueStatusBadge"
import { Issue } from "@prisma/client";
import { Box, Heading } from "@radix-ui/themes"
import ReactMarkDown from 'react-markdown';

interface Props{
    currentIssue: Issue;
}
const IssueDetailsContent = ({currentIssue}:Props) => {
  return (
    <Box>
      <Heading>{currentIssue?.title}</Heading>
      <IssueStatusBadge status={currentIssue.status}/>
      <p>{currentIssue?.createdAt.toDateString()}</p>
    <article className="prose lg:prose-xl">
    <div className="bg-cyan-400 p-7"><ReactMarkDown>{currentIssue?.description}</ReactMarkDown></div>
    </article>
    </Box>
  )
}

export default IssueDetailsContent

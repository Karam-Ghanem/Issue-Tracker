import prisma from "@/prisma/client"
import {IssuesForm} from './importIssuesForm'

interface Props{
    params:Promise<{id:string}>
}

const EditIssuePage = async({params}:Props) => {
    const id = await params;
    const issueID = parseInt(id.id)
    const currentIssue = await prisma.issue.findUnique({
        where:{id:issueID}
    })
  return (
    <IssuesForm currentIssue={currentIssue!}/>
  )
}

export default EditIssuePage;



export async  function generateMetadata({params}:Props){
  const id = await params;
  const issueID = parseInt(id.id)
  const currentIssue = await prisma.issue.findUnique({
    where: { id: issueID }
  })

  return{
    title: `Edit Issue - ${currentIssue?.title}`,
    description:`Edit the details of the issue titled '${currentIssue?.title}'.`
  }
}
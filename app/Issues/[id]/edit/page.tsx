
import prisma from "@/prisma/client"
// import IssuesForm from "../../components/IssuesForm";
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

export default EditIssuePage

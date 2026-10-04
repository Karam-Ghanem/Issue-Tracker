import prisma from '@/prisma/client'
import { Flex, Grid,  } from '@radix-ui/themes';
import { notFound } from 'next/navigation'
import IssueDetailsContent from './components/IssueDetailsContent';
import EditIssueButton from './components/EditIssueButton';
import DeleteIssueButton from './components/DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authProvider from '@/app/auth/authOptions';
import AssignIssueToUser from './components/AssignIssueToUser';


interface Props{
params: Promise<{ id: string }>
}

const IssueDetails =async({params}:Props) => {

  const session =await getServerSession(authProvider)
    const {id} = await params;

    const issueID = parseInt(id)
    const currentIssue = await prisma.issue.findUnique({
        where:{id: issueID}
    })

    if(!currentIssue)
        notFound()

  return (
    <Grid columns={{initial:'1',md:'2'}} gap={'6'} >
      <IssueDetailsContent currentIssue={currentIssue}/>
    <Flex direction={'column'} className='w-max' gap={'4'}>
      <EditIssueButton id={currentIssue.id}/>
      {session && <DeleteIssueButton id={currentIssue.id} /> }
      <AssignIssueToUser issue={currentIssue}/>
      
    </Flex>

    </Grid>





  )
}

export default IssueDetails


export async function generateMetadata({ params }:Props){
  const {id} = await params
  const issueId = parseInt(id)
  const issue = await prisma.issue.findUnique({
    where:{id:issueId}
  })
  return{
    title: `Details of ${issue?.title}`,
    description:`View and manage the details of the issue titled "${issue?.title}".`
  }

}
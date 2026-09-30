import prisma from '@/prisma/client'
import { Flex, Grid,  } from '@radix-ui/themes';
import { notFound } from 'next/navigation'
import IssueDetailsContent from './components/IssueDetailsContent';
import EditIssueButton from './components/EditIssueButton';
import DeleteIssueButton from './components/DeleteIssueButton';

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


    <Grid columns={{initial:'1',md:'2'}} gap={'6'} >
      <IssueDetailsContent currentIssue={currentIssue}/>
    <Flex direction={'column'} className='w-max' gap={'4'}>
      <EditIssueButton id={currentIssue.id}/>
      <DeleteIssueButton  id={currentIssue.id}/>
    </Flex>

    </Grid>





  )
}

export default IssueDetails

import prisma from '@/prisma/client'
import { Box, Grid,  } from '@radix-ui/themes';
import { notFound } from 'next/navigation'
import IssueDetailsContent from './components/IssueDetailsContent';
import EditIssueButton from './components/EditIssueButton';

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


    <Grid columns={{initial:'1',md:'2'}} >
      <IssueDetailsContent currentIssue={currentIssue}/>
    <Box>
      <EditIssueButton id={currentIssue.id}/>
    </Box>

    </Grid>





  )
}

export default IssueDetails

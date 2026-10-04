import prisma from "@/prisma/client"
import IssuesAction from "./IssuesAction";
import IssuesTable from "./components/IssuesTable";
import { Box } from "@radix-ui/themes";
import { Issue, Status } from "@prisma/client";
import Pagenation from "../components/Pagenation";
import { Metadata } from "next";

interface Props{
	searchParams: Promise<{ status: Status, sortBy:keyof Issue ,page:string}>
}
const Issues = async ({ searchParams }:Props) => {
	const {status,sortBy,page} = await searchParams
	const currentPage = parseInt(page) || 1;
	const pageSize = 4;
	const sortedBy = ['title', 'status', 'createdAt'].includes(sortBy) ? sortBy : undefined;
	const statuses = Object.values(Status);
	const filterStatus = statuses.includes(status as Status)
		? (status as Status)
		: undefined;
	
	const IssueCount = await prisma.issue.count({
		where:{
			status
		}
	})

	const issues = await prisma.issue.findMany({
	where:({
		status: filterStatus
	}),
	orderBy:
	 sortedBy ?
	 { [sortedBy]: 'asc' }
	  : undefined,

	take:pageSize,
	skip:(currentPage-1)*pageSize
  });
  




  return (
    <Box className="m-2.5">
      	<IssuesAction/>
		<IssuesTable issues={issues} searchParams={await searchParams}/>
		<Pagenation currentPage={currentPage} itemCount={IssueCount} pageSize={pageSize}/>
    </Box>
  )
}

export default Issues

export const metadata: Metadata = {
	title: 'Issues',
	description: 'View and filter project issues',
};

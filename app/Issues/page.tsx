import prisma from "@/prisma/client"
import { Button, Table } from "@radix-ui/themes"
import Link from "next/link"

const Issues = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="m-2.5">
      <div className="mb-2.5"><Button><Link href='/Issues/new'>Add Issue</Link></Button></div>
      <Table.Root variant="surface" size='3'>
	<Table.Header>
		<Table.Row >
			<Table.ColumnHeaderCell className="text-center md:text-start">Issue</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell className="hidden md:table-cell">Time</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body>
	{issues.map((issue) => (
	  <Table.Row key={issue.id}>
			<Table.Cell className="text-center md:text-start">
        {issue.title}
        <div className="block md:hidden ">{issue.status}</div>
        </Table.Cell>
			<Table.Cell className="hidden md:table-cell">{issue.status}</Table.Cell>
			<Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
		</Table.Row>
	))}



	</Table.Body>
</Table.Root>

    </div>
  )
}

export default Issues

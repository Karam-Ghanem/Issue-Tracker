import { Table } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssuesAction from './IssuesAction'

const loading = () => {
    const issues = [1,2,3,4,5]
  return (
    <>
    <IssuesAction/>
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
	  <Table.Row key={issue}>
			<Table.Cell className="text-center md:text-start">
        <Skeleton/>
        <div className="block md:hidden "><Skeleton/></div>
        </Table.Cell>
			<Table.Cell className="hidden md:table-cell"><Skeleton/>
</Table.Cell>
			<Table.Cell className="hidden md:table-cell"><Skeleton/></Table.Cell>
		</Table.Row>
	))}
	</Table.Body>
</Table.Root>
    </>

  )
}

export default loading

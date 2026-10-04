'use client'
import { Table } from "@radix-ui/themes"
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Link from "next/link";
import { Issue } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface Props{
    issues:Issue[],
    searchParams:{status:string,sortBy:keyof Issue}
}

const IssuesTable = ({issues,searchParams}:Props) => {

    const columns:{label:string,value:keyof Issue,className:string}[] = [
        { label: "Title", value: 'title', className: "text-center md:text-start cursor-pointer" },
        { label: "Status", value: 'status', className: "hidden md:table-cell cursor-pointer" },
        {label:"CreatedAt",value:'createdAt',className :"hidden md:table-cell cursor-pointer"
},
    ]


  return (
      <Table.Root variant="surface" size='3' >
          <Table.Header>
              <Table.Row >
                {columns.map((column)=>
                    <Table.ColumnHeaderCell  key={column.value} className={column.className}>
                        <NextLink href={{
                            query: { ...searchParams,sortBy:column.value}
                        }}>
                            {column.label}{" "}
                           {searchParams.sortBy===column.value && < ArrowUpIcon className="inline" />}
                        </NextLink>
                       
                    </Table.ColumnHeaderCell>
                )}
              </Table.Row>
          </Table.Header>
          <Table.Body>
              {issues.map((issue) => (
                  <Table.Row key={issue.id}>
                      <Table.Cell className="text-center md:text-start">
                          <Link href={`/Issues/${issue.id}`}>{issue.title}</Link>
                          <div className="block md:hidden ">{issue.title}</div>
                      </Table.Cell>
                      <Table.Cell className="hidden md:table-cell"><IssueStatusBadge status={issue.status} />
                      </Table.Cell>
                      <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
                  </Table.Row>
              ))}
          </Table.Body>
      </Table.Root>
  )
}

export default IssuesTable

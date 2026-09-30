import {  Button } from "@radix-ui/themes"
import Link from "next/link"
import { Pencil2Icon } from "@radix-ui/react-icons";

interface Props{
    id:number;
}
const EditIssueButton = ({id}:Props) => {
  return (
    <Button className="flex"><Link href={`/Issues/${id}/edit`}><Pencil2Icon className="inline me-2 "/>Edit Issue</Link></Button>
  )
}

export default EditIssueButton

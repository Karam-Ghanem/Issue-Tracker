import { Status } from "@prisma/client"
import { Badge } from "@radix-ui/themes"

const MappingStatus : Record<Status,{label:string,color:"green" | "orange"| "red"}> = {
    OPEN: { label: "OPEN", color: "green" },
    IN_PROGREES: { label: "IN_PROGRESS", color: "orange" },
    CLOSED: { label: "CLOSED", color: "red" },
}


const IssueStatusBadge = ({status}:{status:Status}) => {
  return (
    <div>
      	<Badge color={MappingStatus[status].color}>{MappingStatus[status].label}</Badge>
    </div>
  )
}

export default IssueStatusBadge;

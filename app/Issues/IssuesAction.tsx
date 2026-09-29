import { Button } from "@radix-ui/themes"
import Link from "next/link"
const IssuesAction = () => {
  return (
      <div className="mb-2.5"><Button><Link href='/Issues/new'>Add Issue</Link></Button></div>

  )
}

export default IssuesAction

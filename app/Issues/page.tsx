import { Button } from "@radix-ui/themes"
import Link from "next/link"

const Issues = () => {
  return (
    <div className="m-2.5">
      <Button><Link href='/Issues/new'>Add Issue</Link></Button>
    </div>
  )
}

export default Issues

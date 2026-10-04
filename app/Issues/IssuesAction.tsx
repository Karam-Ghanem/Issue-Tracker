import { Box, Button, Flex } from "@radix-ui/themes"
import Link from "next/link"
import FilterationProcess from "./components/FilterationProccess"
const IssuesAction = () => {
  return (
    <Flex justify={'between'} className="pe-6">
      <Box className="mb-2.5"><Button><Link href='/Issues/new'>Add Issue</Link></Button></Box>
      <Box >
        <FilterationProcess/>
      </Box>
    </Flex>
  )
}

export default IssuesAction

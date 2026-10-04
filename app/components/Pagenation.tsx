'use client'
import {  ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { Box, Button, Flex } from "@radix-ui/themes"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

interface Props{
    itemCount:number,
    pageSize:number,
    currentPage:number,
}
const Pagenation = ({itemCount,pageSize,currentPage}:Props) => {
    const pageCount = Math.ceil(itemCount/pageSize)
    const searchParams = useSearchParams()
    const router = useRouter()


    const changePage = (page:number)=>{
      const params = new URLSearchParams(searchParams)
      params.set('page',page.toString())
      router.push(`?${params.toString()}`)
    }
    
  return (
    <Flex align={'center'} justify={'center'} className="my-6">
      <Flex gap={'3'}>
        <Button color={currentPage <= 1 ? 'gray' : 'amber'} variant="soft" disabled={currentPage<=1} onClick={()=>changePage(1)}>
          <DoubleArrowLeftIcon  className="cursor-pointer"/>
        </Button>
        <Button color={currentPage <= 1 ? 'gray' : 'amber'} variant="soft" disabled={currentPage <= 1} onClick={() => changePage(currentPage- 1)}>
          <ChevronLeftIcon className="cursor-pointer"/>
        </Button>

      </Flex>
      <Box className="px-4">page {currentPage} of {pageCount}</Box>
      <Flex gap={'3'}>
        <Button color={currentPage >= pageCount ? 'gray' : 'amber'} variant="soft" disabled={currentPage >= pageCount} onClick={() => changePage(currentPage+1)}>
          <DoubleArrowRightIcon className="cursor-pointer"/> 
        </Button>
        <Button color={currentPage >= pageCount ? 'gray' : 'amber'} variant="soft" disabled={currentPage >= pageCount} onClick={() => changePage(pageCount)}>
          <ChevronRightIcon className="cursor-pointer" />  
        </Button>
      </Flex>
    </Flex>
  )
}

export default Pagenation

'use client'
import { Status } from "@prisma/client"
import {  Select } from "@radix-ui/themes"
import { useRouter, useSearchParams } from "next/navigation"



const FilterationProcess = () => {

    const searchParams = useSearchParams();
    const router = useRouter()
    const status:{label:string,value?:Status}[] = [
        {label:"All"},
        {label:"Open",value:"OPEN"},
        {label:"Closed",value:"CLOSED"},
        {label:"In_Progrees",value:"IN_PROGREES"}
    ]



  return (
      <Select.Root onValueChange={(status)=>{
        const params = new URLSearchParams();
        if(status) params.append('status', status)
          if(searchParams.get('sortBy')){
            params.append('sortBy',searchParams.get('sortBy') || '')
          }
          const query = params.size ? `?${params.toString()}` : ''
        router.push(`/Issues/${query}`)


      }}>




          <Select.Trigger placeholder="Filter By ..." />
          <Select.Content>
              <Select.Group>
                  <Select.Label>Select One Status</Select.Label>
                  {status.map((item)=>
                    <Select.Item key={item.value ||'all'} value={item.value!}>{item.label}</Select.Item>
                  )}
                  
              </Select.Group>
          </Select.Content>
      </Select.Root>
  )
}

export default FilterationProcess

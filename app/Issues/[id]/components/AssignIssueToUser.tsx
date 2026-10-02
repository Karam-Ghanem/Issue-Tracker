'use client'
import { Issue, User } from '@prisma/client'
import { Select, } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import SKELETON from '@/app/components/SKEleton'
import toast, { Toaster } from 'react-hot-toast';
const AssignIssueToUser = ({issue}:{issue:Issue}) => {

    const {data:users,error,isLoading} = useQuery<User[]>({
        queryKey:['users'],
        queryFn:()=>axios.get('/api/users').then(res=>res.data),
        staleTime:60*1000,
        retry:3
    })

    if(error) return null
    if (isLoading) return <SKELETON/>

    const currentUser = users?.find((user)=>user.id===issue.assignedToUserId)


  return (
    <>
          <Toaster position="bottom-right" />
          <Select.Root onValueChange={async(userId)=>{
          try {
            await axios.patch('/api/issues/' + issue.id, { assignedToUserId: userId || null }) ;
            toast.success("succsessfuly !")           
          } catch {
              toast.error("There is an error.")
         }
      }}>
          <Select.Trigger
          placeholder={issue.assignedToUserId? currentUser?.name ||""  : "Assign..."}
              className="inline-flex h-8.75 items-center justify-center gap-1.25 rounded bg-white px-3.75 text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-placeholder:text-violet9"
              aria-label="Food" />
              <Select.Content>
              <Select.Group>
                  <Select.Label>Selet User To Assign Issue To </Select.Label>
                  {users?.map(user=>
                      <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>
                  )}
                  <Select.Item  value=''>UnAssignment</Select.Item>
              </Select.Group>
              </Select.Content>

      </Select.Root>
    </>

  )
}

export default AssignIssueToUser

'use client'
import { Button } from "@radix-ui/themes"
import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog } from "radix-ui";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ErrorMessageDialog from "./ErrorMessageDialog";
import Spinner from "@/app/components/Spinner";
interface Props {
  id: number;
}

const DeleteIssueButton = ({ id }: Props) => {
    const router = useRouter()
    const [isDeleting,setIsDeleting] = useState(false)
    const [error,setError] = useState(false)
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Button className="flex" color="red">
            <TrashIcon className="inline me-2" />
            Delete Issue{isDeleting&&<Spinner/>}
          </Button>
        </AlertDialog.Trigger>
        
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        
        <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow">
          <AlertDialog.Title className="m-0 text-lg font-semibold text-slate-900">
            Are you absolutely sure?
          </AlertDialog.Title>
          
          <AlertDialog.Description className="mb-5 mt-3 text-sm leading-relaxed text-slate-600">
            This action cannot be undone. This will permanently delete your
            issue and remove your data from our servers.
          </AlertDialog.Description>
          
          <div className="flex justify-end gap-3">
            <AlertDialog.Cancel asChild>
              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-slate-100 px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 select-none">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            
            <AlertDialog.Action asChild>


              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 select-none"
                 onClick={async()=>{
                    try {
                        // throw new Error("hello")
                        setIsDeleting(true)
                        console.log("error : ",error)
                        await axios.delete(`/api/issues/${id}`)
                        router.push('/Issues')
                    } catch {
                        setError(true);
                        setIsDeleting(false)
                    }
                 }}
              >
                Yes, delete issue
              </Button>


            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <ErrorMessageDialog setError={(t)=>setError(t)} error = {error}/> 



    </>
  )
}

export default DeleteIssueButton
'use client'
import { Button } from "@radix-ui/themes"
import { AlertDialog } from "radix-ui";

const ErrorMessageDialog = ({error,setError}:{error:boolean,setError:(error:boolean)=>void})=>{
    return(
      <AlertDialog.Root open={error}>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        
        <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow">
          <AlertDialog.Title className="m-0 text-lg font-semibold text-slate-900">
            Error
          </AlertDialog.Title>
          
          <AlertDialog.Description className="mb-5 mt-3 text-sm leading-relaxed text-slate-600">
            Can Not Delete This Issue
          </AlertDialog.Description>
          
          <div className="flex justify-end gap-3">
            <AlertDialog.Cancel asChild>
              <Button onClick={()=>setError(false)} className="inline-flex h-9 items-center justify-center rounded-md bg-slate-100 px-4 text-red text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 select-none">
            cancel
              </Button>
            </AlertDialog.Cancel>

          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    )
}

export default ErrorMessageDialog;


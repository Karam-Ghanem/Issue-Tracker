'use client'
// import dynamic from "next/dynamic";
// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });
import SimpleMDE from 'react-simplemde-editor'
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import IssueSchema from "@/app/validate";
import {z} from 'zod'
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";

// interface IssuesForm{
//   title: string,
//   description: string,
// }

type IssuesFormType = z.infer<typeof IssueSchema>

interface Props{
    currentIssue?:Issue
}
const IssuesForm = ({currentIssue}:Props)  => {
    
  const [error,setError] = useState('')
  const router = useRouter()
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssuesFormType>({ resolver: zodResolver(IssueSchema) })
  const [isSubmitted,setIsSubmitted] = useState(false);

  return (
    <div className="max-w-2xl">
    {error&&<Callout.Root color="red" className="mb-5">
	<Callout.Text>
		{error}
	</Callout.Text>
</Callout.Root>}

    <form onSubmit={handleSubmit(async(data)=>{
      try {
        setIsSubmitted(true)
        if(currentIssue?.id)
            await axios.patch(`/api/issues/${currentIssue.id}`,data)
        else{
        await axios.post('/api/issues',data);

        }
        router.push('/Issues')
        
      } catch {
        setIsSubmitted(false)
        setError('unexpected error occured')
      }
    })}>
          <div >
        <div className="mb-3.5">
        <TextField.Root placeholder="Title" {...register('title')} defaultValue={currentIssue?.title}>
	        <TextField.Slot>
	        </TextField.Slot>
        </TextField.Root>
       <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>
        <div className="mb-3.5">
            <Controller
            name="description"
            control={control} 
            render={({field})=><SimpleMDE placeholder="Description" {...field} />}
            defaultValue={currentIssue?.description}
            />
       <ErrorMessage>{errors.description?.message}</ErrorMessage>

        </div>
        <Button className="mt-3.5">{currentIssue? 'Submit Eddition Issue' : 'Submit Addition Issue'} {isSubmitted&&<Spinner/>}</Button>
    </div>
    </form>
    </div>

  )
}

export default IssuesForm

'use client'
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssuesForm{
  title: string,
  description: string,
}


const AddIssue = () => {
  const [error,setError] = useState('')
  const router = useRouter()
  const {register,control,handleSubmit} = useForm<IssuesForm>()

  return (
    <div className="max-w-2xl">


    {error&&<Callout.Root color="red" className="mb-5">
	<Callout.Text>
		{error}
	</Callout.Text>
</Callout.Root>}

    <form onSubmit={ handleSubmit(async(data)=>{
      try {
        await axios.post('/api/issues',data);
        router.push('/Issues')
        
      } catch (error) {
        setError('unexpected error occured')
      }
    })}>
          <div >
        <div className="mb-3.5">
        <TextField.Root placeholder="Title" {...register('title')}>
	        <TextField.Slot>
	        </TextField.Slot>
        </TextField.Root>
        </div>
        <div className="mb-3.5">
            <Controller
            name="description"
            control={control} 
            render={({field})=><SimpleMDE placeholder="Description" {...field}/>}
            />
        </div>
        <Button className="mt-3.5">Submit Addition Issue</Button>
    </div>
    </form>
    </div>

  )
}

export default AddIssue

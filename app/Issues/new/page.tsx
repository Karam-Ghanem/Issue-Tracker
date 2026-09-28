'use client'
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import React from "react";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from "next/navigation";

interface IssuesForm{
  title: string,
  description: string,
}


const AddIssue = () => {
  const router = useRouter()
  const {register,control,handleSubmit} = useForm<IssuesForm>()
  return (
    <form onSubmit={ handleSubmit(async(data)=>{
      await axios.post('/api/issues',data);
      router.push('/Issues')
    })}>
          <div className="max-w-2xl">
        <div className="mb-3.5">
        <TextField.Root placeholder="Title" {...register('title')}>
	        <TextField.Slot>
	        </TextField.Slot>
        </TextField.Root>
        </div>
        <div className="mb-3.5">
            {/* <TextArea placeholder="Description" /> */}
            <Controller
            name="description"
            control={control} 
            render={({field})=><SimpleMDE placeholder="Description" {...field}/>}
            />
            {/* <SimpleMDE placeholder="Description"/> */}
        </div>
        <Button className="mt-3.5">Submit Addition Issue</Button>
    </div>
    </form>
  )
}

export default AddIssue

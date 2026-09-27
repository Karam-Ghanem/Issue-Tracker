import { Button, TextArea, TextField } from "@radix-ui/themes"

const AddIssue = () => {
  return (
    <div className="max-w-2xl">
        <div className="mb-3.5">
        <TextField.Root placeholder="Title">
	        <TextField.Slot>
	        </TextField.Slot>
        </TextField.Root>
        </div>
        <div className="mb-3.5">
            <TextArea placeholder="Description" />
        </div>
        <Button className="mt-3.5">Submit Addition Issue</Button>

    </div>
  )
}

export default AddIssue

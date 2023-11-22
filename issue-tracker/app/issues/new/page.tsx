"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMdeReact from "react-simplemde-editor";
import { useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register } = useForm<IssueForm>();
  console.log(register("title"));

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <SimpleMdeReact placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;

'use client'
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import NewPageLoading from "./NewPageLoading";
// import IssuesForm from "../components/IssuesForm";
const IssuesForm = dynamic(() => import("../components/IssuesForm"), {ssr: false,loading:()=><NewPageLoading/>});
const AddIssue = ()  => {
    

  return (
    <IssuesForm/>
  )
}

export default AddIssue

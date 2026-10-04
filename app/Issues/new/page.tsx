import "easymde/dist/easymde.min.css";
import { Metadata } from "next";
import IssuesForm from "./importIssueForm";
export const dynamic = 'force-dynamic';
const AddIssue = ()  => {
    

  return (
    <IssuesForm/>
  )
}

export default AddIssue

export const metadata: Metadata = {
  title: 'Issue Tracker - New Issue',
  description: 'Create and submit a new issue with title and detailed description.',
};
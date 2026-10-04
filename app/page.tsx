import { Metadata } from "next";

export default async function Home () {
  return (
    <div>
      Hello
    </div>
  );
}


export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'View and manage project issues',
};
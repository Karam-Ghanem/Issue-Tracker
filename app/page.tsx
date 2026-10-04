import { Metadata } from "next";
import { connection } from 'next/server'
export default async function Home () {
  await connection()
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
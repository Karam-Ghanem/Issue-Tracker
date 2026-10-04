'use client'
import dynamic from "next/dynamic";
import NewPageLoading from "./NewPageLoading";


const IssuesForm = dynamic(() => import("../components/IssuesForm"), { ssr: false, loading: () => <NewPageLoading/> });

export default IssuesForm
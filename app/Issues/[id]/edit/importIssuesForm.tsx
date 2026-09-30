'use client'
import dynamic from "next/dynamic";
import NewPageLoading from "../../new/NewPageLoading";

export const IssuesForm = dynamic(() => import('../../components/IssuesForm'), { ssr: false, loading: () => <NewPageLoading/> })
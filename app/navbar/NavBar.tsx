'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaBug } from 'react-icons/fa';
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";

import SKELETON from '@/app/components/SKEleton';







const NavBar = () => {

  return ( 
    <>
     <Container className="bg-amber-300">
      <Flex className=" justify-between py-4 space-x-3">
        <FaBug className="ms-1" size={25}/>
        <NavLinks/>
      <Box className=" w-full text-end">
        <AuthStatus/>
      </Box>
      </Flex>
    </Container> 
     </>
  )
}


const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "issues", href: "/Issues" },
    { label: "dashboard", href: "/dashboard" }

  ]
  return (
    <>
      <ul className="flex space-x-7">
        {links.map(link =>
          <li key={link.href} className={classNames({
            "text-zinc-200": currentPath === link.href,
            "text-zinc-500 hover:text-zinc-200": currentPath !== link.href
          })}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        )}
      </ul>
    </>
  )
}



const AuthStatus = ()=>{
  const { status, data: session } = useSession()
  if(status === 'loading'){
    return <SKELETON width={'3rem'}/>

  }

  if(status==='unauthenticated'){
    return(
      <span><Link href={'/api/auth/signin'}>Log In </Link> </span>
    )
  }

  return(
    <>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <button
              className="inline-flex size-8.75 items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
              aria-label="Customise options"
            >
              <Avatar className="cursor-pointer" src={session!.user?.image || ''} fallback='?' size={'2'} radius="full" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            className="min-w-55 rounded-md bg-white p-1.25 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group relative flex h-6.25 select-none items-center rounded-[3px] pl-6.25 pr-1.25 text-[13px] leading-none text-violet11 outline-none data-disabled:pointer-events-none data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1">
              {session!.user?.email}
              <div className="ml-auto pl-5 text-mauve11 group-data-disabled:text-mauve8 group-data-highlighted:text-white">
                <span className="size-1/4">{session!.user?.name}</span>
              </div>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="m-1.25 h-px bg-violet6" />

            <DropdownMenu.Item className="group relative flex h-6.25 select-none items-center rounded-[3px] pl-6.25 pr-1.25 text-[13px] leading-none text-violet11 outline-none data-disabled:pointer-events-none data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1">
              <span><Link href={'/api/auth/signout'}>Log out</Link> </span>

            </DropdownMenu.Item>

          </DropdownMenu.Content>
        </DropdownMenu.Root>

    </>
  )
}





export default NavBar;






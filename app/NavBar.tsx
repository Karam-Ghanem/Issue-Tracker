'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaBug } from 'react-icons/fa';
import classNames from "classnames";
const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        {label:"issues",href:"/Issues"},
        {label:"dashboard",href:"/dashboard"}
    ]
  return (
    <div className="bg-amber-500 flex space-x-5 p-7">
      <p><FaBug/></p>
      <ul className="flex space-x-5">
        {links.map(link=>
            // <li key={link.href} className="text-zinc-500 hover:text-zinc-200">
            <li key={link.href} className={classNames({
                "text-zinc-200": currentPath === link.href,
                "text-zinc-500 hover:text-zinc-200": currentPath !== link.href
            })}>
                <Link href={link.href}>{link.label}</Link>
            </li>
        )}
      </ul>
    </div>
  )
}

export default NavBar

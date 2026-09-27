import Link from "next/link"
import { FaBug } from 'react-icons/fa';
const NavBar = () => {
    const links = [
        {label:"issues",href:"/issues"},
        {label:"dashboard",href:"/dashboard"}
    ]
  return (
    <div className="bg-amber-500 flex space-x-5 p-7">
      <p><FaBug/></p>
      <ul className="flex space-x-5">
        {links.map(link=>
            <li key={link.href} className="text-zinc-500 hover:text-zinc-200">
                <Link href={link.href}>{link.label}</Link>
            </li>
        )}
      </ul>
    </div>
  )
}

export default NavBar

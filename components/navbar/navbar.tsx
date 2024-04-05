'use client'
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { menuList } from "./menuList";
import { usePathname } from "next/navigation";
type NavbarProps = {
  name:string,
  path:string,
  active:boolean
}
export default function NavbarComponent() {
  const[menu,setMenu]=useState<NavbarProps[]>(menuList)
  const pathname=usePathname()
  return (
    <Navbar className="cotainer mx-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cambo Production</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        {menu.map((item,index)=>(
          <Navbar.Link key={index} href={item.path} active={item.path==pathname}>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

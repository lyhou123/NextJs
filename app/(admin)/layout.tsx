'use client'
import React, { use, useEffect, useState } from 'react'
import "@/app/globals.css";
// import "@/component/icon/fontAwsome"
import SidebarComponent from '@/components/sidebar/sidebarcomponent';
import SearchButton from '@/components/search/searchButton';
export default function layout({children,}: 
  Readonly<{children: React.ReactNode;
}>){
  return (
    <html>
    <body className='flex'>
      
     {/* <MenuIcon  onClick={() => setSidebar(!sidebar)} classname="h-8 w-8 fixed buttom-0" /> */}
      <aside className=" h-screen lg:block hidden">
        <SidebarComponent/>
      </aside>
      <main className='flex-1'>
        {children}
      </main>
      
    </body>
    </html>
  )
}


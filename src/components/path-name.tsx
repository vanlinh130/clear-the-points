"use client"

import React from 'react'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import { usePathname } from 'next/navigation';

export default function PathName({children}: Readonly<{
    children: React.ReactNode;
  }>) {
      const pathname = usePathname();
  
      // Check if the current page is either login or register
    const isAuthPage = pathname === "/login" || pathname === "/register";
  return (
      <>
          {!isAuthPage && <Header />}
              {children}
          {!isAuthPage && <Footer />}
      </>
  )
  
}

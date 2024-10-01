'use client';

import React, { useState } from 'react';
// import Footer from '@/app/components/footer'
import Header from '@/app/components/header';
import { usePathname } from 'next/navigation';
import SideBar from '@/app/components/side-bar';

export default function PathName({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isAuthPage = pathname === '/login' || pathname === '/register';
    return (
        <section className="flex h-screen bg-[#131619] w-full">
            <div className={`bg-[#0c0d14] transition-all ${isOpen ? 'w-[300px]' : ''}`}>
                {!isAuthPage && <SideBar isOpen={isOpen} />}
            </div>
            <div className="w-full">
                {!isAuthPage && <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />}
                <div className="pl-2 mt-16  w-full">{children}</div>
            </div>
        </section>
    );
}

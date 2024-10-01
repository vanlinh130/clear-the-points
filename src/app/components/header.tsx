import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { HiBars3BottomRight, HiMiniBars3BottomLeft } from 'react-icons/hi2';

type HeaderProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

export default function Header({ isOpen, toggleSidebar }: HeaderProps) {
    return (
        <div className="bg-[rgb(35,36,51)] py-2 px-6 flex justify-between fixed top-0 left-0 right-0 z-40">
            <div className="flex items-center gap-4">
                <div onClick={toggleSidebar} className="cursor-pointer">
                    {isOpen ? (
                        <HiMiniBars3BottomLeft className="text-[#fff] text-[33px]" />
                    ) : (
                        <HiBars3BottomRight className="text-[#fff] text-[33px]" />
                    )}
                </div>
                <Link href="/" className="flex items-center justify-center gap-3">
                    <Image src="/images/unnamed.png" alt="unnamed" width={55} height={55} />
                    <span className="font-semibold text-lg text-[#fff]">HAIBAZO</span>
                </Link>
            </div>
            <form className="flex justify-center items-center relative">
                <input
                    placeholder="Search"
                    className="bg-[#373952] pl-4 rounded-[30px] h-[40px] text-[16px] text-[#AAADBE] font-semibold w-[400px] focus:ring-1 focus:ring-[#DA7F14] focus:outline-none"
                />
                <IoSearchSharp className="absolute right-3 text-[#AAADBE] text-[20px]" />
            </form>
            <div className="flex items-center gap-3">
                <div className="bg-[#373845] text-[#fff] hover:text-[#aaadbecc] cursor-pointer w-[40px] h-[40px] rounded-full flex justify-center items-center ">
                    <MdOutlinePeopleAlt className="text-[20px]" />
                </div>
                <div className="bg-[#373845] text-[#fff] hover:text-[#aaadbecc] cursor-pointer w-[40px] h-[40px] rounded-full flex justify-center items-center ">
                    <FaRegBell className="text-[20px]" />
                </div>
                <div className="bg-[#373845] text-[#fff] hover:text-[#aaadbecc] cursor-pointer w-[40px] h-[40px] rounded-full flex justify-center items-center ">
                    <FaRegHeart className="text-[20px]" />
                </div>
                <Link href="/login">
                    <button className="bg-[#da7f14] text-[#fff] py-3 px-5 rounded-[30px] font-bold">Log in</button>
                </Link>
            </div>
        </div>
    );
}

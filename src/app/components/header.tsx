import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';

export default function Header() {
    return (
        <div className="bg-[#232433] py-2 flex justify-around fixed top-0 left-0 right-0 z-40">
            <div className="">
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/images/unnamed.png" alt="unnamed" width={60} height={60} />
                    <span className="font-semibold text-lg text-[#fff]">crazy games</span>
                </Link>
            </div>
            <form className="flex justify-center items-center">
                <input
                    placeholder="Search"
                    className="bg-[#373952] pl-4 rounded-[30px] h-[40px] text-[16px] text-[#AAADBE] w-[400px] outline-none"
                />
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
                    <button className="bg-yellow-500 text-[#fff] py-3 px-5 rounded-[30px] font-bold">Log in</button>
                </Link>
            </div>
        </div>
    );
}

import Link from 'next/link';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { PiShootingStarLight, PiSwordFill } from 'react-icons/pi';
import { FaFireFlameCurved, FaBasketball, FaCarSide } from 'react-icons/fa6';
import { MdBrowserUpdated, MdDirectionsBike } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';

type SideBarProps = {
    isOpen: boolean;
};

export default function SideBar({ isOpen }: SideBarProps) {
    return (
        <nav className="mt-16">
            <ul className="flex flex-col w-full h-full pt-2">
                <li className="flex items-center py-2 text-[#fff] hover:text-[#aaadbe] hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <AiFillHome className="text-[30px] text-[#fff] mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">Home</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <li className="flex items-center py-2 text-[#fff] hover:text-[#aaadbe] hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <PiShootingStarLight className="text-[30px] text-[#fff] mx-4" />
                        {isOpen ? <span className="font-semibold text-[15px] hover:ml-2 transition-all">New</span> : ''}
                    </Link>
                </li>
                <li className="flex items-center py-2 text-[#fff] hover:text-[#aaadbe] hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <FaFireFlameCurved className="text-[30px] text-red-500 mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">Trending now</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <li className="flex items-center text-white hover:text-[#aaadbe] py-2 hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <MdBrowserUpdated className="text-[30px] text-[#fff] mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">Updated</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <div className="h-[1px] bg-[#aaadbe] mx-3"></div>
                <li className="flex items-center text-white hover:text-[#aaadbe] py-2 hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <BsPeopleFill className="text-[30px] text-[#fff] mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">2 Player</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <li className="flex items-center text-white hover:text-[#aaadbe] py-2 hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <PiSwordFill className="text-[30px] text-[#fff] mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">Action</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <li className="flex items-center text-white hover:text-[#aaadbe] py-2 hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <FaBasketball className="text-[30px] text-orange-500 mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">Basketball</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <li className="flex items-center text-white hover:text-[#aaadbe] py-2 hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <MdDirectionsBike className="text-[30px] text-red-300 mx-4" />
                        {isOpen ? (
                            <span className="font-semibold text-[15px] hover:ml-2 transition-all">Bike</span>
                        ) : (
                            ''
                        )}
                    </Link>
                </li>
                <li className="flex items-center text-white hover:text-[#aaadbe] py-2 hover:bg-[#373952] rounded-lg">
                    <Link href="/" className="flex items-center ">
                        <FaCarSide className="text-[30px] text-yellow-500 mx-4" />
                        {isOpen ? <span className="font-semibold text-[15px] hover:ml-2 transition-all">Car</span> : ''}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

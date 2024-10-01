import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineViewInAr, MdPeopleAlt, MdScreenshotMonitor } from 'react-icons/md';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { PiShootingStar } from 'react-icons/pi';

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex py-3 justify-center items-center gap-5">
                <div className="flex justify-center gap-2">
                    <Image src="/images/unnamed.png" alt="unnamed" width={70} height={55} />
                    <h3 className="font-black text-[18px] text-[#fff]">
                        Welcome to <br /> HAIBAZO
                    </h3>
                </div>
                <div className="flex justify-center gap-2">
                    <MdOutlineViewInAr className="text-[#da7f14] text-[30px]" />
                    <h3 className="font-semibold text-[16px] text-[#fff]">4000+ games</h3>
                </div>
                <div className="flex justify-center gap-2">
                    <BiSolidPlaneAlt className="text-[#da7f14] text-[30px]" />
                    <h3 className="font-semibold text-[16px] text-[#fff]">No install needed</h3>
                </div>
                <div className="flex justify-center gap-2">
                    <MdScreenshotMonitor className="text-[#da7f14] text-[30px]" />
                    <h3 className="font-semibold text-[16px] text-[#fff]">On any device</h3>
                </div>
                <div className="flex justify-center gap-2">
                    <MdPeopleAlt className="text-[#da7f14] text-[30px]" />
                    <h3 className="font-semibold text-[16px] text-[#fff]">Play with friends</h3>
                </div>
                <div className="flex justify-center gap-2">
                    <PiShootingStar className="text-[#da7f14] text-[30px]" />
                    <h3 className="font-semibold text-[16px] text-[#fff]">All for free</h3>
                </div>
            </div>
            <div className="py-3 px-6">
                <ul className="flex gap-3">
                    <li className="">
                        <Link href="/game">
                            <div className="flex items-center justify-center relative shadow-sm">
                                <Image
                                    src="/images/game_1.jpg"
                                    alt="game"
                                    width={350}
                                    height={200}
                                    className="rounded-3xl border-[1px] border-[#ccc] hover:border-yellow-400 transition-all shadow-sm"
                                />
                                b
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-[#0C0D14] py-8 px-10 mt-16 h-screen">
            <ul className="flex ">
                <li className="bg-[#fff] rounded-lg border-[1px] border-[#ccc] hover:border-yellow-400">
                    <Link href="/game">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="/images/game_1.jpg"
                                alt="game"
                                width={400}
                                height={200}
                                className="rounded-lg"
                            />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

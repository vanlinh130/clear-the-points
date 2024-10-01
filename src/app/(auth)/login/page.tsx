'use client';

import { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { PiLockKey } from 'react-icons/pi';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Giả lập kiểm tra thông tin đăng nhập
        if (email === 'user@gmail.com' && password === '123456') {
            // Sử dụng window.location để điều hướng
            window.location.href = '/'; // Điều hướng tới Dashboard
        } else {
            setError('Email hoặc mật khẩu không đúng.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row bg-[#131619] h-screen">
            {/* Phần form đăng nhập */}
            <div className="fill-available w-full bg-[#0D0F10] flex flex-col justify-center items-center">
                <div className="flex flex-col gap-8 w-full max-w-md lg:max-w-lg text-white px-6 sm:px-12">
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-extralight">
                            Hello, <span className="gradient-heading font-semibold">HAIBAZO</span>
                        </h1>
                        <p className="text-[14px] lg:text-[16px] mb-4 text-[#6F767E]">
                            Log in to platform to start creating magic.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-6 lg:gap-12">
                        <div className="flex flex-col gap-4">
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <TfiEmail className="text-[24px] text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    className="bg-[#1A1D21] text-sm lg:text-base rounded-xl block w-full ps-12 px-4 py-3 focus:ring-2 focus:ring-[#B6F09C] focus:outline-none caret-[#B6F09C]"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <PiLockKey className="text-[24px] text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    className="bg-[#1A1D21] text-sm lg:text-base rounded-xl block w-full ps-12 px-4 py-3 focus:ring-2 focus:ring-[#B6F09C] focus:outline-none caret-[#B6F09C]"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex items-center justify-between">
                            <label className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    className="bg-[#1A1D21] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] rounded-[4px] border-[1px] border-[#363A3D]"
                                />
                                <span className="text-xs lg:text-sm text-[#CDCECF] font-medium">Remember me</span>
                            </label>
                            <a href="#" className="text-xs lg:text-sm gradient-text">
                                Forgot Password?
                            </a>
                        </div>
                        <Link href="/">
                            <button className="w-full bg-[#B6F09C] hover:bg-[#9ff876] py-2 px-4 lg:px-6 rounded-xl text-[#0C1132] text-[14px] lg:text-[16px] font-semibold">
                                Log in
                            </button>
                        </Link>
                        <p className="mt-6 text-xs lg:text-sm text-center text-[#6F767E]">
                            Don’t have an account?{' '}
                            <a href="/" className="gradient-text">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

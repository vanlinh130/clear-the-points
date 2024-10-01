'use client';

import React, { useState, useEffect } from 'react';

export default function Game() {
    const [points, setPoints] = useState(3); // Mặc định số vòng tròn là 3
    const [time, setTime] = useState(0); // Thời gian trò chơi
    const [circles, setCircles] = useState([]); // Danh sách vòng tròn
    const [isPlaying, setIsPlaying] = useState(false); // Trạng thái trò chơi
    const [clickCount, setClickCount] = useState(0); // Số vòng tròn đã nhấn
    const [gameStatus, setGameStatus] = useState(''); // Trạng thái của trò chơi (ALL CLEARED, GAME OVER)
    const [totalClicks, setTotalClicks] = useState(0); // Tổng số vòng tròn đã nhấn trước đó

    // Bắt đầu trò chơi hoặc restart
    const startGame = () => {
        if (points <= 0) return; // Kiểm tra nếu số điểm hợp lệ
        setGameStatus(''); // Reset trạng thái trò chơi
        setIsPlaying(true); // Bắt đầu trò chơi
        setCircles(generateCircles(points)); // Tạo vòng tròn với số lượng nhập vào
        setClickCount(0); // Đặt lại số vòng tròn đã nhấn
        setTotalClicks(totalClicks + clickCount); // Cộng dồn số vòng tròn đã nhấn trước đó
        setTime(0); // Đặt lại thời gian
    };

    // Khởi tạo vòng tròn với số điểm được nhập
    const generateCircles = (num) => {
        let circleArr = [];
        for (let i = 1; i <= num; i++) {
            const xPos = Math.random() * 90 + 5; // Tọa độ X ngẫu nhiên
            const yPos = Math.random() * 90 + 5; // Tọa độ Y ngẫu nhiên
            circleArr.push({ id: i, x: xPos, y: yPos, clicked: false });
        }
        return circleArr;
    };

    // Cập nhật thời gian
    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => setTime((prevTime) => prevTime + 0.1), 100);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isPlaying]);

    // Xử lý khi nhấn vào vòng tròn
    const handleCircleClick = (id) => {
        const updatedCircles = circles.map((circle) => (circle.id === id ? { ...circle, clicked: true } : circle));
        setCircles(updatedCircles);
        setClickCount(clickCount + 1); // Tăng số vòng tròn đã nhấn

        // Đổi màu và ẩn vòng tròn sau 2 giây
        setTimeout(() => {
            setCircles((prevCircles) => prevCircles.filter((circle) => circle.id !== id));

            // Kiểm tra sau 2 giây nếu tất cả các vòng tròn đều biến mất
            if (updatedCircles.filter((circle) => !circle.clicked).length === 0) {
                setGameStatus('ALL CLEARED'); // Đổi trạng thái thành "ALL CLEARED"
                setIsPlaying(false); // Dừng trò chơi
            }
        }, 2000);
    };

    // Kiểm tra nếu không nhấn đủ vòng tròn khi chơi lại
    useEffect(() => {
        if (totalClicks + clickCount > 0 && totalClicks + clickCount < points) {
            setGameStatus('GAME OVER');
            setIsPlaying(false);
        }
    }, [totalClicks, clickCount, points]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-16">
            <h1 className="text-3xl font-bold mb-4">{gameStatus === 'ALL CLEARED' ? 'ALL CLEARED' : "LET'S PLAY"}</h1>

            <div className="flex items-center space-x-2 mb-4">
                <label className="text-xl font-medium">Points:</label>
                <input
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="border rounded-md p-1 w-16 text-center"
                />
            </div>
            <div className="flex items-center space-x-2 mb-4">
                <label className="text-xl font-medium">Time:</label>
                <span className="text-xl">{time.toFixed(1)}s</span>
            </div>
            <button
                onClick={startGame}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
                {isPlaying ? 'Restart' : 'Play'}
            </button>

            {gameStatus === 'GAME OVER' && <p className="text-red-600 text-xl mt-4 font-bold">GAME OVER</p>}

            <div className="relative mt-8 bg-white w-96 h-96 border-2 border-gray-800">
                {circles.map((circle) => (
                    <div
                        key={circle.id}
                        className={`absolute w-12 h-12 border-2 rounded-full flex items-center justify-center text-lg cursor-pointer ${
                            circle.clicked ? 'bg-red-500' : 'bg-white'
                        }`}
                        style={{ top: `${circle.y}%`, left: `${circle.x}%` }}
                        onClick={() => handleCircleClick(circle.id)}
                    >
                        {circle.id}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <p className="text-xl font-medium">
                    Circles Clicked: {clickCount}/{points}
                </p>
            </div>
        </div>
    );
}

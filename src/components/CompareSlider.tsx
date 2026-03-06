import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CompareSliderProps {
    beforeImage: string;
    afterImage: string;
}

export function CompareSlider({ beforeImage, afterImage }: CompareSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    const handleInteractionStart = () => setIsDragging(true);
    const handleInteractionEnd = () => setIsDragging(false);

    useEffect(() => {
        document.addEventListener('mouseup', handleInteractionEnd);
        document.addEventListener('touchend', handleInteractionEnd);
        return () => {
            document.removeEventListener('mouseup', handleInteractionEnd);
            document.removeEventListener('touchend', handleInteractionEnd);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
        >
            <div className="absolute inset-0 bg-gray-200">
                <img
                    src={afterImage}
                    alt="After Foundation Repair"
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 right-4 bg-primary-black/70 text-white px-3 py-1 rounded text-sm font-bold backdrop-blur-sm z-10">
                    After
                </div>
            </div>

            <div
                className="absolute inset-0 bg-gray-300"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <img
                    src={beforeImage}
                    alt="Before Foundation Repair"
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 left-4 bg-primary-black/70 text-white px-3 py-1 rounded text-sm font-bold backdrop-blur-sm z-10">
                    Before
                </div>
            </div>

            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-red transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                        <polyline points="15 18 9 12 15 6"></polyline>
                        <polyline points="9 18 15 12 9 6" opacity="0.5"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
}

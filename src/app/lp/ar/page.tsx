"use client";
import type { Metadata } from 'next';
import LandingPage from './_components/LandingPage';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//     title: 'مراكز بنون | المملكة العربية السعودية',
//     description: '',
// };

export default function Page() {
    const [isHuman, setIsHuman] = useState(false);

    useEffect(() => {
        // Delay rendering the "Fertility" content by 1.5 seconds
        // Bots often grab the initial or early paint and move on
        const timer = setTimeout(() => setIsHuman(true), 1500);
        return () => clearTimeout(timer);
    }, []);
    return <LandingPage />;
}

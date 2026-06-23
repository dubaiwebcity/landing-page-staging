import Script from 'next/script';
import SetLocaleAttrs from '@/components/SetLocaleAttrs';
//@ts-ignore
// import './style.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bnoon | Saudi Arabia',
    description: '',
    metadataBase: new URL('https://bnoon.sa'),
    icons: {
        icon: '/images/fav.png',
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        url: 'https://bnoon.sa/ar',
        siteName: 'بنون',
        images: [
            {
                url: 'https://bnoon-website.b-cdn.net/images/logo/bnoon-og.jpg',
                width: 1200,
                height: 630,
                alt: '',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SetLocaleAttrs lang="en" dir="ltr" />
            <style>{`html { scroll-behavior: smooth; }`}</style>
            {children}
        </>
    );
}

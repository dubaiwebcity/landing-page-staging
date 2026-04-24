import Script from 'next/script';
import SetLocaleAttrs from '@/components/SetLocaleAttrs';

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetLocaleAttrs lang="en" dir="ltr" />
      <Script src="https://cdn.tailwindcss.com" strategy="afterInteractive" />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      {children}
    </>
  );
}

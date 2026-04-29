import Script from 'next/script';
import SetLocaleAttrs from '@/components/SetLocaleAttrs';
//@ts-ignore
import './style.css';

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetLocaleAttrs lang="en" dir="ltr" />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      {children}
    </>
  );
}

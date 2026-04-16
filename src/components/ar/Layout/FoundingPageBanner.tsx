import React from 'react';

type Props = {
  bgImage: string;
};

export default function FoundingDayBanner({ bgImage }: Props) {
  return (
    <>
      <div
        className="founding-banner-area"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <style>{`

     
      `}</style>
    </>
  );
}

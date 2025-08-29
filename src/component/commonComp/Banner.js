import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <div>
      {/* Mobile Banner - Visible only on small screens */}
      <Image
        src="/mobile_banner.jpg"
        alt="Mobile Banner"
        width={1920}
        height={500}
        className="block md:hidden w-full h-auto"
      />

      {/* Desktop Banner - Visible on medium screens and up */}
      <Image
        src="/banner.jpg"
        alt="Desktop Banner"
        width={1920}
        height={500}
        className="hidden md:block w-full h-auto"
      />
    </div>
  );
}

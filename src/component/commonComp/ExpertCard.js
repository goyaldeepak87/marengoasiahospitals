// components/ExpertCard.js
"use client"
import React from 'react';
import Image from 'next/image';
import drDhiren from '../../../public/drDhiren.jpg';

const ExpertCard = ({ card }) => {
  console.log('Expert Card Data:', card); // Debugging line to check card data
  return (
    <div className='sm:w-[100%] w-[95%] mx-auto'>
    <div className="max-w-screen-xl relative rounded overflow-hidden">
      <div className="h-2 w-full bg-[#007dc6] rounded-t-[20px]"></div>
      <div className="overflow-hidden bg-white">
        <Image
          src={card?.img}
          width={400}
          height={300}
          alt="Dr. Dhiren Shah"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="sm:text-xl text-[18px]  font-semibold text-[#353a91] mb-1 leading-snug">
          {card?.name}
        </h4>
        <p className="ms:text-sm text-[14px] text-gray-800 mb-3 leading-relaxed md:min-h-[68px]">
          {card?.title}
        </p>
        <a
          href="#bannerCta"
          className="block bg-[#007dc7] sm:text-[17px] text-[15px] text-white text-center py-2 rounded hover:bg-blue-700 transition-all"
        >
          Request An Appointment
        </a>
      </div>
    </div>
    </div>
  );
};

export default ExpertCard;

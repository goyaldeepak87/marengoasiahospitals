// Testimonials.js
import React from 'react';

export default function Testimonials({ card }) {
  console.log('Card:', card); // Check if card is undefined

//   if (!card || !card.vidurl) {
//     return <p>No video available</p>; // Fallback UI
//   }

  return (
    <div className="">
      <div className="max-w-md mx-auto bg-white overflow-hidden">
        <div className="aspect-video w-full sm:h-[250px] h-[200px]">
          <iframe
            className="w-full h-full"
            src={card?.vidurl} // Make sure `card?.vidurl` exists
            title="Heart Transplant in COVID"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-[#007dc6] text-[15px] leading-[22px] text-justify">
            {card?.text || 'Heart Transplant in COVID'}
          </h4>
          <hr className="h-[2px] border-0 my-2 bg-[#007dc6]" />
          <p className="md:text-sm text-[13px]">
            {card?.text || 'Marengo CIMS Hospitals, Ahmedabad'}
          </p>
        </div>
      </div>
    </div>
  );
}

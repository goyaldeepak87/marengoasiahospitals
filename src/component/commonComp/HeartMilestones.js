import Image from 'next/image'
import React from 'react'

export default function HeartMilestones({ card }) {
    return (
        <div>
            <div className="doctor-talk-col">
                <a href="img/1ST_HEART_TRANSPLANT_2016.mp4" data-fancybox="" data-width="640" data-height="360" className="block">
                    <Image
                        src={card?.img}
                        width={400}
                        height={300}
                        alt="Dr. Dhiren Shah"
                        className="w-full h-auto object-cover"
                    />
                </a>
                <p className="mt-3 text-gray-800 md:text-base text-[14px]">
                   {card?.text}
                </p>
            </div>
        </div>
    )
}

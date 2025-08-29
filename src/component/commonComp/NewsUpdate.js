'use client'

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal'; // Adjust path as needed

export default function NewsUpdate({ card }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer"
      >
        <Image
          src={card?.img}
          width={400}
          height={300}
          alt="news"
          className="w-full h-auto object-cover"
        />
        <h5 className="mt-4 text-lg font-semibold text-gray-900 md:text-[16px] text-[14px]">
          Gujarat's First Heart Transplant done in 3 Hours
        </h5>
        <div className="line-bar h-[2px] bg-blue-600 w-16 mt-1"></div>
      </div>

      {/* Modal rendered via Portal, outside slider */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Image
          src={card?.img}
          width={800}
          height={600}
          alt="Full View"
          className="w-full h-auto object-contain"
        />
      </Modal>
    </div>
  );
}

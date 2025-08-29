'use client'

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'react-feather';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

export default function Modal({ show, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component is mounted
    setMounted(true);

    // Initialize AOS animation only on the client
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 600, // Duration of the animation
        easing: 'ease-in-out', // Easing type
        once: true, // Animation only happens once
      });
    }

    // Disable body scroll when the modal is open
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Re-enable body scroll when the modal is closed
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''; // Always reset body scroll
      if (typeof window !== "undefined") {
        AOS.refresh(); // Refresh AOS if necessary (e.g., on modal close)
      }
    };
  }, [show]); // Run on show prop change

  // Prevent rendering the modal until the component is mounted on the client
  if (!mounted || !show) return null;

  // Render modal using React Portal only on the client-side
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 bg-[#2c2b2bab] bg-opacity-80 flex items-center justify-center"
      style={{
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className="relative max-w-4xl w-full px-4"
        data-aos="zoom-in"
        data-aos-easing="ease-out-back"
        data-aos-duration="500"
      >
        <button
          onClick={onClose}
          className="absolute top-10 right-[50px] text-black text-3xl font-bold cursor-pointer"
        >
          <X />
        </button>
        <div className="p-4 rounded-md overflow-auto max-h-[90vh]">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

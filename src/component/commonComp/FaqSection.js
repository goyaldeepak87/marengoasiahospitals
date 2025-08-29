'use client';
import React, { useState } from 'react';

const FaqSection = () => {
  // Accordion state
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What exactly is a Heart Transplant?",
      answer:
        "A heart transplant is a surgical procedure in which a patient's diseased heart is replaced with a healthy heart from a donor.",
    },
    {
      question: "How is Heart Failure diagnosed?",
      answer:
        "Heart failure is diagnosed based on symptoms, physical exams, and diagnostic tests like ECG, echocardiogram, and blood tests.",
    },
    {
      question: "How is Heart Transplant Performed?",
      answer:
        "Heart transplant is performed by removing the failing heart and replacing it with a healthy donor heart. It requires lifelong medication to prevent rejection.",
    },
    {
      question: "What happens after a Heart Transplant?",
      answer:
        "Post-transplant care includes monitoring for rejection, managing medication, and ensuring proper recovery through rehabilitation.",
    },
    {
      question: "What is survival rate after Heart Transplant?",
      answer:
        "The risk factor for the first year is 10-15%. Approximately 50-60% of patients survive more than 12 years. Rejection is the main cause of a shortened life span.",
    },
  ];

  return (
    <section className="sm:py-10 py-6 sm:pb-10 pb-9 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="md:text-3xl sm:text-[24px] text-[22px] md:text-left text-center font-bold md:mb-8 mb-5 text-[#007dc6]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white shadow rounded-lg">
              <div
                className="flex items-center justify-between md:p-4 p-2 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="md:text-lg md:font-semibold text-base font-semibold" style={{color: "lab(28 20.25 -49.85)"}}>{faq.question}</h3>
                <span
                  className={`h-8 w-8 flex items-center justify-center bg-[#353a91] rounded-full text-white text-[25px] cursor-pointer transform pt-[2px] transition-all ${activeIndex === index ? 'rotate-45 pt-[3px]' : ''}`}
                >
                  +
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50 text-gray-700">
                  <p className='text-[13px] sm:text-[16px]'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

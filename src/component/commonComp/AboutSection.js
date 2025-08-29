'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import aboutImg from '../../../public/about-right-col.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

// List of Hospital Info
const hospitalInfo = [
  {
    title: 'Gujarat’s Pioneer',
    description:
      'Performed the first-ever heart transplant in Gujarat, setting a benchmark for advanced cardiac care.',
  },
  {
    title: 'Asia’s Trailblazer',
    description:
      'Achieved the first bloodless heart transplant in Asia, minimizing infection risks, speeding recovery, and conserving blood resources.',
  },
  {
    title: 'Record-Breaking Efficiency',
    description:
      'Successfully completed 3 heart transplants in just 6 days, demonstrating unmatched expertise and speed.',
  },
  {
    title: 'Consistency in Excellence',
    description:
      'Performed an impressive 9 heart transplants in just 2 months, proving their leadership in cardiac care.',
  },
  {
    title: 'Youngest Success Story',
    description: 'Gave a new lease of life to the youngest heart transplant recipient in Gujarat—13 years old.',
  },
  {
    title: '50+ Transplants and Counting',
    description:
      'A proud legacy of over 50 successful heart transplants, reaffirming trust and quality care.',
  },
  {
    title: 'Prominent in the Field',
    description:
      'Marengo Asia CIMS Hospitals are recognized as a leader in heart transplants in Gujarat, combining innovation with compassionate care.',
  },
  {
    title: 'State’s Leading Heart Center',
    description:
      'Recognized as the most active heart transplant center in Gujarat, with cutting-edge facilities and dedicated cardiac teams.',
  },
];



const AboutSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className="sm:pt-5 pt-0 lg:pt-5 md:pt-5 mt-0" id="about">
      {/* Container for Heading and Text */}
      <div className="max-w-screen-xl text-center mx-auto sm:p-4 p-4 pt-0 pb-2">
        <h2 className="text-black sm:text-[35px] text-[23px] font-bold sm:mb-4 mb-2">
          <span className=" sm:text-2xl text-[15px] subtitle">Why Ahmedabad</span> Gujarat for your Heart Transplant?
        </h2>
        <p className="text-black text-[14px] sm:text-[15px] md:text-[16px] mb-4">
          Gujarat is a top choice for heart transplants, with Ahmedabad being a leading medical hub in India. The state has
          a world-class hospital like Marengo CIMS Hospital, offering cutting-edge facilities and highly skilled cardiac
          specialists. Gujarat has performed over 500 successful heart transplants annually, with a high success rate of
          around 85-90%. Affordable healthcare options, advanced medical technology, and experienced transplant teams make
          Gujarat a preferred destination for both domestic and international patients seeking heart transplant surgery.
        </p>
      </div>

      {/* Container for Hospital Details and Image */}
      <div className="bg-[#353a91] sm:py-9 py-5 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap md:justify-center justify-center">
            {/* Left Column: Hospital Info */}
            <div className="xl:w-3/5 lg:w-3/5 xl:pl-4 lg:pl-4 md:px-5 px-5 mb-3">
              <h4 className="hidden md:block text-white md:text-[28px] sm:text-[28px] text-[22px] font-semibold mb-3">
                Why Choose Marengo CIMS Hospital for a <br /> Heart Transplant?
              </h4>
              <h4 className="block md:hidden text-white md:text-[28px] sm:text-[28px] text-[21px] font-semibold mb-3">
                Why Choose Marengo CIMS Hospital for a Heart Transplant?
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                {renderHospitalInfo()}
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="xl:w-2/5 lg:w-2/5 md:w-[50%] sm:w-[60%] pl-9 pr-9 pt-2 sm:pl-0 sm:pr-0 sm:pt-2 pb-2">
              <div className="mb-0 rounded-tl-[16px] rounded-br-none rounded-tr-none rounded-bl-[16px]">
                <Image
                  src={aboutImg}
                  alt="About Image"
                  className="lg:absolute md:relative md:w-[100%] right-0 lg:top-0  md:w-[60] lg:w-[39.3%] xl:w-auto h-[88%] lg:my-9 object-contain lg:rounded-tl-[16px] rounded-br-none rounded-tr-none lg:rounded-bl-[16px]"
                  priority
                  data-aos="zoom-in"  // Add the AOS effect here
                  data-aos-duration="1000"  // Set the duration
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Function to render the hospital info list
const renderHospitalInfo = () => {
  return hospitalInfo.map((item, index) => (
    <li key={index} className="list_icons relative pl-[25px] text-[14px] sm:text-[16px] list-none text-white">
      <strong>{item.title}:</strong> {item.description}
    </li>
  ));
};

export default AboutSection;

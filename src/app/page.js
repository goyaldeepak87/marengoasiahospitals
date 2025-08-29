'use client'

import AboutSection from '@/component/commonComp/AboutSection';
import AppointmentForm from '@/component/commonComp/AppointmentForm';
import Banner from '@/component/commonComp/Banner';
import ExpertsSlider from '@/component/commonComp/ExpertsSlider';
import FaqSection from '@/component/commonComp/FaqSection';
import Navbar from '@/component/commonComp/Navbar';
import Testimonials from '@/component/commonComp/Testimonials';
import React from 'react';
import drDhiren from '../../public/drDhiren.jpg';
import Dr_Keyur from '../../public/Dr_Keyur.jpg';
import Dr_Milan from '../../public/Dr_Milan.jpg';
import Dr_Harshit from '../../public/Dr_Harshit.jpg';
import Dr_Hiren from '../../public/Dr_Hiren.jpg';
import Dr_Niren from '../../public/Dr_Niren.jpg';
import Dr_Chintan from '../../public/Dr_Chintan.jpg';
import Dr_Shaunak from '../../public/Dr_Shaunak.jpg';
import Dr_Nikunj from '../../public/Dr_Nikunj.jpg';
import ExpertCard from '@/component/commonComp/ExpertCard';
import NewsUpdate from '@/component/commonComp/NewsUpdate';
import news2 from '../../public/news2.jpeg';
import news3 from '../../public/news3.jpeg';
import news4 from '../../public/news4.jpeg';
import news5 from '../../public/news5.jpeg';
import news6 from '../../public/news6.jpeg';
import news7 from '../../public/news7.jpeg';
import news8 from '../../public/news8.jpeg';
import news9 from '../../public/news9.jpeg';
import news10 from '../../public/news10.jpeg';
import news11 from '../../public/news11.jpeg';
import news12 from '../../public/news12.jpeg';
import news13 from '../../public/news13.jpeg';
import HeartMilestones from '@/component/commonComp/HeartMilestones';
import thumb4 from '../../public/thumb4.jpg';
import thumb2 from '../../public/thumb2.png';
import Footer from '@/component/commonComp/footer';



const expertCards = [
  {
    name: 'Dr. Dhiren Shah',
    title: 'Clinical Director - CVTS, Heart Transplantation',
    img: Dr_Keyur,
  },
  {
    name: 'Dr. Dhaval Naik',
    title: 'Cardiothoracic & Heart Transplant Surgeon',
    img: drDhiren,
  },
  {
    name: 'Dr. Amit Chandan',
    title: 'Consultant - Cardiothoracic & Vascular Surgery',
    img: Dr_Milan,
  },
  {
    name: 'Dr. Nikunj Vyas',
    title: 'Consultant - Cardiothoracic & Vascular Surgery',
    img: Dr_Harshit,
  },
  {
    name: 'Dr. Shaunak Shah',
    title: 'Peadtric Structural - Cardiac Surgeon',
    img: Dr_Hiren,
  },
  {
    name: 'Dr. Chintan Sheth',
    title: 'Consultant Anaesthesiologist and Critical Specialist',
    img: Dr_Niren,
  },
  {
    name: 'Dr. Niren Bhavsar',
    title: 'Cardiothoracic - Anaesthetist & Intensivist',
    img: Dr_Chintan,
  },
  {
    name: 'Dr. Hiren Dholakia',
    title: 'Consultant Cardiac Anaesthesiologist',
    img: Dr_Shaunak,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: Dr_Nikunj,
  },
];

const TestimonialsData = [
  {
    vidurl: 'https://www.youtube.com/embed/ZZJMmm6HQKg',
  },
  {
    vidurl: 'https://www.youtube.com/embed/83tZEJ9OFTM',
  },
  {
    vidurl: 'https://www.youtube.com/embed/ffREvpARGu8',
  },
  {
    vidurl: 'https://www.youtube.com/embed/83tZEJ9OFTM',
  },
];

const NewsUpdateData = [
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news2,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news3,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news4,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news5,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news6,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news7,
  },
   {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news8,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news9,
  },
   {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news10,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news11,
  },
   {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news12,
  },
  {
    name: 'Dr. Harshit Bavishi',
    title: 'Consultant - Transplant Anaesthetist',
    img: news13,
  },
];

const HeartMilestonesData = [
  {
    img: thumb4,
    text: ' Witness the first heart transplant at CIMS Marengo Asia Hospital— a breakthrough in cardiac care, expertise, and life-saving innovation.'
  },
  {
    img: thumb2,
    text: 'Setting a new milestone, CIMS Transplant Team extends heartfelt thanks to the donor families for their trust and support in saving lives and livelihoods.'
  }
];
export default function page() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AppointmentForm />
      <AboutSection />
      <FaqSection />
      <ExpertsSlider
        comp={ExpertCard}  // Pass component reference, NOT JSX
        show="4"
        bgcolor="#f3fbfe"
        expertCards={expertCards}
        heading="Our Experts"
        mdshow = "3.1"
        smshow = "1.1"
      />
      <ExpertsSlider
        comp={Testimonials}  // Pass component reference here too
        show="3"
        expertCards={TestimonialsData}
        heading="Testimonials"
        smshow = "1"
      />
      <ExpertsSlider
        comp={HeartMilestones}  // Pass component reference here too
        show="2"
        bgcolor="#f3fbfe"
        expertCards={HeartMilestonesData}
        heading="Heart Transplant Milestones"
        smshow = "1"
      />
      <ExpertsSlider
        comp={NewsUpdate}  // Pass component reference here too
        show="4"
        expertCards={NewsUpdateData}
        heading="News and Update"
        mdshow = "2.3"
        smshow = "1.2"
      />
      <Footer />
    </div>
  );
}

"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
const musicSchoolContent = [
  {
    title: "Discover Your Sound With Us",
    description:
      "Welcome to Pakistan Music School, where passion meets practice. We are a community dedicated to nurturing musicians of all ages and skill levels. Explore our programs and start your musical journey today.",
  },
  {
    title: "Our Philosophy: More Than Just Lessons",
    description:
      "We believe music education builds confidence, discipline, and joy. Our approach combines technical excellence with creative expression, ensuring students not only play music but understand and love it.",
  },
  {
    title: "Meet Our Master Instructors",
    description:
      "Learn from the best. Our faculty are not just teachers; they are accomplished performers and passionate educators dedicated to your growth. Get to know the artists who will guide your journey.",
  },
  {
    title: "A Tour of Our Studios",
    description:
      "Step inside our inspiring learning environment. Our state-of-the-art studios are designed with comfort and acoustics in mind, providing the perfect space to create and learn. (Video tour highly recommended).",
  },
  {
    title: "Tuition & Investment in Your Musical Future",
    description:
      "We offer transparent pricing and flexible plans to make high-quality music education accessible. View our lesson rates, group class fees, and registration details all in one place.",
  },
];

const WhyChoseUs = () => {
  return <div>
    <StickyScroll content={musicSchoolContent}/>
  </div>;
};

export default WhyChoseUs;

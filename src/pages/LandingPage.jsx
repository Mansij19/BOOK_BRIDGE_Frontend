import React from "react";
import Hero from "../components/section/Hero";
import ImageSection from "../components/section/ImageSection";
import HowItWorks from "../components/section/HowItWorks";
import FeaturedResources from "../components/section/components/FeaturedResources";

const LandingPage = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-10 items-center justify-center">
        <Hero />
        <ImageSection />
        <FeaturedResources />
        <HowItWorks/>
      </div>
    </>
  );
};

export default LandingPage;

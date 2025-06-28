import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FaqSection } from "./sections/FaqSection";
import { FaqWrapperSection } from "./sections/FaqWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const LandingCorsoxWeb = (): JSX.Element => {
  // Frame SVG repeating pattern data
  const frameImages = Array(30).fill({
    src: "/frame.svg",
    alt: "Frame",
  });

  return (
    <div className="bg-[#020216] flex flex-row justify-center w-full">
      <div className="bg-[#020216] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero and Projects Section Container */}
        <div className="relative w-full">
          <div className="relative w-full">
            <div className="relative">
              <img
                className="w-full h-[720px] object-cover"
                alt="Proyectos"
                src="/proyectos.png"
              />

              <div className="absolute w-full h-[756px] top-0 left-0 opacity-20">
                {frameImages.map((frame, index) => (
                  <img
                    key={`frame-${index}`}
                    className="w-full h-[22px] mt-[2px]"
                    alt={frame.alt}
                    src={frame.src}
                  />
                ))}
              </div>

              <img
                className="absolute w-[896px] h-[698px] top-1 left-1/2 -translate-x-1/4"
                alt="Luces"
                src="/luces.png"
              />

              <img
                className="absolute w-[1406px] h-[640px] top-1 left-1/2 -translate-x-1/2"
                alt="Degradado"
                src="/degradado.png"
              />

              <div className="absolute h-[412px] bottom-0 left-0 w-full bg-[linear-gradient(0deg,rgba(2,2,23,1)_0%,rgba(2,2,23,0)_100%)]" />
            </div>
          </div>

          <HeroSection />
          <ProjectsSection />
        </div>

        <WhyChooseUsSection />
        <IntroductionSection />
        <ServicesSection />
        <FaqSection />
        <CallToActionSection />
        <FaqWrapperSection />

        {/* TV and Footer Section Container */}
        <div className="relative w-full">
          <div className="relative w-full">
            <div className="relative w-full bg-[url(/mask-group.png)] bg-cover">
              <img
                className="w-full max-w-[1280px] h-auto mx-auto"
                alt="Samsung TV"
                src="/samsung-tv.png"
              />
            </div>
          </div>

          <MainContentSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  // Background grid pattern images data
  const gridLines = Array.from({ length: 32 }, (_, index) => ({
    top: index * 22,
    height: index === 31 ? 18 : 22, // Last one is 18px height
  }));

  // Feature cards data
  const features = [
    {
      icon: "/icon.svg",
      title: "Customized Solutions",
      description:
        "We tailor every project to meet your unique needs, ensuring your website stands out from the competition.",
    },
    {
      icon: "/icon-4.svg",
      title: "Expert Team",
      description:
        "Our skilled designers and developers bring years of experience to deliver top-notch quality.",
    },
    {
      icon: "/icon-1.svg",
      title: "Fast Turnaround",
      description:
        "We understand the urgency of getting your business online and work efficiently to meet your deadlines.",
    },
    {
      icon: "/icon.svg",
      title: "Ongoing Support",
      description:
        "We're here for you even after your website goes live, offering continuous support and updates.",
    },
  ];

  return (
    <section className="relative w-full h-[700px]">
      {/* Background grid pattern with opacity */}
      <div className="absolute w-full h-full top-0 left-0 opacity-20">
        {gridLines.map((line, index) => (
          <img
            key={`grid-line-${index}`}
            className={`absolute w-full h-[${line.height}px] top-[${line.top}px] left-0`}
            alt="Frame"
            src="/frame-1.svg"
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="flex items-center justify-between px-20 py-0 absolute top-[114px] left-1/2 transform -translate-x-1/2 w-[1284px]">
        {/* Left column - Heading and testimonial */}
        <div className="flex flex-col items-start gap-10">
          {/* Heading with gradient text */}
          <h2 className="w-fit mt-[-1.00px] bg-[linear-gradient(270deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[normal]">
            Why Choose <br />
            Corsox
          </h2>

          {/* Testimonial card */}
          <Card className="flex flex-col items-center px-8 py-10 w-full bg-[#02021780] rounded-[40px_40px_0px_0px] border-none backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-10">
                {/* Testimonial quote */}
                <blockquote className="w-[374px] mt-[-1.00px] [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-white text-xl tracking-[0] leading-9">
                  "Corsox delivered a website that not only looks great but also
                  functions exactly how we need it to. Our online presence has
                  improved significantly."
                </blockquote>

                {/* Testimonial author */}
                <div className="flex w-[374px] items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Jane Doe"
                    src="/ellipse-1-1.png"
                  />
                  <p className="flex-1 [font-family:'Klavika-Light',Helvetica] font-light text-[#d0d0d3] text-xl tracking-[0] leading-[normal]">
                    - Jane Doe, CEO, TechCo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Feature list */}
        <div className="flex flex-col items-start gap-10">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="flex w-[624px] items-start gap-4 px-10 py-0"
            >
              {/* Feature icon */}
              <div className="flex w-[50px] h-[50px] items-center justify-center gap-2.5 p-2.5 rounded-xl border-none bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(236,236,236,1)_100%)]">
                <img
                  className="w-6 h-6"
                  alt={feature.title}
                  src={feature.icon}
                />
              </div>

              {/* Feature content */}
              <div className="flex flex-col items-start gap-2 flex-1">
                <h3 className="self-stretch mt-[-1.00px] [font-family:'Klavika-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                  {feature.title}
                </h3>
                <p className="self-stretch [font-family:'Inter',Helvetica] font-light text-[#d0d0d3] text-base tracking-[0] leading-7">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

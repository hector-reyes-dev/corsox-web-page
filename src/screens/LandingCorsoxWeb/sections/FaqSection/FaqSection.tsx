import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FaqSection = (): JSX.Element => {
  const processSteps = [
    {
      icon: "/icon-3.svg",
      title: "Schedule a Free Consultation",
      description:
        "Click the button below to book a no-obligation call with our experts.",
    },
    {
      icon: "/icon-4.svg",
      title: "Project Planning",
      description: "We'll discuss your goals and create a customized plan.",
    },
    {
      icon: "/icon-1.svg",
      title: "Design & Development",
      description:
        "Our team gets to work, keeping you updated every step of the way.",
    },
    {
      icon: "/icon.svg",
      title: "Launch & Grow",
      description:
        "We'll launch your website and provide ongoing support to ensure your success.",
    },
  ];

  return (
    <section className="flex flex-wrap items-start justify-between px-20 py-0 w-full max-w-[1278px] mx-auto">
      <div className="flex flex-col items-start gap-10 flex-1 min-w-[350px]">
        <h2 className="w-fit mt-[-1.00px] bg-[linear-gradient(270deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-5xl tracking-[0] leading-[normal]">
          How It Works
        </h2>

        <Card className="flex flex-col items-center px-8 py-10 w-full bg-[#02021780] rounded-[40px_40px_0px_0px] border-none backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <CardContent className="p-0 flex flex-col items-start gap-10">
            <blockquote className="w-[374px] mt-[-1.00px] [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-white text-xl tracking-[0] leading-9">
              &#34;Corsox delivered a website that not only looks great but also
              functions exactly how we need it to. Our online presence has
              improved significantly.&#34;
            </blockquote>

            <div className="flex w-[374px] items-center gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                alt="Client profile"
                src="/ellipse-1-1.png"
              />

              <p className="flex-1 [font-family:'Klavika-Light',Helvetica] font-light text-[#d0d0d3] text-xl tracking-[0] leading-[normal]">
                - Jane Doe, CEO, TechCo
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col w-full max-w-[480px] items-start gap-10">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 pl-0 pr-10 py-0 w-full"
          >
            <div className="flex w-[50px] h-[50px] items-center justify-center gap-2.5 p-2.5 rounded-xl border-none bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(236,236,236,1)_100%)]">
              <img
                className="w-6 h-6"
                alt={`${step.title} icon`}
                src={step.icon}
              />
            </div>

            <div className="flex flex-col items-start gap-2 flex-1">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Klavika-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                {step.title}
              </h3>

              <p className="self-stretch [font-family:'Inter',Helvetica] font-light text-[#d0d0d3] text-base tracking-[0] leading-7">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

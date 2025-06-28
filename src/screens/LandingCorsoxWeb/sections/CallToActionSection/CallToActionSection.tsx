import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const features = [
    {
      icon: "/vector-1.svg",
      text: "Transparent Pricing",
    },
    {
      icon: "/fluent-checkmark-starburst-24-filled.svg",
      text: "100% Satisfaction Guarantee",
    },
    {
      icon: "/fluent-checkmark-starburst-24-filled.svg",
      text: "Dedicated Support",
    },
  ];

  return (
    <section className="w-full py-[72px] bg-[#ff3a4533] backdrop-blur-[1px] relative">
      <div className="w-full h-full absolute top-0 left-0 bg-[#ff3a45] z-[-1]" />

      <Card className="max-w-[1440px] mx-auto border-0 bg-transparent">
        <CardContent className="flex flex-col items-center gap-6 p-10">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="w-full font-bold text-white text-[40px] text-center tracking-[0] leading-normal font-['Libre_Baskerville',Helvetica]">
              Ready to Elevate Your Business Online?
            </h2>

            <p className="w-full font-light text-[#020217] text-xl text-center tracking-[0] leading-7 font-['Inter',Helvetica]">
              Don't miss out on potential customers. Let Corsox create a website
              that drives results.
            </p>

            <div className="flex items-center justify-center gap-10 flex-wrap">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <img
                      className="w-6 h-6"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                  </div>
                  <span className="font-['Inter',Helvetica] font-light text-[#020217] text-base tracking-[0] leading-normal whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-[#020217] border-2 border-solid rounded-[22px] p-1.5 shadow-[0px_2px_40px_#ff3a4566]">
            <Button className="bg-[#020217] px-8 py-4 rounded-2xl backdrop-blur-[2px] h-auto">
              <span className="font-['Klavika-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                Get Your Free Consultation Now
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

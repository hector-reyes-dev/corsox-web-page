import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Feature points data
  const features = [
    {
      icon: "/vector-1.svg",
      text: "Transparent Pricing",
      isCustomIcon: true,
    },
    {
      icon: "/fluent-checkmark-starburst-24-filled.svg",
      text: "100% Satisfaction Guarantee",
      isCustomIcon: true,
    },
    {
      icon: "/fluent-checkmark-starburst-24-filled.svg",
      text: "Dedicated Support",
      isCustomIcon: true,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-14 w-full max-w-[784px] mx-auto py-16">
      <img
        className="w-[173.09px] h-10"
        alt="Logo corsox"
        src="/logo-corsox.png"
      />

      <div className="flex flex-col items-center gap-12 w-full">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="w-full [font-family:'Klavika-Light',Helvetica] font-light text-white text-2xl text-center tracking-[0] leading-[normal]">
              Transform Your Online Presence with Stunning
            </p>

            <h1 className="w-full bg-[linear-gradient(0deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-[78px] text-center tracking-[0] leading-[normal]">
              Web Design &amp; Development
            </h1>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  {feature.isCustomIcon ? (
                    <div className="relative w-6 h-6">
                      <img
                        className={
                          feature.text === "Transparent Pricing"
                            ? "absolute w-5 h-5 top-0.5 left-0.5"
                            : "w-6 h-6"
                        }
                        alt={feature.text}
                        src={feature.icon}
                      />
                    </div>
                  ) : (
                    <CheckIcon className="w-6 h-6" />
                  )}
                  <span className="[font-family:'Inter',Helvetica] font-light text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="w-full max-w-[610px] [font-family:'Inter',Helvetica] font-light text-[#cfcfd3] text-xl text-center tracking-[0] leading-[30px]">
              Boost engagement, drive sales, and stand out in your industry with
              a custom website crafted to perfection.
            </p>
          </div>
        </div>

        <Card className="border-[#ff3a45] border-2 rounded-[22px] shadow-[0px_2px_40px_#ff3a4566] p-1.5 bg-transparent">
          <CardContent className="p-0">
            <Button className="bg-[#ff3a45] hover:bg-[#ff3a45]/90 px-8 py-4 rounded-2xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
              <span className="[font-family:'Klavika-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                Get Your Free Consultation Now
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

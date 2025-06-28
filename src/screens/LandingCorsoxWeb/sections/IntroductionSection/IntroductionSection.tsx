import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const IntroductionSection = (): JSX.Element => {
  // Client logos data for the testimonial section
  const clientLogos = [
    {
      src: "/mask-group-5.png",
      alt: "Mask group",
      width: "114.17px",
      height: "21.18px",
    },
    {
      src: "/mask-group-6.png",
      alt: "Mask group",
      width: "125.89px",
      height: "42.2px",
    },
    {
      src: "/mask-group-7.png",
      alt: "Mask group",
      width: "101px",
      height: "24.23px",
    },
    {
      src: "/mask-group-8.png",
      alt: "Mask group",
      width: "114.17px",
      height: "21.18px",
    },
  ];

  // Star icons at the top of the card
  const starIcons = [
    {
      src: "/vector-2.svg",
      alt: "Vector",
      width: "w-5",
      height: "h-[19px]",
      top: "top-0.5",
      left: "left-0.5",
    },
    {
      src: "/vector-4.svg",
      alt: "Vector",
      width: "w-[29px]",
      height: "h-[26px]",
      top: "top-[3px]",
      left: "left-px",
    },
    {
      src: "/vector-2.svg",
      alt: "Fluent star",
      width: "w-6",
      height: "h-6",
      isFullIcon: true,
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-10 py-10">
      <Card className="w-full rounded-[40px] border-none [background:radial-gradient(50%_50%_at_19%_0%,rgba(42,42,77,1)_0%,rgba(2,2,23,1)_100%)]">
        <CardContent className="flex flex-col items-center justify-center gap-6 pt-10 pb-20 px-10">
          <div className="inline-flex items-center justify-center gap-4">
            {starIcons.map((icon, index) =>
              icon.isFullIcon ? (
                <img
                  key={`star-${index}`}
                  className={`${icon.width} ${icon.height}`}
                  alt={icon.alt}
                  src={icon.src}
                />
              ) : (
                <div
                  key={`star-container-${index}`}
                  className="relative w-6 h-6"
                >
                  <img
                    className={`absolute ${icon.width} ${icon.height} ${icon.top} ${icon.left}`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ),
            )}
          </div>

          <div className="flex items-center justify-center gap-10 w-full">
            <div className="flex flex-col items-start justify-center gap-1 flex-1">
              <div className="self-stretch [font-family:'Klavika-Light',Helvetica] font-light text-[#8c8c8c] text-base text-right tracking-[3.20px] leading-normal underline">
                CREATIVITY THAT GROWS
              </div>

              <div className="self-stretch bg-[linear-gradient(270deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-4xl text-right tracking-[0] leading-normal">
                Amazing websites that also deliver exceptional results
              </div>
            </div>

            <div className="w-[580.5px] [font-family:'Inter',Helvetica] font-light text-[#d0d0d3] text-base tracking-[0] leading-7">
              <span className="[font-family:'Inter',Helvetica] font-light text-[#d0d0d3] text-base tracking-[0] leading-7">
                In today&#39;s digital world, your website is the face of your
                business. Our expert team is dedicated to turning your vision
                into reality,{" "}
              </span>

              <span className="underline">
                ensuring your online presence truly reflects your brand&#39;s
                identity
              </span>

              <span className="[font-family:'Inter',Helvetica] font-light text-[#d0d0d3] text-base tracking-[0] leading-7">
                {" "}
                and values.{" "}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-6 w-full">
        <div className="self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[30px]">
          <span className="font-light text-[#b5b5be]">
            Don&#39;t just take our word for it, Trusted by{" "}
          </span>

          <span className="font-bold text-white">20+</span>

          <span className="font-light text-[#b5b5be]">
            {" "}
            satisfied customers
          </span>
        </div>

        <div className="flex items-center justify-between px-10 py-0 w-full">
          {clientLogos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              className="relative"
              style={{ width: logo.width, height: logo.height }}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

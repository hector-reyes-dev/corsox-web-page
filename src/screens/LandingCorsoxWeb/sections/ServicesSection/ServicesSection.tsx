import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Web Design services data
  const webDesignServices = [
    {
      icon: "/fluent-person-star-20-regular.svg",
      title: "User Experience (UX)",
      description:
        "We create intuitive interfaces that engage and delight your visitors.",
      image: "/mask-group-9.png",
      width: "w-[405px]",
    },
    {
      icon: "/vector.png",
      title: "Responsive Design",
      description:
        "Your website will look and function perfectly on all devices.",
      image: "/mask-group-10.png",
      width: "w-[624px]",
      iconStyle: "relative w-8 h-8",
      iconInnerStyle: "absolute w-[18px] h-7 top-0.5 left-[7px]",
    },
    {
      icon: "/fluent-pen-sparkle-32-regular.svg",
      title: "Brand Integration",
      description:
        "Your website will seamlessly reflect your brand's identity.",
      image: "/mask-group-11.png",
      width: "w-[405px]",
    },
  ];

  // Development services data
  const developmentServices = [
    {
      icon: "/fluent-phone-32-light.svg",
      title: "Custom Development",
      description:
        "We build websites from the ground up to meet your specific requirements.",
      image: "/mask-group-12.png",
      width: "w-[624px]",
    },
    {
      icon: "/fluent-person-star-20-regular.svg",
      title: "E-commerce Solutions",
      description:
        "Start selling online with a secure and user-friendly platform.",
      image: "/mask-group-13.png",
      width: "w-[405px]",
    },
    {
      icon: "/fluent-pen-sparkle-32-regular.svg",
      title: "Content Management Systems",
      description:
        "Easily update your website with a powerful CMS like WordPress.",
      image: "/mask-group-14.png",
      width: "w-[405px]",
    },
    {
      icon: "/fluent-phone-32-light.svg",
      title: "Website Maintenance",
      description:
        "Keep your site running smoothly with regular updates and security checks.",
      image: "/mask-group-15.png",
      width: "w-[624px]",
    },
  ];

  // Render a service card
  const renderServiceCard = (service: any, index: number) => (
    <Card
      key={`service-${index}`}
      className={`flex flex-col ${service.width} items-center justify-center bg-[#020217b2] rounded-3xl overflow-hidden border-none backdrop-blur-[2px] backdrop-brightness-[100%]`}
    >
      <CardContent
        className={`items-start gap-2 ${service.width === "w-[624px]" ? "px-6 py-8" : "pl-6 pr-4 py-6"} relative self-stretch w-full flex-[0_0_auto] flex flex-col`}
      >
        <div
          className={`${service.width === "w-[624px]" ? "inline-flex" : "flex self-stretch w-full"} items-center gap-4 relative flex-[0_0_auto]`}
        >
          {service.iconInnerStyle ? (
            <div className={service.iconStyle}>
              <img
                className={service.iconInnerStyle}
                alt={`Icon for ${service.title}`}
                src={service.icon}
              />
            </div>
          ) : (
            <img
              className="relative w-8 h-8"
              alt={`Icon for ${service.title}`}
              src={service.icon}
            />
          )}

          <div
            className={`relative ${service.width === "w-[624px]" ? "w-fit" : "flex-1"} [font-family:'Klavika-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]`}
          >
            {service.title}
          </div>
        </div>

        <div
          className={`relative ${service.width === "w-[624px]" ? "w-fit" : "self-stretch"} [font-family:'Inter',Helvetica] font-normal text-[#d0d0d3] text-base tracking-[0] leading-[normal] ${service.width === "w-[624px]" ? "whitespace-nowrap" : ""}`}
        >
          {service.description}
        </div>
      </CardContent>

      <img
        className="relative self-stretch w-full h-60"
        alt={`Image for ${service.title}`}
        src={service.image}
      />
    </Card>
  );

  return (
    <section className="relative w-full py-16">
      <div className="relative w-full">
        {/* Web Design Section */}
        <div className="relative w-full mb-16">
          <h2 className="text-center bg-[linear-gradient(270deg,rgba(28,28,67,0.25)_0%,rgba(122,122,152,0.17)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-[240px] tracking-[0] leading-[normal]">
            Web Design
          </h2>

          <div className="flex items-center justify-center gap-[33px] mt-[-100px]">
            {webDesignServices.map(renderServiceCard)}
          </div>
        </div>

        {/* Development Section */}
        <div className="relative w-full mt-16">
          <div className="flex items-center justify-center gap-[33px]">
            {developmentServices.map(renderServiceCard)}
          </div>

          <h2 className="text-center mt-8 bg-[linear-gradient(270deg,rgba(28,28,67,0.25)_0%,rgba(122,122,152,0.17)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-[240px] tracking-[0] leading-[normal]">
            Development
          </h2>
        </div>
      </div>
    </section>
  );
};

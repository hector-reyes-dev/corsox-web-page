import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const contactItems = [
    {
      icon: <MailIcon className="w-8 h-8" />,
      text: "info@corsox.com",
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      text: "info@corsox.com",
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      text: "info@corsox.com",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 px-0 py-10 relative backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(2,2,23,0)_0%,rgba(2,2,23,0.1)_100%)]">
      <h2 className="w-full max-w-[1281px] mt-[-1.00px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.4)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-[40px] text-center tracking-[0] leading-[normal]">
        Have questions or ready to start your project? <br />
        We&#39;d love to hear from you.
      </h2>

      <div className="flex items-center justify-center gap-20 flex-wrap">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {item.icon}
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <Card className="w-full max-w-[1280px] h-60 border-2 border-solid border-[#ff3a45] shadow-[0px_2px_40px_#ff3a4566] rounded-[22px]">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-8 h-full bg-[#ff3a45] rounded-2xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <h3 className="[font-family:'Klavika-Bold',Helvetica] font-bold text-white text-[64px] text-center tracking-[0] leading-[normal]">
            Schedule Your Free Consultation
          </h3>
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#020217] text-2xl text-center tracking-[-0.26px] leading-9 whitespace-nowrap">
            We&#39;d love to hear from you. Is this button too big?
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

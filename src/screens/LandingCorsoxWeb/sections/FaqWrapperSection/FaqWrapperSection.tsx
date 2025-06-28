import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqWrapperSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How long does it take to develop a custom website?",
      answer:
        "Project timelines vary based on complexity, but we typically deliver within 4-6 weeks.",
      defaultOpen: true,
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col md:flex-row w-full items-start justify-between px-6 md:px-20 py-16 gap-10">
      <h2 className="w-full md:w-[425px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.2)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Libre_Baskerville',Helvetica] font-bold text-transparent text-[40px] tracking-[0] leading-[48px]">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col w-full md:w-[679px] items-start gap-14">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="border-b border-[#d0d0d3]/20 py-4"
            >
              <AccordionTrigger
                className="flex justify-between items-center w-full"
                defaultChecked={item.defaultOpen}
              >
                <span className="font-bullet-title font-[number:var(--bullet-title-font-weight)] text-white text-[length:var(--bullet-title-font-size)] tracking-[var(--bullet-title-letter-spacing)] leading-[var(--bullet-title-line-height)] text-left [font-style:var(--bullet-title-font-style)]">
                  {item.question}
                </span>
                {item.defaultOpen ? (
                  <MinusIcon className="h-8 w-8 text-white shrink-0" />
                ) : (
                  <PlusIcon className="h-8 w-8 text-white shrink-0" />
                )}
              </AccordionTrigger>

              {item.answer && (
                <AccordionContent className="pt-4">
                  <p className="font-text-small font-[number:var(--text-small-font-weight)] text-[#d0d0d3] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

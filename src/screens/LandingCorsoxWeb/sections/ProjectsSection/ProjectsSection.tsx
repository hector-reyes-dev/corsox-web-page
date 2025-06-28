import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      image: "/mask-group-1.png",
      title:
        "Website Corsox: Driving Success with Next-Level Technology and Marketing Excellence",
      subtitle: "One of our projects",
      titleStyle: "font-medium",
    },
    {
      id: 2,
      image: "/mask-group-2.png",
      titlePart1: "Houseman Web: ",
      titlePart2: "Parents are Children's First Teachers",
      subtitle: "Parte de nuestros proyectos",
      titleStyle: "font-normal",
    },
    {
      id: 3,
      image: "/mask-group-3.png",
      title:
        "Website Corsox: Driving Success with Next-Level Technology and Marketing Excellence",
      subtitle: "One of our projects",
      titleStyle: "font-medium",
    },
    {
      id: 4,
      image: "/mask-group-4.png",
      titlePart1: "Houseman Web: ",
      titlePart2: "Parents are Children's First Teachers",
      subtitle: "Parte de nuestros proyectos",
      titleStyle: "font-normal",
    },
  ];

  return (
    <section className="flex items-center justify-center w-full py-12 shadow-[0px_4px_4px_#00000040]">
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="w-80 bg-transparent border-none">
            <div className="relative">
              <img
                className="w-[360px] h-[640px] object-cover -ml-[30px] -mr-[10px]"
                alt={`Project ${project.id}`}
                src={project.image}
              />
            </div>
            <CardContent className="px-2 pt-6">
              <div className="flex flex-col items-start gap-1">
                {project.title ? (
                  <div
                    className={`self-stretch [font-family:'Klavika-Medium',Helvetica] ${project.titleStyle} text-white text-base tracking-[0] leading-[22px]`}
                  >
                    {project.title}
                  </div>
                ) : (
                  <div className="self-stretch [font-family:'Klavika-Medium',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
                    <span className="font-medium text-white leading-[0.1px]">
                      {project.titlePart1}
                    </span>
                    <span className="[font-family:'Klavika-Bold',Helvetica] font-bold text-white leading-[22px]">
                      {project.titlePart2}
                    </span>
                  </div>
                )}
                <div className="self-stretch [font-family:'Inter',Helvetica] font-normal text-[#d0d0d3] text-sm tracking-[0] leading-[18px]">
                  {project.subtitle}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

"use client";
import Link from "next/link";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        Cuaderno universitario de
        <span className="text-purple"> Desarrollo de Aplicaciones Web</span>
      </h1>
      <p className="text-white-200 mt-4 text-center">
        Semanas 1 a 15
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          const hasLink = Boolean(item.slug);
          const card = (
            <PinContainer
              title={hasLink ? "Ver" : "Pronto"}
              href={hasLink ? `/projects/${item.slug}#contenido` : undefined}
            >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center pointer-events-none">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {hasLink ? "Ver unidad" : "Proximamente"}
                    </p>
                    {hasLink && (
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    )}
                  </div>
                </div>
              </PinContainer>
          );

          if (hasLink) {
            return (
              <Link
                href={`/projects/${item.slug}#contenido`}
                key={item.id}
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                style={{ textDecoration: "none" }}
              >
                {card}
              </Link>
            );
          }

          return (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-default"
              aria-disabled="true"
            >
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;


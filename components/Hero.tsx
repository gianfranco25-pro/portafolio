import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center relative my-20 z-10 gap-12 lg:gap-24">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hola soy
            <span className="text-purple"> Gianfranco Nuñez Delzo</span>
          </p>

          <TextGenerateEffect
            words="Apasionado por la tecnología, el desarrollo web y las soluciones innovadoras."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Estudiante del 9° ciclo de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú
          </p>

          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <button
              onClick={() => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
            >
              <MagicButton
                title="Ver mi trabajo"
                icon={<FaLocationArrow />}
                position="right"
              />
            </button>
            <a href="/CV Nuñez Delzo Gianfranco.pdf" download style={{ textDecoration: 'none' }}>
              <MagicButton
                title="Descargar CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center lg:items-start w-full lg:w-auto">
          <img
            src="/profile.svg"
            alt="Foto de Gianfranco Nuñez Delzo"
            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-2xl border-4 border-purple-400 object-cover bg-white"
            style={{ minWidth: '12rem', minHeight: '12rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

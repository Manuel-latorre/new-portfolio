"use client"

import Carrusel from '@/components/Carrusel';
import React from 'react'
import TechnologyBox from '../TechnologyBox';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import NextIcon from '@/components/icons/NextIcon';
import TailwindIcon from '@/components/icons/TailwindIcon';
import WebIcon from '@/components/icons/WebIcon';
import Link from 'next/link';
import MexicoIcon from '@/components/icons/MexicoIcon';
import { useLanguage } from '@/context/translate';
import Image from 'next/image';
import tualo from './tualo.png'

const Tualo = () => {
    const { isEnglish } = useLanguage();
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center text-white font-medium text-2xl gap-2">
          <Link
            href={"https://www.diarc.studio/"}
            className="hover:text-zinc-400 transition-all"
          >
            Tualo
          </Link>
          <MexicoIcon />
        </div>
  
        <div className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent">
          <p className="font-medium text-2xl">Desarrollador Fullstack</p>
        </div>
        <div>
          <p className="text-white font-medium text-lg">Abril - Actual</p>
        </div>
        <Link
          href={"https://www.diarc.studio/"}
          className="p-2 rounded-xl bg-transparent border-2 border-[#F1FF4D] flex items-center gap-2 text-white font-semibold w-[100px]"
        >
          <WebIcon />
          {isEnglish ? "View" : "Visitar"}
        </Link>
        <div className="flex items-center text-white justify-between gap-24 max-lg:flex-col max-lg:gap-12">
          <div className="flex flex-col gap-3 lg:w-[60%]">
            <p>
              {isEnglish
                ? "I have developed this website for Diarc Studio, a 3D Art Outsourcing studio focused on the development of Immersive Experiences, Metaverses and Gaming. This site has 4 sections where different types of company information are displayed. The Portfolio section is where the company's projects are displayed. For this I integrated an administrator system with technologies such as Mongo DB to store the projects in the database and Cloudinary for hosting media files. In this you can add, edit and delete projects."
                : `He desarrollado este sitio web para Tualo, una empresa que se dedica al asesoramiento financiero, la cual genera reportes financieros mensuales con AI, gráficas adecuadas al cliente y más. Esta Landing Page fue desarrollada con el fin de que la compañia pueda ofrecer sus servicios de una forma mas atractiva, la cual cuenta con 4 secciones en donde se detalla especificamente que es lo que la empresa ofrece. Además, este sito web está optimizado para la experiencia del usuario, con una navegación intuitiva y un diseño atractivo que capta la atención desde el primer momento. La combinación de tecnología avanzada y un enfoque centrado en el cliente hace de Tualo una opción ideal para empresas que buscan mejorar su gestión financiera a través de soluciones innovadoras y efectivas.`}
            </p>
  
            <div className="flex flex-col gap-2 mt-4">
              <p className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-lg">
                {isEnglish ? "Technologies" : "Tecnologías utilizadas"}
              </p>
  
              <div className="flex items-center flex-wrap gap-2">
                <TechnologyBox
                  icon={<TypescriptIcon />}
                  technology="Typescript"
                />
                <TechnologyBox icon={<NextIcon />} technology="Next Js" />
                <TechnologyBox
                  icon={<TailwindIcon />}
                  technology="Tailwind css"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] max-lg:px-4">
              <Image src={tualo} alt='tualo' width={1000} height={1000}/>
          </div>
        </div>
      </div>
    );
  };

export default Tualo
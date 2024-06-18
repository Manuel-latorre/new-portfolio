"use client";
import ArgentinaIcon from "@/components/icons/ArgentinaIcon";
import { useLanguage } from "@/context/translate";
import React from "react";
import TechnologyBox from "../TechnologyBox";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import NextIcon from "@/components/icons/NextIcon";
import CloudinaryIcon from "@/components/icons/CloudinaryIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import Image from "next/image";
import diarc from './diarc.png'
import Carrusel from "@/components/Carrusel";
import MongoDbIcon from "@/components/icons/MongoDbIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import Link from "next/link";
import WebIcon from "@/components/icons/WebIcon";

const Diarc = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center text-white font-medium text-2xl gap-2">
        <Link
          href={"https://www.diarc.studio/"}
          className="hover:text-zinc-400 transition-all"
        >
          Diarc Studio
        </Link>
        <ArgentinaIcon />
      </div>

      <div className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent">
        <p className="font-medium text-2xl">Freelance</p>
      </div>
      <div>
        <p className="text-white font-medium text-lg">Abril - Mayo 2024</p>
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
              : `He desarrollado este sitio web para Diarc Studio, un estudio de Outsourcing de Arte 3D enfocado en el desarrollo de Experiencias Inmersivas, Metaversos y Gaming. Este sitio cuenta con 4 secciones en donde se muestran distintos tipos de información de la compañía. La sección Portfolio es donde se muestran los proyectos de la compañía. Para esto integré un sistema de administrador con tecnologías como Mongo DB para almacenar los proyectos en la base de datos y Cloudinary para el alojamiento de archivos multimedia. En este se pueden agregar, editar y eliminar proyectos.`}
          </p>
          <div>
            <p className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-lg">
              {isEnglish ? "My biggest challengues" : "Mis mayores desafíos"}
            </p>
            <ul className="list-disc flex flex-col gap-2">
              <li>
                {isEnglish
                  ? "Develop the customer's ideas correctly."
                  : "Llevar a cabo correctamente las idéas del cliente."}
              </li>
              <li>
                {isEnglish
                  ? "Make effects and transitions like the one seen in the Home."
                  : "Realizar efectos y transiciones como el que se aprecia en el Home."}
              </li>
              <li>
                {isEnglish
                  ? "Integrate a CRUD system for the management of the company's portfolio."
                  : "Integrar un sistema CRUD para la administracion del portfolio de la compañia."}
              </li>
            </ul>
          </div>

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
              <TechnologyBox
                icon={<CloudinaryIcon />}
                technology="Cloudinary"
              />
              <TechnologyBox icon={<NodeIcon />} technology="Node Js" />
              <TechnologyBox icon={<ExpressIcon />} technology="Express" />
              <TechnologyBox icon={<MongoDbIcon />} technology="Mongo DB" />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] max-lg:px-4">
          
            <Carrusel />
          
        </div>
      </div>
    </div>
  );
};

export default Diarc;

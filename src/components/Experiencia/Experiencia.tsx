"use client"

import { useLanguage } from "@/context/translate";
import React from "react";
import Tma from "../ui/Experiencia/Tma";
import Diarc from "../ui/Experiencia/Diarc";

const Experiencia = () => {

    const { isEnglish} = useLanguage();

  return (
    <div className="w-[90%] mx-auto">
        <div className="text-white text-2xl lg:text-7xl font-medium text-center mb-16">
            <h1 className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            {isEnglish ? "Experience" : "Experiencia"}
            </h1>
        </div>

      <div className="flex flex-col lg:gap-28">
        <Diarc/>
        <Tma/>
      </div>


    </div>
  );
};

export default Experiencia;

"use client";
import { useLanguage } from "@/context/translate";
import React from "react";
import Tma from "../ui/Experiencia/Tma";
import Diarc from "../ui/Experiencia/Diarc";
import Tualo from "../ui/Experiencia/Tualo";
import TualoDashboard from "../ui/Experiencia/TualoDashboard";
import TechShop from "../ui/Experiencia/TechShop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Experiencia = () => {
  const { isEnglish } = useLanguage();

  return (
    <div className="w-full sm:w-[90%] mx-auto">
      <div className="text-white text-5xl lg:text-7xl font-medium text-center mb-16">
        <h1 className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          {isEnglish ? "Experience" : "Experiencia"}
        </h1>
      </div>

      <div className="flex flex-col sm:gap-28 max-sm:items-center max-sm:justify-center max-sm:gap-4 max-sm:hidden">
        <Tualo />
        <TualoDashboard />
        <Diarc />
        <Tma />
        <TechShop />
      </div>

      <div className="sm:hidden w-[90%] mx-auto flex flex-col gap-4">
        <div className="flex items-center w-full justify-center gap-4">
          <div className="w-[50%]">
            <Tualo />
          </div>
          <div className="w-[50%]">
            <TualoDashboard />
          </div>
        </div>
        <div className="flex items-center w-full justify-center gap-4">
          <div className="w-[50%]">
            <Diarc />
          </div>
          <div className="w-[50%]">
            <Tma />
          </div>
        </div>
        <div>
          <TechShop />
        </div>
      </div>
    </div>
  );
};

export default Experiencia;

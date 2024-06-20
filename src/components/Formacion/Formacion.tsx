"use client"

import { useLanguage } from '@/context/translate';
import Card from './Card';
import ModalCertificate from './ModalCertificate';
import dw from './dw.png'
import js from './js.png'
import fs from './fs.png'

const Formacion = () => {
  const { isEnglish } = useLanguage();

  return (
    <div className='w-full sm:w-[90%] mx-auto'>
      <div className="text-white text-5xl lg:text-7xl font-medium text-center mb-16">
        <h1 className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          {isEnglish ? "Studies" : "Estudios"}
        </h1>
      </div>
      <div className='flex items-center justify-around max-lg:flex-col max-lg:gap-12 max-lg:items-center'>
        <Card title={isEnglish ? "Web Development" : "Desarrollo Web"} date={isEnglish ? "March 2022 - June 2022" : "Marzo 2022 - Junio 2022" } academy='Coderhouse' certificate={<ModalCertificate image={dw}/>}/>
        <Card title="Javascript" date={isEnglish ? "June 2022 - October 2022" : "Junio 2022 - Octubre 2022" } academy='Coderhouse' certificate={<ModalCertificate image={js}/>}/>
        <Card title={isEnglish ? "Fullstack Web Development" : "Desarrollo Web Fullstack"} date={isEnglish ? "March 2023 - July 2023" : "Marzo 2023 - Julio 2023" } academy='Henry' certificate={<ModalCertificate image={fs}/>}/>
      </div>
    </div>
  )
}

export default Formacion
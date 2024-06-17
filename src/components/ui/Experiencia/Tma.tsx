"use client"

import MexicoIcon from '@/components/icons/MexicoIcon'
import { useLanguage } from '@/context/translate';
import React from 'react'
import TechnologyBox from '../TechnologyBox';
import Image from 'next/image';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import FirebaseIcon from '@/components/icons/FirebaseIcon';
import CloudinaryIcon from '@/components/icons/CloudinaryIcon';
import tma from './tma.png'


const Tma = () => {
    const { isEnglish} = useLanguage();

  return (
    <div className="flex flex-col gap-3">
        <div className="flex items-center text-white font-medium text-2xl gap-2">
            <p>Tu Mejor Amigo</p>
            <MexicoIcon/>
        </div>
        <div className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent">
            <p className="font-medium text-2xl">Desarrollador Frontend</p>
        </div>
        <div>
            <p className="text-white font-medium text-lg">Noviembre 2023 - Marzo 2024</p>
        </div>
        <div className="flex items-center text-white justify-between gap-24 max-lg:flex-col max-lg:gap-12">
            <div className="flex flex-col gap-3 lg:w-[60%]">
                <p>{isEnglish ? 
                    "I have contributed significantly to the development of an innovative dog walking service app, focusing on creating intuitive and engaging user interfaces. My work has ranged from implementing essential functionalities for data management, using GET, POST, PUT, and DELETE requests, to ensuring smooth interaction with the applications database." 
                    : 
                    "He contribuido significativamente al desarrollo de una innovadora aplicación de servicio de paseo de perros, enfocándome en la creación de interfaces de usuario intuitivas y atractivas. Mi trabajo ha abarcado desde la implementación de funcionalidades esenciales para la gestión de datos, utilizando peticiones GET, POST, PUT y DELETE, hasta asegurar una interacción fluida con la base de datos de la aplicación."
                    }
                </p>
                <div>
                    <p className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-lg">{isEnglish ? "My biggest challengues" : "Mis mayores desafíos"}</p>
                    <ul className="list-disc flex flex-col gap-2">
                        <li>{isEnglish ? "Integrate an effective notification system using React Native Firebase Cloud Messaging." : "Integrar un sistema de notificaciones efectivo mediante React Native Firebase Cloud Messaging."}</li>
                        <li>{isEnglish ? "Added functionality that allowed users to upload their pet and profile pictures through Cloudinary." : "Incorporación de una funcionalidad que permitió a los usuarios cargar imágenes de sus mascotas y tambien de perfil a través de Cloudinary."}</li>
                        <li>{isEnglish ? "Manage the launch of the app in the Google Play Console, ensuring that the service was accessible to dog lovers looking for reliable walkers." : "Gestionar el lanzamiento de la aplicación en Google Play Console, asegurando que el servicio estuviera accesible para los amantes de los perros buscando paseadores confiables."}</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-lg">{isEnglish ? "Technologies" : "Tecnologías utilizadas"}</p>
                    
                    <div className="flex items-center flex-wrap gap-2">
                       <TechnologyBox icon={<TypescriptIcon/>} technology="Typescript"/>
                       <TechnologyBox icon={<ReactIcon/>} technology="React Native"/>
                       <TechnologyBox icon={<FirebaseIcon/>} technology="Firebase Cloud Messaging"/>
                       <TechnologyBox icon={<CloudinaryIcon/>} technology="Cloudinary"/>

                    </div>
                </div>
            </div>
            <div className="lg:w-[50%]">
                <Image src={tma} alt="tma" width={1000} height={1000}/>
            </div>
        </div>
      </div>
  )
}

export default Tma
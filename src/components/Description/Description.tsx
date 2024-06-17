import Image from 'next/image'
import React from 'react'
import avatar from './avatar.png'
import Link from 'next/link'
import '../../app/globals.css'
import LinkedinIcon from '../icons/LinkedinIcon'
import { Linkedin } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import DocumentIcon from '../icons/DocumentIcon'



const Description = () => {
  return (
    <div className='flex items-center w-[80%] mx-auto max-xl:flex-col max-xl:w-[90%] max-xl:text-center max-xl:gap-10'>
        <div className='flex flex-col gap-2 w-[70%] max-xl:w-full'>
            <div className='text-white text-2xl lg:text-7xl font-medium'>
                <h1 className='bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent'>Manuel Latorre</h1>
                <h2 className='bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent'>Desarrollador Fullstack</h2>
            </div>
            <div className='text-zinc-500 w-[80%] max-xl:w-full'>
                <p>Cuento con más de 6 meses de experiencia profesional en Desarrollo Frontend. Mi experiencia abarca tanto el Frontend como el Backend, lo que me permite ofrecer soluciones completas y bien integradas. Me especializo en el desarrollo de aplicaciones web utilizando el stack MERN (MongoDB, Express, React y Node.js) como base tecnológica preferida. Estoy comprometido con la excelencia técnica y la entrega de productos de alta calidad que satisfacen las necesidades del cliente.</p>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <button className='p-2 rounded-xl w-[100px] text-black flex items-center gap-1 justify-center bgButton'>
                    <DocumentIcon/>
                    <p className='font-bold'>CV</p>
                </button>
                <Link href={""} className='p-2 rounded-xl w-[100px] text-black flex items-center gap-1 bgButton'>
                    <GithubIcon/>
                    <p className='font-bold'>Github</p>
                </Link>
                <Link href={""} className='p-2 rounded-xl w-[100px] text-black flex items-center gap-0.5 bgButton'>
                    <p className='font-bold'>Linked</p>
                    <LinkedinIcon/>
                </Link>
            </div>
        </div>

        <div className='w-[30%]'>
            <Image src={avatar} alt='' width={1000} height={1000} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Description
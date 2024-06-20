"use client"


import {  Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog-certificate";
import { useLanguage } from '@/context/translate';
import Image, { StaticImageData } from "next/image";

interface Props{
    image: StaticImageData
}

const ModalCertificate = ({image}:Props) => {
    const { isEnglish } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger className="px-2 bg-black rounded-xl">
        <p className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent">
          {isEnglish ? "View certificate" : "Ver certificado"}
        </p>
        </DialogTrigger>
      <DialogContent>
        <Image src={image} alt="" width={500} height={500}/>

      </DialogContent>
    </Dialog>
  )
}

export default ModalCertificate
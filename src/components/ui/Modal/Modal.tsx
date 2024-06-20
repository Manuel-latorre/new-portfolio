"use client"

import {  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/context/translate";

interface Props{
    title?:string,
    date?:JSX.Element
    icon?: JSX.Element,
    role?:JSX.Element,
    text1?: JSX.Element,
}

export default function Modal({text1, title, icon, role, date}:Props) {

    const { isEnglish } = useLanguage();

  return (
    
    <div className="sm:hidden">
        <Dialog>
      <DialogTrigger className="px-2 bg-black rounded-xl">
        <p className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent">
          {isEnglish ? "View more" : "Ver más"}
        </p>
        </DialogTrigger>
      <DialogContent className="overflow-y-scroll">
        <DialogHeader>
            <DialogTitle className="text-xl text-white font-medium flex flex-col gap-2 mb-5"> 
                <div className="flex items-center gap-2 justify-center">
                    {title}
                    {icon}
                </div>
                <div>
                    {date}
                </div>
                <div>
                    {role}
                </div>
            </DialogTitle>
          <DialogDescription className="flex flex-col gap-3">
            {text1}
   
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>
  );
}

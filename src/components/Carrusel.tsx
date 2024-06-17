import {  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import diarc from './diarc.png'
import diarc1 from './diarc1.png'
import Image from "next/image";
import Link from "next/link";

export const Carrusel = () => {
  return (
    <Carousel className="max-lg:w-[90%] max-lg:mx-auto">
      <CarouselContent>
        <CarouselItem>
          <Link href={"https://www.diarc.studio/"}>
            <Image src={diarc} alt="diarc" width={1000} height={1000}/>
          </Link>
        </CarouselItem>
        <CarouselItem>
        <Link href={"https://www.diarc.studio/"}>
            <Image src={diarc1} alt="diarc" width={1000} height={1000}/>
          </Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carrusel;

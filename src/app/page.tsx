import Description from "@/components/Description/Description";
import Experiencia from "@/components/Experiencia/Experiencia";
import Technologies from "@/components/Tecnologias/Technologies";



export default function Home() {
  return (
    <div className="flex flex-col">
      <Description/>
      <Experiencia/>
      <Technologies/>
    </div>
  );
}

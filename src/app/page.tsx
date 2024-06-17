import Description from "@/components/Description/Description";
import Experiencia from "@/components/Experiencia/Experiencia";



export default function Home() {
  return (
    <div className="flex flex-col">
      <Description/>
      <Experiencia/>
    </div>
  );
}

import React from "react";

interface Technology {
    icon: JSX.Element,
    technology: string
}

const TechnologyBox = ({icon, technology}:Technology) => {
  return (
    <div className="p-2 rounded-xl bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] flex items-center gap-2 text-black font-semibold">
      {icon}
      <p>{technology}</p>
    </div>
  );
};

export default TechnologyBox;

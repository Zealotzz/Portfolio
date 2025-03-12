'use client'

import { useState } from "react";
import { projects } from "./projects_entries";
import PageDot from "./page_dot";

export default function ProjectsShowcase() {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);

  return (
    <>
      <div className="flex snap-x snap-mandatory w-full h-[25vw] overflow-x-auto">
        {projects.map((p, id)=>{
          return(
            <div 
              key={id} 
              className={`relative grid snap-start shrink-0 ${id == currentProjectIndex ? "w-[90vw] lg:w-[40vw]" : "w-[90vw] lg:w-[100px] xl:w-[150px]"} h-full overflow-hidden transition-all duration-500 ease-out`}
              onPointerEnter={()=>{setCurrentProjectIndex(id)}}
            >
              <img
                alt={`${p.name}'s preview`}
                src={p.src}
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <div className="block w-[500px] uppercase font-code text-white text-2xl absolute -right-[205px] xl:-right-[195px] top-[250px] xl:top-[255px] transform rotate-90">{p.name}<br/><p className="text-sm normal-case">{p.tag.description}</p></div>
            </div>
          );
        })}
      </div>
      <div className="my-4 justify-self-center">
        <PageDot n={projects.length} current={currentProjectIndex} gap={3}/>
      </div>
    </>
  );
}
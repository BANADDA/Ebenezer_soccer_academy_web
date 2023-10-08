import React from "react";
import { useState } from "react";

function Player({
  src,
  alt,
  name,
  social,
  button,
  DOB,
  PLACE_OF_BIRTH,
  CITIZENSHIP,
  HEIGHT,
  FOOT,
  POSITION,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="dark:bg-neutral-700 flex flex-col rounded-lg bg-white shadow-lg md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
          src={src}
          alt={alt}
        />
        <div className="flex flex-col justify-start p-6 pb-0 align-middle">
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
            Name: <span className="font-normal text-base text-black font-semibold">{name}</span> 
          
        </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Date oF Birth: <span className="font-normal text-base text-black font-semibold">{DOB}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Place oF Birth: <span className="font-normal text-base text-black font-semibold">{PLACE_OF_BIRTH}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Citizenship: <span className="font-normal text-base text-black font-semibold">{CITIZENSHIP}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Height: <span className="font-normal text-base text-black font-semibold">{HEIGHT}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Foot: <span className="font-normal text-base text-black font-semibold">{FOOT}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Position: <span className="font-normal text-base text-black font-semibold">{POSITION}</span> 
            
          </span>

          <span className="mt-3 h-0.5 w-full bg-red-600 lg:w-full"></span>
          <div className="mt-2 flex justify-center align-middle">{social}</div>
        </div>
      </div>
    </div>
  );
}

export default Player;

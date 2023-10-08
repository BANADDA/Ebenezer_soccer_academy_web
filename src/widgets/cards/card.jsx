import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

function CardProgram() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="rounded-md">
        <article
          className={`translate-z-0 h-100 relative top-1/2 left-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-hidden rounded-md bg-white shadow-lg transition-shadow  duration-800 ${
            isOpen ? "h-100" : "hover:h-100 h-80"
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <header className=" relative h-64">
            <a href="#">
              <img
                src="/img/5.png"
                className="h-full w-full scale-100 transform rounded-md object-cover object-center opacity-100 transition-opacity duration-500"
              />
              <div
                className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-500"
                style={{ visibility: isOpen ? "visible" : "hidden" }}
              />
            </a>
          </header>
          <date className="bg-coral absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white">
            <IconButton size="sm" color="red" className="rounded-full">
              <i className="fa-solid fa-bullseye fa-lg" />
            </IconButton>
          </date>
                  <div className=" relative h-80 p-4">
                      <div className="bg-coral font-bolder absolute top-0 left-0 -mt-6 rounded-md px-4 py-1 text-xs uppercase text-white">
                          ESA
                      </div>
                      <h2 className="mb-0 h-24 text-xl font-bold ">
                          <a
                              href="#"
                              className="text-black transition-colors duration-1000 hover:text-gray-600"
                          >
                              an ice cream sundae party！
                          </a>
                      </h2>
                      <p
                          className="max-h-50 h-50 duration-550 mb-0 overflow-hidden overflow-ellipsis text-sm leading-snug text-gray-600 transition-all"
                          style={{ maxHeight: isOpen ? "none" : "100px" }}
                      >
                          The program is designed to develop the fundamental skills of young
                          players in a fun and interactive environment, with a focus on
                          building confidence and a love for the game. The program is led by
                          experienced and licensed coaches, and includes drills and
                          exercises that aim to improve ball control, passing, dribbling,
                          shooting, and other essential aspects of soccer.
                      </p>
                  </div>
        </article>
      </div>
      {/* <Card
        className={`translate-z-0 h-100 relative top-1/2 left-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-hidden rounded-md bg-white shadow-lg transition-shadow  duration-500 ${
          isOpen ? "h-100" : "hover:h-100 h-80"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <CardHeader>
          <Avatar
            src="/img/5.png"
            alt="Hello"
            className="h-full w-full scale-100 transform rounded-md object-cover object-center opacity-100 transition-opacity duration-500"
          />
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-500"
            style={{ visibility: isOpen ? "visible" : "hidden" }}
          />
        </CardHeader>

        <date className="bg-coral absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white">
          <IconButton size="sm" color="red" className="rounded-full">
            <i className="fa-solid fa-bullseye fa-lg" />
          </IconButton>
        </date>

        <CardBody className="relative h-80 p-4">
            <Typography variant='h5' color='white' className='bg-coral font-bolder absolute top-0 left-0 -mt-6 rounded-md px-4 py-1 text-xs uppercase'>ESA</Typography>
            <Typography variant='h2' className='mb-0 h-24 text-xl font-bold text-black transition-colors duration-1000 hover:text-gray-600'>Under 16 and 18</Typography>
                  <p
                      className="max-h-50 h-50 duration-550 mb-0 overflow-hidden overflow-ellipsis text-sm leading-snug text-gray-600 transition-all"
                      style={{ maxHeight: isOpen ? "none" : "100px" }}
                  >
                      The program is designed to develop the fundamental skills of young
                      players in a fun and interactive environment, with a focus on
                      building confidence and a love for the game. The program is led by
                      experienced and licensed coaches, and includes drills and
                      exercises that aim to improve ball control, passing, dribbling,
                      shooting, and other essential aspects of soccer.
                  </p>
        </CardBody>
      </Card> */}
    </>
  );
}

export default CardProgram;

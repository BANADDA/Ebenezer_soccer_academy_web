import React from "react";
import styled from "./home.module.css";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import MaterialCard from "@/widgets/cards/materialCard";
import materialData from "@/data/material-data";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PlayerCard from "@/widgets/cards/playerCard";
import playerData from "@/data/playerData";
import keeperData from "@/data/keeper";
import defenderData from "@/data/defenderData";
import forwardData from "@/data/forwardData";
import fullbackData from "@/data/fullBack";
import middfielderData from "@/data/midfielder";
import rightbackData, { strikerData } from "@/data/stricker";
import wingerData from "@/data/winger";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function TeamPage() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 1 : value);
  };
  return (
    <div className="mb-0 bg-gray-300 pb-0">
      <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/clouds.png')] bg-cover bg-fixed pt-16 pb-32">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 text-6xl font-black"
              >
                Our <span className={styled["home-span"]}> Football</span> Team.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-5 my-10 bg-gray-100 px-5 py-10 md:mx-32 md:px-20">
        <div className="container mx-auto">
          <Fragment>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                Goal Keepers
              </AccordionHeader>
              <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    {/* <PageTitle
                      heading="Manage"
                      span1="ment"
                      className
                    ></PageTitle> */}
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 flex grid-cols-2 items-center gap-6 md:grid-cols-2 md:justify-center xl:grid-cols-2"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {keeperData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Defenders
              </AccordionHeader>
              <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    {/* <PageTitle
                      heading="Manage"
                      span1="ment"
                      className
                    ></PageTitle> */}
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 grid grid-cols-2 items-center gap-6 md:grid-cols-2 xl:grid-cols-3"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {defenderData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion>
            {/* <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                Forward
              </AccordionHeader>
              <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 grid grid-cols-2 items-center gap-6 md:grid-cols-2 xl:grid-cols-3"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {forwardData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion> */}
            {/* <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                Full Back, Right Back, Left Back & Center Back  
              </AccordionHeader> */}
              {/* <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 grid grid-cols-2 items-center gap-6 md:grid-cols-2 xl:grid-cols-3"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {fullbackData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion> */}
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                Mid-Fielders
              </AccordionHeader>
              <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    {/* <PageTitle
                      heading="Manage"
                      span1="ment"
                      className
                    ></PageTitle> */}
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 grid grid-cols-2 items-center gap-6 md:grid-cols-2 xl:grid-cols-3"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {middfielderData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion>
          </Fragment>
          <Fragment>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(6)}>
                Forwards
              </AccordionHeader>
              <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    {/* <PageTitle
                      heading="Manage"
                      span1="ment"
                      className
                    ></PageTitle> */}
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 grid grid-cols-2 items-center gap-6 md:grid-cols-2  xl:grid-cols-3"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {strikerData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion>
            </Fragment>
            {/* <Fragment>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(7)}>
                Winger
              </AccordionHeader>
              <AccordionBody>
                <section className="mx-2 bg-white px-0 pt-0 pb-0">
                  <div className="container mx-auto ">
                    <div
                      className="gap-x-18 grid-auto-rows mt-5 flex grid-cols-2 items-center gap-6 md:grid-cols-2 md:justify-center xl:grid-cols-2"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      {wingerData.map(
                        ({
                          img,
                          name,
                          position,
                          text,
                          socials,
                          DOB,
                          PLACE_OF_BIRTH,
                          CITIZENSHIP,
                          HEIGHT,
                          FOOT,
                          POSITION,
                        }) => (
                          <PlayerCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            text={text}
                            DOB={DOB}
                            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
                            CITIZENSHIP={CITIZENSHIP}
                            HEIGHT={HEIGHT}
                            FOOT={FOOT}
                            POSITION={POSITION}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                  <IconButton
                                    key={name}
                                    color={color}
                                    variant="text"
                                  >
                                    <i
                                      className={`fa-brands text-lg fa-${name}`}
                                    />
                                  </IconButton>
                                ))}
                              </div>
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              </AccordionBody>
            </Accordion>
            </Fragment> */}
        </div>
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default TeamPage;

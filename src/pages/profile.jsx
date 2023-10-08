import React from "react";
import styled from "./home.module.css";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import {Footer } from "@/widgets/layout";
import MaterialCard from "@/widgets/cards/materialCard";
import materialData from "@/data/material-data";
import Carousel from "@/widgets/Carousel";

export function Programs() {
  return (
    <div className="bg-gray-100">
      <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/clouds.png')] bg-cover bg-fixed pt-16 pb-32">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 text-6xl font-black"
              >
                Football <span className={styled["home-span"]}> Teams</span>{" "}
                Programs.
              </Typography>
              <a href="/contact">
                <Button
                  variant="outlined"
                  className="border-red-600  bg-red-500 text-white"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-0 px-0 pt-10 pb-10">
        <div className="container mx-auto flex justify-center ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
            {materialData.map(({img, title, description }) => (
              <MaterialCard
                img={img}
                alt={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
        {/* <div  className=' mx-auto max-w-6xl bg-red-100'>
        <Carousel/>
        </div> */}
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default Programs;

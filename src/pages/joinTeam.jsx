import React from "react";
import styled from "./home.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function JoinTeam() {
  return (
    <>
      <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/field.png')] bg-cover bg-fixed pt-16 pb-32">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 text-6xl font-black"
              >
                Contact <span className={styled["home-span"]}>US.</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section class="pb-30 mb-32 pt-20 text-gray-800">
        <div class="flex flex-wrap">
          <div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
            <h2 class="mb-6 text-3xl font-bold">
              Contact <span className={styled["home-span"]}>Us</span>
            </h2>
            <p class="mb-6 mb-8 block font-sans text-base font-semibold leading-relaxed text-blue-gray-800 antialiased">
              At the Ebenezer Soccer Academy, we're always looking to connect
              with passionate individuals who share our vision for empowering
              youth through sports. Whether you're interested in volunteering,
              donating, or just want to learn more, our team is here to help.
              Get in touch today!
            </p>
            <p class="mb-2 text-blue-gray-500">
              Wabulungu Primary School, Magamaga , Mayuge District.
            </p>
            <p class="mb-2 text-blue-gray-500">+256 704 913762</p>
            <p class="mb-2 text-blue-gray-500">
              {" "}
              <Link
                activeClass="active"
                to="#"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                tidhamulala@gmail.com{" "}
              </Link>
            </p>
          </div>
          <div class="bg-gray-500 mb-12 shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6  border-solid border-red-600 pt-10 pb-10 rounded-lg w-full">
            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="
              form-control
              m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none
            "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="form-group form-check mb-6 text-center">
              <input checked id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-500 !important bg-gray-100 border-gray-300 rounded "/>
              <label htmlFor="red-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send me a copy of this message</label>
              </div>
              <button
                type="submit"
                class="
            w-full
            rounded
            bg-red-600
            px-6
            py-2.5
            text-xs
            font-medium
            uppercase
            leading-tight
            text-white
            shadow-md
            transition duration-150
            ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700
            focus:shadow-lg focus:outline-none
            focus:ring-0
            active:bg-red-800
            active:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <div id="contact-us" className=" bg-black p-10 pb-0"></div>
    </>
  );
}

export default JoinTeam;

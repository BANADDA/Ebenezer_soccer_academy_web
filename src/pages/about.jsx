import React from "react";
import styled from "./home.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { FeatureCard} from "@/widgets/cards";
import aboutData from "@/data/about-data";
import { Link } from "react-router-dom";
import { Footer } from "@/widgets/layout";

export function About() {
  return (
    <>
      <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/clouds.png')] bg-cover pt-16 pb-32 ">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center pt-10">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 text-6xl font-black"
              >
                ABOUT <span className={styled["home-span"]}>US.</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-200 px-4 pb-20 pt-20">
        <div className="container mx-auto">
          <div className="ml-36 mr-36 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {aboutData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white,",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mb-3 mt-5 ml-10 mr-10 flex flex-col rounded-xl bg-white bg-clip-border shadow-none">
            <div className="flex">
              <div className="w-1/3">
                <img
                  class=" h-full rounded-l-lg object-cover"
                  src="/img/ball.jpg"
                  alt="card image"
                />
              </div>
              <div class="text-secondary w-2/3 p-6 pr-0 pl-10">
                {/* <span class="font-bolder font-sans font-semibold uppercase text-blue-gray-900 flex gap-4 align-middle">
                  <IconButton size="lg" color="red" className="rounded-full mb-2">
                    <i className="fa-solid fa-bullseye fa-lg" />
                  </IconButton>
                </span> */}
                <Typography
                  variant="h2"
                  className="font-sans text-3xl font-semibold text-blue-gray-900 mb-4"
                >
                  Our <span className="text-red-500">Objectives</span>
                </Typography>
                <ul className="my-10 mt-0 w-full  space-y-1 text-blue-gray-600 dark:text-blue-gray-600">
                  <li className="mr-0 flex ">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    To raise role models, mentors and top football stars in
                    Uganda
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Engage the youths meaningfully through soccer
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Provide youths with a platform to identify and develop their
                    football talent as well as launching and managing their
                    professional careers locally and internationally.
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Arrange football camps and competitions for youths
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Organize international trial tours and linking them with
                    international clubs
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Placing youth footballers in international football
                    academies for proper development of their football careers.
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Develop their leadership and crime prevention skills through
                    soccer
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Develop team spirit of peace, religious and cultural
                    integration among youths.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="about-us"
            className="mt-20 flex flex-wrap items-center pb-20"
          >
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-600 p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <Typography
                variant="h2"
                className=" mb-3 text-4xl font-bold"
                color="blue-gray"
              >
                ABOUT <span className={styled["home-span"]}>US</span>
              </Typography>
              <Typography className="mb-8 font-semibold text-blue-gray-700">
                Ebenezer Soccer Academy was born in 2017 out of a desire to
                unite and empower the youth in the Musita community, located in
                the Mayuge District. A collaborative effort by Ebenezer
                Community Hospital, the academy was founded with the aim of
                mobilizing young talent, raising health awareness, and providing
                youth counseling and career guidance.
                <br />
                <br />
                Ebenzer Soccer Academy is committed to providing world-class
                football programs and life skills training to the youth of
                Uganda. Our mission is to create a safe and supportive
                environment where young people can develop their football skills
                while also learning important life lessons. Through soccer camps
                and competitions, connecting with international academies and
                clubs, and building leadership skills, the academy aims to help
                its youth reach their full potential and become successful
                individuals in the future. The academy's dedicated coaches and
                mentors are passionate about helping their youth become role
                models and top football stars in Uganda. Overall, Ebenzer Soccer
                Academy believes in the positive power of football to bring
                about meaningful change in society.
              </Typography>
              <Link to="/contact">
                <Button
                  variant="outlined"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-gray-200"
                >
                  Join Team
                </Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-gray-1000/10 shadow-lg">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/5.png"
                    className=" h-30 w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top <span className={styled["home-span"]}>Talent</span>{" "}
                    Development
                  </Typography>
                  <Typography className="font-sans font-bold text-blue-gray-800">
                    At Ebenezer Soccer Academy, we are committed to developing
                    the top talent of our young athletes. Through our rigorous
                    training programs and individualized coaching, we strive to
                    ensure that our most gifted players receive the support they
                    need to become true champions both on and off the field.
                  </Typography>
                  <Link to="/galleryPage">
                    <Button
                      variant="text"
                      className="text-red-500 hover:bg-red-500/10 active:bg-red-500/30"
                    >
                      View Gallery
                    </Button>
                    </Link>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer/>
      </div>
    </>
  );
}

export default About;

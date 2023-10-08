import React from "react";
import styled from "./home.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Carousel from "@/widgets/Carousel";
import { Link } from "react-router-dom";
import patnerData from "@/data/patners";
import Patners from "@/widgets/cards/patners";

import iconData from "@/data/icon";
import Icons from "@/widgets/cards/icons";
import {
  faFacebookMessenger,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 h-full w-full bg-black object-cover opacity-30"
        >
          <source
            src="https://www.dropbox.com/s/qobekwhksiu5oex/ESA.mp4?raw=1"
            type="video/mp4"
          />
        </video>
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="black"
                className="mb-6 font-black"
              >
                EBENEZER <span className={styled["home-span"]}>SOCCER</span>{" "}
                ACADEMY.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-400 inline-block text-left text-lg font-bold text-black"
              >
                We are a dedicated team of soccer enthusiasts, providing quality
                training and guidance to aspiring players. With a focus on
                player development and growth, our academy nurtures talented
                individuals to reach their full potential and achieve their
                dreams in the sport.
              </Typography>

              <div className=" flex items-center justify-center gap-5 pt-20">
                <IconButton color="blue" variant="text">
                  <i className={`fa-brands fa-facebook text-4xl`} />
                </IconButton>
                <IconButton color="blue" variant="text">
                  <i className={`fa-brands fa-twitter text-4xl`} />
                </IconButton>
                <IconButton color="pink" variant="text">
                  <i className={`fa-brands fa-instagram text-4xl`} />
                </IconButton>
                <IconButton color="red" variant="text">
                  <i className={`fa-brands fa-youtube text-4xl`} />
                </IconButton>
              </div>

              {/* <div className=" gap-5">
              {iconData.map(({iconData}) => (
                <Icons icon={iconData}/>
              ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-200 px-4 pb-10 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div id="about-us" className="mt-20 flex flex-wrap items-center pb-0">
            <div className="mx-auto mt-3 w-full px-4 md:w-5/12">
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
                At Ebenezer Soccer Academy, we believe that soccer is more than
                just a game - it's a vehicle for positive change. We seek to
                create a community of young people who are not just skilled
                soccer players but also compassionate and socially responsible
                leaders. With a focus on health, education, and career
                development, we aim to build a new generation of champions who
                will succeed both on and off the field. Join us on this journey
                to inspire, empower, and transform the lives of young people in
                the Musita community and beyond.
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
                    Top <span className={styled["home-span"]}>Talent</span>
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
      <section className="mx-8 bg-white px-6 pt-10 pb-10">
        <div className="container mx-auto ">
          <PageTitle heading="Manage" span1="ment" className></PageTitle>
          <div
            className="gap-x-18 grid-auto-rows mt-10 grid grid-cols-2 items-center gap-6 md:grid-cols-2 xl:grid-cols-4"
            style={{ gridAutoRows: "1fr" }}
          >
            {teamData.map(({ img, name, position, text, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                text={text}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-auto w-full bg-[url('/img/bg.png')] bg-cover bg-center px-4 pt-8 pb-0 ">
        <div className="container mx-auto mb-0">
          {/* <div className=" mx-auto max-w-6xl bg-white p-0 px-0 rounded-3xl opacity-100">
            <PageTitle
              heading="Our"
              span2="Players"
              className="mb-0 text-white"
            >
              <Typography
                variant="lead"
                color="white"
                className="opacity-400 inline-block text-left text-base font-bold text-black pb-2"
              >
              At Ebenezer Soccer Academy, our players are the heart and soul of
              our mission. Each young athlete brings a unique talent, passion,
              and spirit to our community. We are committed to providing a safe,
              nurturing, and empowering environment where our players can thrive
              both on and off the field.
              </Typography>
            </PageTitle>
          </div> */}
          <div className="mx-auto max-w-6xl bg-gray-100">
            <div className="pt-10 text-center">
              <PageTitle
                heading="Our"
                span2="Players"
                className="mt-0 text-white"
              />
            </div>
            <Carousel />
            <div className="text-center pb-5 pt-0">
              <Link to="/teamPage">
                <Button
                  variant="gradient"
                  className= "text-white from-red-800 to-red-800 shadow-md shadow-red-800/20 hover:shadow-lg hover:shadow-red-700/40 active:opacity-[0.85]"
                >
                  View Full Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-5 h-auto bg-white px-6 pt-5 pb-5 align-middle">
        <div className="container mx-auto">
          <PageTitle
            heading="Our"
            span2="Partners"
            className="mb-0 text-white"
          />
          <div className="flex grid-cols-1 justify-center gap-3 md:grid-cols-2 lg:grid-cols-3">
            {patnerData.map(({ img }) => (
              <Patners img={img} />
            ))}
          </div>
        </div>
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;

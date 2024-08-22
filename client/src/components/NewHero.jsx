/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion, useScroll, useVelocity, useTransform, useSpring,} from "framer-motion";
import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import WavesImg from '../assets/images/waves.jpeg';
// import HeroPing from "./PingIcon";
import MagnetButtonExample from "./NewHeroButton";

export const NewHero = () => {

    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[500vh] bg-neutral-50 text-neutral-950"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
          <Nav />
          <CenterCopy />
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-7xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
          >
            Another <span className="text-sky-500">Full-Stack</span> MERN Project By <span className="text-sky-500">Jannick Pedersen</span> - 2024
          </motion.p>
          <ScrollArrow />
        </div>
      </section>
    );
  };
  
  const Nav = () => {
    return (
      <div className="relative mb-1 flex w-full justify-between p-6">
        <p className="hidden text-base text-neutral-400 md:block">
          40° 42' 46" N, 74° 0' 21" W
          <br />
        </p>
        {/*
        <Logo />
        */}
      
        <Links />
      </div>
    );
  };
  
  // eslint-disable-next-line no-unused-vars
  const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
      {/*
      <div className="hidden md:block">
        <HeroPing />
      </div>
      */}
      
    );
  };
  
  const Links = () => {
    return (
      <nav className="flex gap-4 text-base">
        <a href="/" className="hover:text-sky-600 hover:scale-110 transition">Supply</a>
        <a href="/" className="hover:text-sky-600 hover:scale-110 transition">Merch</a>
        <a href="/" className="hover:text-sky-600 hover:scale-110 transition">Locations</a>
        <a href="/register" className="hover:text-sky-600 hover:scale-110 transition">Register</a>
      </nav>
    );
  };
  
  const CenterCopy = () => {
    return (
      <>
        <div className="flex items-center justify-center px-4">
          <img
            src={WavesImg}
            alt="Placeholder image"
            className="mr-2 h-full w-40 bg-neutral-200 object-cover rounded-md"
          />
          <h1 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
            Life is short. <br />
            Don't waste it. <br />
            It's time to{" "}
            <span className="inline-block -skew-x-[18deg] font-black text-sky-500">
              Wave.
            </span>
          </h1>
        </div>
        <MagnetButtonExample />
      </>
    );
  };
  
  const ScrollArrow = () => {
    return (
      <>
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto" />
        </div>
      </>
    );
  };
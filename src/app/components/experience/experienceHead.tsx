"use client";
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { tsParticles } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";



export const ExperienceHeader: React.FC = ({}) => {
   const [init2, setInit2] = useState(false);
   const [scale, setScale] = useState(3);
   useEffect(() => {
     let isCancelled = false;
     const updateScale = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setScale(1); 
      } else {
        setScale(3); 
      }
    };
    updateScale();

    window.addEventListener("resize", updateScale);

     initParticlesEngine(async () => {
       await loadPolygonMaskPlugin(tsParticles);
       if (!isCancelled) {
         setInit2(true);
       }
     });
     return () => {
       isCancelled = true;
       window.removeEventListener("resize", updateScale);
     };
     
   }, []);
   if (!init2) {
     return null;
   }
  const options = {
    fullScreen: {
      enable: false,
    },
    fpsLimit: 15,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3,
        },
      },
    },

    particles: {
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 2,
          sync: true,
        },
      },
      links: {
        blink: false,
        color: "random",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        enable: true,
        outModes: "bounce" as const,
        speed: { min: 0.5, max: 1 },
      },
      number: {
        value: 100,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
        random: false,
        value: { min: 0.05, max: 1 },
      },
      shape: {
        type: "circle",
      },
      size: {
        animation: {
          enable: false,
          speed: 40,
          sync: false,
        },
        random: true,
        value: { min: 0.1, max: 1 },
      },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: "#fff",
          width: 0.4,
          opacity: 0.3,
        },
      },
      move: {
        radius: 10,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: scale,
      type: "inline",
      url: "/experience.svg",
    },
  };

  return <Particles id="tsparticles6" options={options} />;
};

"use client";
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { tsParticles } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";



export const ProjectsHeader: React.FC = ({ }) => {
  const [init1, setInit1] = useState(false);
   const [scale, setScale] = useState(3);
   useEffect(() => {
     let isCancelled = false;
     const updateScale = () => {
       const screenWidth = window.innerWidth;
       if (screenWidth < 800) {
         setScale(1);
       } else if (screenWidth < 1400 && screenWidth > 800) {
         setScale(2);
       } else {
         setScale(3);
       }
     };
     updateScale();

     window.addEventListener("resize", updateScale);

     initParticlesEngine(async () => {
       await loadPolygonMaskPlugin(tsParticles);
       if (!isCancelled) {
         setInit1(true);
       }
     });
     return () => {
       isCancelled = true;
       window.removeEventListener("resize", updateScale);
     };
   }, []);
  if (!init1) {
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
          enable: false,
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
        value: "#f9fafa",
        animation: {
          enable: false,
          speed: 2,
          sync: true,
        },
      },
      links: {
        blink: false,
        color: "random",
        consent: false,
        distance: 0,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        outModes: "bounce" as const,
        speed: 0.0,
      },
      number: {
        value: 400,
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
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: "#fff",
          width: 0.4,
          opacity: 0.8,
        },
      },
      move: {
        radius: 3,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: scale,
      type: "inline",
      url: "/projects.svg",
    },
  };

  return <Particles id="tsparticles2" options={options} />;
};

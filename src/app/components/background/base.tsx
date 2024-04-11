"use client";
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { tsParticles } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";


export const Base: React.FC = ({ }) => {
   const [init, setInit] = useState(false);
   const [scale, setScale] = useState(3);
 
   useEffect(() => {
     let isCancelled = false;
      const updateScale = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1500) {
          setScale(1);
        } else {
          setScale(2);
        }
      };
      updateScale();

      window.addEventListener("resize", updateScale);
     initParticlesEngine(async () => {
       await loadPolygonMaskPlugin(tsParticles);
        await loadSlim(tsParticles);
       if (!isCancelled) {
         setInit(true);
       }
     });
     return () => {
       isCancelled = true;
        window.removeEventListener("resize", updateScale)
     };
   }, []);
   if (!init) {
     return null;
   }
  const options = {
    fullScreen: {
      enable: false,
      zIndex: -1,
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
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 2,
          sync: true,
        },
      },
      links: {
        blink: false,
        color: "#ff0000",
        consent: false,
        distance: 15,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        enable: true,
        outModes: "bounce" as const,
        speed: 0.05,
      },
      number: {
        value: 600,
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
          speed: 10,
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
          width: 0.1,
          opacity: 0.3,
        },
      },
      move: {
        radius: 3,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: scale ,
      type: "inline",
      url: "/test.svg",
    },
  };

  return <Particles id="tsparticles" options={options} />;
};

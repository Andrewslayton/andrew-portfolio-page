"use client";
import React, { useEffect, useState } from "react";
import { Particles, } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { tsParticles } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";




export const AboutHeader: React.FC = ({ }) => {
    const [init, setInit] = useState(false);
     useEffect(() => {
       let isCancelled = false;
       initParticlesEngine(async () => {
         await loadPolygonMaskPlugin(tsParticles);
            await loadSlim(tsParticles);
         if (!isCancelled) {
           setInit(true);
         }
       });
       return () => {
         isCancelled = true;
       };
     }, []);
    if (!init ) 
    {
      return null;
    }
  const options = {
    fullScreen: {
        enable: false,
        zIndex: -1
        },
    fpsLimit: 15,
    interactivity: {
    },
    particles: {
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 2,
        }
      },
      links: {
        blink: false,
        color: "random",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.3,
        width: 0.5
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: { min: 0.5, max: 1 }
      },
      number: {
        value: 200
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        random: false,
        value: { min: 0.05, max: 1 }
      },
      shape: {
        type: "circle"
      },
      size: {
        animation: {
          enable: false,
          speed: 40,
          sync: false
        },
        random: true,
        value: { min: 0.1, max: 1 }
      }
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: "#fff",
          width: 0.3,
          opacity: 0.2
        }
      },
      move: {
        radius: 10
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: 3,
      type: "inline",
      url: "/test.svg", 
    },
  };

  return <Particles id="tsparticles1" options={options} /> ;
};
"use client";
import React, { useEffect, useState } from "react";
import { Particles, } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { tsParticles } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";




export const AboutHeader: React.FC = ({ }) => {
    const [init, setInit] = useState(false);
    const [scale, setScale] = useState(3);
    useEffect(() => {
      let isCancelled = false;
      const updateScale = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          setScale(1);
        } else {
          setScale(2);
        }
      };
      updateScale();

      window.addEventListener("resize", updateScale);

      initParticlesEngine(async () => {
        await loadPolygonMaskPlugin(tsParticles);
        if (!isCancelled) {
          setInit(true);
        }
      });
      return () => {
        isCancelled = true;
        window.removeEventListener("resize", updateScale);
      };
    }, []);
    if (!init ) 
    {
      return null;
    }


const options = {
    fpsLimit: 60,
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
                speed: 20,
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
            value: 200,
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
                width: 0.3,
                opacity: 0.2,
            },
        },
        move: {
            radius: 10,
        },
        inline: {
            arrangement: "equidistant",
        },
        scale: 3,
        type: "inline",
        url: "/test.svg",
    },
};

return <Particles id="tsparticles1" options={options} /> ;
};
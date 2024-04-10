"use client";
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { tsParticles } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";

interface headerBakgroundProps {
  isVisible: boolean;
}

export const Base: React.FC<headerBakgroundProps> = ({ isVisible }) => {
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
  if (!init) {
    return null;
  }
  const options = {
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
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
          speed: 3
        }
      }
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
        distance: 30,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: { min: 0.5, max: 1 },
      },
      number: {
        value: 500,
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
        radius: 3,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: 3,
      type: "inline",
      url: "/test.svg",
    },
  };

  return <Particles id="tsparticles" options={options} />;
};

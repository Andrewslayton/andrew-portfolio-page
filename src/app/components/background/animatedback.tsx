"use client"
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import { Engine, FullScreen } from "@tsparticles/engine";

interface HyperspaceBackgroundProps {
  isVisible: boolean;
  speed?: number;
}

export const HyperspaceBackground: React.FC<HyperspaceBackgroundProps> = ({
  isVisible,
  speed = 1,
}) => {

  useEffect(() => {
    let isCancelled = false;
    initParticlesEngine(async (engine: Engine) => {
      await loadTrianglesPreset(engine);
     
    });
    return () => {
      isCancelled = true;
    };
  }, []);

  if ( !isVisible) {
    return null;
  }

  const options = {
    preset: "triangles",
    fpsLimit: 60,
    background: {
      color: "#000000",
    },
    FullScreen: {
      enable: true,
    },
    particles: {
      move: {
        speed: speed,
      },
    },
  };

  return <Particles id="tsparticlesa" options={options} />;
};


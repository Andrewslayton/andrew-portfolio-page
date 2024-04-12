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
    fpsLimit: 15,
    background: {
      color: "#000000",
    },
    FullScreen: {
      enable: true,
    },
    particles: {
      move: {
        speed: 1,
      },
    },
  };

  return <Particles id="tsparticlesa" options={options} />;
};


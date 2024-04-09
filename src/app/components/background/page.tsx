"use client"
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import { Engine } from "@tsparticles/engine";

interface HyperspaceBackgroundProps {
  isVisible: boolean;
  speed?: number;
}

export const HyperspaceBackground: React.FC<HyperspaceBackgroundProps> = ({
  isVisible,
  speed = 1,
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
      await loadTrianglesPreset(engine);
      if (!isCancelled) {
        setInit(true);
      }
    });
    return () => {
      isCancelled = true;
    };
  }, []);

  if (!init || !isVisible) {
    return null;
  }

  const options = {
    preset: "triangles",
    particles: {
      move: {
        speed: speed,
      },
    },
  };

  return <Particles id="tsparticles" options={options} />;
};


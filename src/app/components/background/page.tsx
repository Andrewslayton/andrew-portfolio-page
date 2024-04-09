// components/HyperspaceBackground.tsx
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";
import { Engine } from "@tsparticles/engine";

interface HyperspaceBackgroundProps {
  isVisible: boolean;
  speed?: number; 
}

const HyperspaceBackground: React.FC<HyperspaceBackgroundProps> = ({
  isVisible,
  speed = 10,
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
      await loadHyperspacePreset(engine);
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
    preset: "hyperspace",
    particles: {
      move: {
        speed: speed, 
      },
    },
  };

  return <Particles id="tsparticles" options={options} />;
};

export default HyperspaceBackground;
// // components/HyperspaceBackground.tsx
// import React, { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { Engine, ISourceOptions } from "@tsparticles/engine";
// import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";

// interface HyperspaceBackgroundProps {
//   isVisible: boolean;
// }

// const HyperspaceBackground: React.FC<HyperspaceBackgroundProps> = ({
//   isVisible,
// }) => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     let isCancelled = false;
//     initParticlesEngine(async (engine: Engine) => 
//         {
//         await loadHyperspacePreset(engine);
//       await loadSlim(engine);
//       if (!isCancelled) {
//         setInit(true);
//       }
//     });
//     return () => {
//       isCancelled = true;
//     };
//   }, []);

//   const options: ISourceOptions = useMemo(
//     () => ({
//       fullScreen: {
//         enable: true,
//         zIndex: -1, 
//       },
//       background: {
//         color: {
//           value: "#000", 
//         },
//       },
//       fpsLimit: 60,
//       particles: {
//         number: {
//           value: 150, // More particles to fill the screen
//           density: {
//             enable: true,
//             value_area: 800,
//           },
//         },
//         color: {
//           value: "#ffffff", 
//         },
//         opacity: {
//           value: 0.5,
//           anim: {
//             enable: true,
//             speed: 1,
//             opacity_min: 0.1,
//           },
//         },
//         size: {
//           value: 1, // Larger size for visible particles
//           random: true,
//           anim: {
//             enable: true,
//             speed: 4,
//             size_min: 0.3,
//           },
//         },
//         line_linked: {
//           enable: false, // Disable linking lines
//         },
//         move: {
//           enable: true,
//           speed: 10, // Adjust for faster movement
//           direction: "top", // "top" for towards the viewer effect
//           random: true,
//           straight: true, // Straight lines for a "zooming" effect
//           out_mode: "out", // Particles move out of the canvas
//           attract: {
//             enable: false,
//           },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   if (!init || !isVisible) {
//     return null;
//   }

//   return <Particles id="tsparticles" options={options} />;
// };

// export default HyperspaceBackground;

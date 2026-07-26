import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 40 },
            repulse: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#e68e2e" },
          links: {
            color: "#f5d393",
            distance: 140,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 45,
          },
          opacity: { value: 0.45 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;

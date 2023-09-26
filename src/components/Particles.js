import Particles from "react-tsparticles";

const BGParticles = () => (
    <Particles
        id="tsparticles"
        options={{
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.5,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#528AAE",
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                },
                links: {
                    color: "#528AAE",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "",
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }}/>
);

export default BGParticles;
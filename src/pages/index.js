import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Particles from 'react-tsparticles';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
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
              value: "#ffffff",
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
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.15,
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
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      </Section>
      <Projects />
      <About />
    </Layout>
  );
};

export default Home;

import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Particles from "../components/Particles";

const Home = () => {
  return (
    <Layout>
        <Particles/>
      <Section>
        <Hero/>
      </Section>
        <About/>
      <Projects/>
    </Layout>
  );
};

export default Home;

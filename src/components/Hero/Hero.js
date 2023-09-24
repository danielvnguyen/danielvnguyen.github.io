import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Img } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <SectionTitle main center>
            <div>
                <Img src="/images/logo.png" />
            </div>
        </SectionTitle>
    </Section>
);

export default Hero;
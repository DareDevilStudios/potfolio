import React from 'react';

import { Section, SectionText, SectionTitle1 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle1 main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle1>
        <SectionText> 
        Creative Full-Stack developer. Currently focused on AR-VR development, 
        Cloud Platforms and Open Source Contribution.
        </SectionText>
        <a href="#about"><Button href="https://bit.ly/3y04AFT">Learn More</Button></a>
        <a href="https://bit.ly/3y04AFT"><Button>My Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
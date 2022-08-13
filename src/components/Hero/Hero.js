import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Haider Ibrahim <br />
        </SectionTitle>
        <SectionText>
          I am software engineer with strong passion for self-improvement and
          learning.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

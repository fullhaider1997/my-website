import {
  Section,
  SectionDivider,
  SectionText,
  workDateSection,
  SectionSubText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Education = ({}) => {
  return (
    <Section id="Education">
      <SectionTitle>Education</SectionTitle>

      <SectionText>Lakehead University, Thunder Bay, ON, Canada</SectionText>

      <SectionSubText style={{ marginButtom: "0px" }}>
        Bachelor of Engineering in Software Engineering
      </SectionSubText>

      <SectionText>Humber College, Toronto, ON, Canada</SectionText>

      <SectionSubText style={{ marginButtom: "0px" }}>
        Advanced Diploma in Computer Engineering Technology
      </SectionSubText>

      <SectionDivider colorAlt />
    </Section>
  );
};

export default Education;

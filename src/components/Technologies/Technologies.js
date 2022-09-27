import React from "react";
import { DiReact, DiFsharp } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in journey
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming languages & Frameworks</ListTitle>
          <ListParagraph>
            React.js, JavaScript, Python, Java, C++, TypeScript, Django,
            GraphQL, Node.js, HTML, CSS, Express.js,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFsharp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            {" "}
            Mongodb, MySql, Git, Jira, Postman, WireShark, Jira, CIRCLECI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

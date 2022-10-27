import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { projects } from "../../constants/constants";
import { Slid } from "./Slide";
const Projects = () => {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);

  const handleClickOpen = (key) => {
    console.log(key);
    setKey(key);
    setOpen(true);
  };
  const sendId = (key) => {
    console.log(key);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Selected Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <>
              <BlogCard key={i}>
                <Img src={p.image[0].link} />
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks onClick={() => handleClickOpen(i)}>
                    Expand
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            </>
          );
        })}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" fontSize={24}>
            {projects[key].title}
          </DialogTitle>

          <Slid data={projects[key]}></Slid>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" fontSize={18}>
              {projects[key].description}
            </DialogContentText>
          </DialogContent>
          {projects[key].demo && (
            <ExternalLinks
              href={projects[key].demo}
              style={{ width: 80, marginLeft: 240 }}
            >
              Demo
            </ExternalLinks>
          )}
          <DialogActions>
            <Button onClick={handleClose}>Leave</Button>
          </DialogActions>
        </Dialog>
      </GridContainer>
    </Section>
  );
};

export default Projects;

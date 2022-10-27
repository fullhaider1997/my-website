import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { React } from "react";
import { ExternalLinks } from "./ProjectsStyles";

export const Slid = (props) => {
  return (
    <div className="slide-container">
      <Slide>
        {props.data.image.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ marginLeft: 50 }}>
              <img
                style={{ height: 300, width: 500 }}
                src={slideImage.link}
                alt="hello"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

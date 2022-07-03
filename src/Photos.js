import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <row>
          {props.photos.map(function (photo, index) {
            return (
              <col md={4} key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="image-fluid"
                    alt={photo.alt}
                  />
                </a>
              </col>
            );
          })}
        </row>
      </section>
    );
  } else {
    return null;
  }
}

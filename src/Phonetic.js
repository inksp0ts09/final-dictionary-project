import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic)
    return (
      <div className="Phonetic">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span className="text">{props.phonetics.text}</span>
      </div>
    );
}

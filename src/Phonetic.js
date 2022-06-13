import React from "react";

export default function Phonetic(props) {
  if (props.phonetic)
    return (
      <div className="Phonetic">
        <a href={props.phonetics.audio} target="_blank">
          Listen
        </a>
        <br />
        {props.phonetics.text}
      </div>
    );
}

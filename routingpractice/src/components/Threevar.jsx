import React from "react";
import { useParams } from "react-router";

const Threevar = () => {
  const { userInput, textColor, backColor } = useParams();

  if (isNaN(userInput)) {
    return (
      <fieldset>
        <legend>Home</legend>
        <h1 style={{ color: textColor, backgroundColor: backColor }}>
          The word is: {userInput}
        </h1>
      </fieldset>
    );
  } else {
    return (
      <fieldset>
        <legend>Home</legend>
        <h1 style={{ color: textColor, backgroundColor: backColor }}>
          The number is: {userInput}
        </h1>
      </fieldset>
    );
  }
};

export default Threevar;

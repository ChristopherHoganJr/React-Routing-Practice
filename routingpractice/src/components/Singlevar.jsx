import React from "react";
import { useParams } from "react-router";

const Singlevar = () => {
  const { userInput } = useParams();
  if (userInput === "home") {
    return (
      <fieldset>
        <legend>Home</legend>
        <h1>{userInput}</h1>
      </fieldset>
    );
  } else if (isNaN(userInput)) {
    return (
      <fieldset>
        <legend>Home</legend>
        <h1>The word is: {userInput}</h1>
      </fieldset>
    );
  } else {
    return (
      <fieldset>
        <legend>Home</legend>
        <h1>The number is: {userInput}</h1>
      </fieldset>
    );
  }
};

export default Singlevar;

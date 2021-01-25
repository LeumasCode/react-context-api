import React, { Component } from "react";
import LanguageContext from "./contexts/LanguageContext";

const Button = () => {
  return (
    <button className="primary ui button">
      <LanguageContext.Consumer>
        {(value) => (value === "English" ? "Submit" : "Voorleggen")}
      </LanguageContext.Consumer>
    </button>
  );
};

export default Button;

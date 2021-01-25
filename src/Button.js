import React, { Component } from "react";
import ColorContext from "./contexts/ColorContext";
import LanguageContext from "./contexts/LanguageContext";


const Button = () => {
  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => (value === "English" ? "Submit" : "Voorleggen")}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;

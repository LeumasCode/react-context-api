import React, { Component } from "react";
import LanguageContext from "./contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "English" ? "Submit" : "Voorleggen";
    return <button className="primary ui button">{text}</button>;
  }
}

export default Button;

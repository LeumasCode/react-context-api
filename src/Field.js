import React, { useContext } from "react";

import LanguageContext from "./contexts/LanguageContext";

const Field = ({ language }) => {
  const context = useContext(LanguageContext);

  const text = context === 'English' ? 'Name' : 'Naam'
  return (
    <div className="ui field">
      <label htmlFor="">{text}</label>
      <input type="text" />
    </div>
  );
};

export default Field;

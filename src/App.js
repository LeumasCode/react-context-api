import React, { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("English");

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <div>
        Select a Language
        <i className="flag us" onClick={() => onLanguageChange("English")}></i>
        <i className="flag nl" onClick={() => onLanguageChange("Dutch")}></i>
      </div>
      {language}
    </div>
  );
};

export default App;

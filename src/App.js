import React, { useState } from "react";
import Layout from "./components/Layout";
import { Main } from "./components/Main";
import ThemeContext from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <Layout>
          <Main />
        </Layout>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

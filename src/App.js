import "./App.css";
/* Global */
import { ThemeProvider } from "styled-components";
/* Components */
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";
/* Styles */
import { GlobalStyle } from "./styles";
/* useState */
import { useState } from "react";
/* Libraries */
import { observer } from "mobx-react";

const theme = {
  light: {
    mainColor: "#24272b",
    backgroundColor: "#ede0d4",
    grey: "#e63946",
  },
  dark: {
    mainColor: "#ede0d4",
    backgroundColor: "#24272b",
    grey: "#e63946",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default observer(App);

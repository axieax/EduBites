import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BiteStore from "./pages/BiteStore";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import "./styles/Global.css";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@material-ui/core";
import MentalMaths from "./activities/MentalMaths";
import BingoBongo from "./activities/BingoBongo";
import ChatOverlay from "./components/ChatOverlay";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.5rem",
      marginBottom: "0.6rem",
    },
    h4: {
      fontSize: "1rem",
      marginBottom: "0.3rem",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/bitestore">
            <BiteStore />
          </Route>
          <Route exact path="/leaderboards">
            Leaderboards
          </Route>
          <Route exact path="/activities/mentalmaths">
            <MentalMaths />
          </Route>
          <Route exact path="/games/bingobongo">
            <BingoBongo />
          </Route>
        </Switch>
        <Footer />
        <ChatOverlay />
      </ThemeProvider>
    </Router>
  );
}

export default App;

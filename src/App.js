import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import theme from "./theme";
import SignIn from "./pages/signin";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/sign-in" element = {<SignIn/>}/>
          <Route path="*" element = {<h1>Page not found 404 :(</h1>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>);
}

export default App;

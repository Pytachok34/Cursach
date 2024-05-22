import React from "react";
import './styles/App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";

function App() {
  return(
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  )
}

export default App;
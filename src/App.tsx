import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import CharacterListComponent from "./components/CharacterList.tsx";
import CharacterDetail from "./components/CharacterDetail.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={CharacterListComponent} />
        <Route path="/character/:id" Component={CharacterDetail} />
      </Routes>
    </>
  );
};

export default App;

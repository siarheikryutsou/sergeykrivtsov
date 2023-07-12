import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "../widgets/header/Header";
import Router from "./Router";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <main>
            <Router />
          </main>

      </BrowserRouter>
    </>
  );
}

export default App;

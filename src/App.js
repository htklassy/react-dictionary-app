import React from "react";
import Dictionary from "./Dictionary.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="AppHeader"></header>
        <main>
          <Dictionary defaultKeyword="destiny"/>
        </main>
        <div className="fixed-bottom">
          <footer className="text-center AppFooter">
          <small>
            This project was coded by Lynn Klassy and is <a href="https://github.com/htklassy/react-dictionary-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
          </small>
        </footer>
        </div>
      </div>
    </div>
  );
}


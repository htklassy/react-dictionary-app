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
          <Dictionary defaultKeyword="hello"/>
        </main>
        <div className="fixed-bottom">
          <footer className="text-center AppFooter">
          <small>
            Coded by Lynn Klassy.
          </small>
        </footer>
        </div>
      </div>
    </div>
  );
}


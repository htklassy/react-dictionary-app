import React from "react";
import Dictionary from "./Dictionary.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-Header"></header>
        <main>
          <Dictionary />
        </main>
        <div className="fixed-bottom">
          <footer className="text-center App-footer">
          <small>
            Coded by Lynn Klassy.
          </small>
        </footer>
        </div>
      </div>
    </div>
  );
}


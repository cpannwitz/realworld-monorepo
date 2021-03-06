import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { sum } from "@monotest/shared";

const App: React.FC = () => {
  const result = sum(3, 12);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logoooooooooo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>There are some magic moments ahead.</p>
        <p>I'm sure.</p>
        <p>Are you?.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {result}
        </a>
      </header>
    </div>
  );
};

export default App;

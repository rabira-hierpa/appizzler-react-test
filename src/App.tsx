import React from "react";
import "./App.css";
import { SideBar } from "./components/sidebar/sidebar";
import { Lesson } from "./components/lesson/lesson";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Lesson textAreaPlaceholder="What will you cover in the lessons? What should students expect?" />
    </div>
  );
}

export default App;

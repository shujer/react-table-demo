import React from "react";
import "./App.css";
import BaseTable from "./BaseTable/TableTest";
import GridTable from "./GridTable/TableTest";
import ResizeTable from "./ResizableColumn/TableTest";

function App() {
  return (
    <div className="App">
      <BaseTable />
      <br />
      <GridTable />
      <br />
      <ResizeTable />
    </div>
  );
}

export default App;

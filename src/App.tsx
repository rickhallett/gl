import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from "./Layout";
import { Table } from "./Table";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import { Algorithm } from "./Algorithm";
import { Grid } from "./Grid";

import "./app.css";

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Codility: Revisited</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="table" element={<Table />} />
          <Route path="algorithm" element={<Algorithm />} />
          <Route path="grid" element={<Grid />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

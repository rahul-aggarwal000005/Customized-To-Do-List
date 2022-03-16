import "./App.css";
import Create from "./components/Create.js";
import Notes from "./components/Notes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

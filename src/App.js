import "./App.css";
import ProjectDetailsForm from "./component/ProjectDetailsForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./component/Results";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/planning" element={<ProjectDetailsForm />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

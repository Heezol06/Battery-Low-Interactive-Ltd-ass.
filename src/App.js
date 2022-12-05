import "./App.css";
import ProjectDetailsForm from "./component/ProjectDetailsForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/planning" element={<ProjectDetailsForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

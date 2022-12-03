import "./App.css";
import ProjectDetailsForm from "./component/ProjectDetailsForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./component/Results";
import AuthProvider from "./component/Context/AuthProvider";

function App() {
  return (
    <div className="App">
           <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectDetailsForm />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

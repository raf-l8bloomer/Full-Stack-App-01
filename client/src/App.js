import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Courses from './components/Courses';


function App() {
  

  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path="courses/*" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;

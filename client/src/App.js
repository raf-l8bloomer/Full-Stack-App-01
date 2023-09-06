import { Route, Routes } from "react-router-dom";

import Courses from './components/Courses';


function App() {
  

  return (
    <div>
      <Routes>
        <Route path="courses/*" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;

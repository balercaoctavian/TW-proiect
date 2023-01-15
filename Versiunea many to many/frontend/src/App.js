import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import ReactCourse from "./components/ReactCourse";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList/>}/>
          <Route path="/add" element={<AddCourse/>}/>
          <Route path="/edit/:id" element={<EditCourse/>}/>
          <Route path="/react/:id" element={<ReactCourse/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

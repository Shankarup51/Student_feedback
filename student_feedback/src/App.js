import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StudentLoginPage from './Loginpages/StudentloginPage';
import FacultyLoginPage from './Loginpages/FacultyloginPage';
import AdminLoginPage from './Loginpages/AdminloginPage';



function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/studentLoginPage' element={<StudentLoginPage/>}></Route>
      <Route path='/facultyLoginPage' element={<FacultyLoginPage/>}></Route>
      <Route path='/adminLoginPage' element={<AdminLoginPage/>}></Route>


    </Routes>
    </div>
  );
}

export default App;

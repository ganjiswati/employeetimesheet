import "./App.css";
import { Login } from "./pages/LoginPage/Login";
import { Home } from "./pages/Home/Home";
import Leaves from "./LeavesPage/Leaves";
import ApplyLeave from "./LeavesPage/ApplyLeave";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimePage from "./TimePage/TimePage";
import AddNewEmployee from "./pages/AddNewEmployee";
import Attendance from "./pages/Attendance/Attendance"
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/applyleave" element={<ApplyLeave />} />
        <Route path="/timepage" element={<TimePage />} />
        <Route path="/addnewemployee" element={<AddNewEmployee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

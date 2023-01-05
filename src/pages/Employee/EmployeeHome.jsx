import React from 'react'
import ResponsiveAppBar from "../Dashboard/MenuBar"
import SideBar from '../Dashboard/SideBar';

const EmployeeHome = () => {
  return (
    <div>
          <ResponsiveAppBar />
          <div style={{ display: "flex", marginTop: 5 }}>
              <SideBar />
              </div>
    </div>
  );
}

export default EmployeeHome

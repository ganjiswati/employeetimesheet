import React from "react";
import ResponsiveAppBar from "../Dashboard/MenuBar";
import SideBar from "../Dashboard/SideBar";
import AttendanceHeader from "../Dashboard/AttendanceHeader";
import AttendanceTable from "./AttendanceTable";

const Attendance = () => {
  
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ display: "flex", marginTop: 5, margin: 15 }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <AttendanceHeader />
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
};

export default Attendance;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const getCheck = () => {
   // alert("In getChecnk");
    var check = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log("check=>", check);
  };

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        position="static"
        style={{ width: "100%" }}
      >
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div>
            <Typography>Attendance</Typography>
          </div>
          <div style={{ justifyContent: "end", marginLeft: "auto" }}>
            <Button
              variant="outlined"
              type="button"
              className="btn btn-primary "
              style={{ marginRight: 5 }}
              onClick={() => {
                getCheck();
              }}
            >
              Check In
            </Button>
            <Button
              variant="outlined"
              type="button"
              className="btn btn-primary "
              onClick={() => {
                getCheck();
              }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}

import React from "react";
import ResponsiveAppBar from "../pages/Dashboard/MenuBar";
import SideBar from "../pages/Dashboard/SideBar";
import TimeHeader from "../pages/Dashboard/TimeHeader";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import "./TimePage.css";
import TimeTable from "./TimeTable";

const TimePage = () => {
  const [project, setProject] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setProject(event.target.value);
  };
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
          <TimeHeader />
          <Box
            className="asd"
            //width="200px"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              //   marginTop:5,
              //   m: 0,
              borderRadius: 1,
              flexWrap: "nowrap",
            }}
          >
            <div className="project">
              <div className="div-main">
                <TextField
                  id="today"
                  type="date"
                  variant="outlined"
                  classNameName="form-control"
                  size="small"
                />
              </div>
              <div className="div-main">
                <Select
                  value={project}
                  onChange={handleChange}
                  displayEmpty
                  // inputProps={{ "aria-label": "Without label" }}
                  sx={{ width: 170, height: 41 }}
                  classNameName="form-control"
                  size="small"
                >
                  <MenuItem value="">
                    <em>Select Project</em>
                  </MenuItem>
                  <MenuItem value={"church"}>Commack Chruch</MenuItem>
                  <MenuItem value={"amelia"}>Amelia</MenuItem>
                  <MenuItem value={"trika"}>Trika</MenuItem>
                  <MenuItem value={"cv"}>ConceptVines</MenuItem>
                  <MenuItem value={"ahs"}>AHS</MenuItem>
                  <MenuItem value={"insurance"}>Insurance</MenuItem>
                </Select>
              </div>
              <div className="div-main">
                <TextField
                  id="time"
                  type="text"
                  variant="outlined"
                  className="form-control"
                  size="small"
                  placeholder="Enter duration"
                />
              </div>
              <div className="div-main">
                <TextField
                  id="overtime"
                  type="text"
                  variant="outlined"
                  className="form-control"
                  size="small"
                  placeholder="Enter Overtime"
                />
              </div>
              <div className="div-main">
                <TextField
                  id="remark"
                  type="text"
                  variant="outlined"
                  className="form-control"
                  size="small"
                  placeholder="Enter remark"
                />
              </div>
              <div className="div-main">
                <Button
                  variant="outlined"
                  type="button"
                  className="btn btn-primary "
                  onClick={() => {
                    navigate("/timepage");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div>
              <TimeTable />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TimePage;

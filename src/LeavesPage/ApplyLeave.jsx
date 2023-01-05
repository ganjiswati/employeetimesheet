import React from "react";
import ResponsiveAppBar from "../pages/Dashboard/MenuBar";
import SideBar from "../pages/Dashboard/SideBar";
//import Header from "../pages/Dashboard/Header"
import "./Leaves.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import "./ApplyLeave.css";

const ApplyLeave = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ display: "flex", marginTop: 5, margin: 15 }}>
        <SideBar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              classNameName="navbar navbar-expand-lg navbar-dark bg-dark"
              position="static"
              style={{ width: "100%" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <div>
                  <Typography>Apply Leave</Typography>
                </div>
              </div>
            </AppBar>
            <div classNameName="card-property">
              <Card
                style={{
                  backgroundColor: "#839496",
                  width: "100%",
                  height: "full",
                }}
              >
                <CardContent>
                  <Typography variant="h6">Leave</Typography>
                </CardContent>
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Grid item xs={2}>
                    <InputLabel classNameName="labelcss">
                      Employee Name:
                    </InputLabel>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="txt_fname"
                      type="text"
                      variant="outlined"
                      classNameName="form-control"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Grid item xs={2}>
                    <InputLabel classNameName="labelcss">
                      Leave Type:
                    </InputLabel>
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      id="leave-id"
                      // value={age}
                      variant="outlined"
                      classNameName="form-control"
                      size="small"
                      sx={{ width: "full" }}
                      // onChange={handleChange}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={"Causal"}>Causal</MenuItem>
                      <MenuItem value={"Sick"}>Sick</MenuItem>
                      <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Grid item xs={2}>
                    <InputLabel classNameName="labelcss">Date:</InputLabel>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="fromdate"
                      type="date"
                      variant="outlined"
                      classNameName="form-control"
                      size="small"
                      placeholder="From"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="todate"
                      type="date"
                      variant="outlined"
                      classNameName="form-control"
                      size="small"
                      placeholder="To"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Grid item xs={2}>
                    <InputLabel classNameName="labelcss">EmailId:</InputLabel>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="txt_email"
                      type="email"
                      variant="outlined"
                      classNameName="form-control"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Grid item xs={2}>
                    <InputLabel classNameName="labelcss">Reason:</InputLabel>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      multiline="true"
                      classNameName="form-control"
                      sx={{ width: "full" }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Grid item xs={1} sx={{ marginLeft: 2 }}>
                    <Button
                      size="small"
                      variant="outlined "
                      className="btn btn-primary"
                      onClick={() => {
                        navigate("/leaves");
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={2} sx={{ marginLeft: 2 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      className="btn btn-primary"
                      onClick={() => {
                        navigate("/leaves");
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import ResponsiveAppBar from "../pages/Dashboard/MenuBar";
import SideBar from "../pages/Dashboard/SideBar";
import "./Leaves.css";
import Header from "../pages/Dashboard/LeaveHeader";
import BasicTable from "../pages/Dashboard/Table";

const Leaves = () => {
  //const data = ["Vacation", "Sick Leave", "Unpaid Leave"];

  return (
    <div>
      <ResponsiveAppBar />

      <div style={{ display: "flex", marginTop: 5, margin: 15 }}>
        <SideBar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Header />

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
            <div style={{ display: "flex", flexDirection: "Row" }}>
              <Card className="card" style={{ backgroundColor: "#839496" }}>
                <CardContent>
                  <Typography variant="h6">Vacation</Typography>
                  <Typography>Avaliable:-</Typography>
                  <Typography>Booked:- </Typography>
                </CardContent>
              </Card>
              <Card className="card" style={{ backgroundColor: "#839496" }}>
                <CardContent>
                  <Typography variant="h6">Sick Leave</Typography>
                  <Typography>Avaliable:-</Typography>
                  <Typography>Booked:- </Typography>
                </CardContent>
              </Card>
              <Card className="card" style={{ backgroundColor: "#839496" }}>
                <CardContent>
                  <Typography variant="h6">Unpiad Leave</Typography>
                  <Typography>Avaliable:-</Typography>
                  <Typography>Booked:-</Typography>
                </CardContent>
              </Card>
            </div>
            <div
              className="card-holiday"
              style={{ display: "flex", flexDirection: "Row" }}
            >
              <Card style={{ backgroundColor: "#839496", width: "100%" }}>
                <div
                  className="display"
                  style={{ marginRight: " 100", width: "100%" }}
                >
                  <div>
                    <CardContent>
                      <Typography variant="h6">All Leave & Holidays</Typography>
                    </CardContent>
                  </div>
                  <div
                    //   justifyContent="flex-end"
                    style={{ marginLeft: "auto" }}
                  >
                    <CardActions style={{ float: "left" }}>
                      {/* <div sx={{ justifyContent: "flex-end" }}> */}
                      <Button
                        size="small"
                        variant="outlined "
                        className="btn btn-primary"
                      >
                        Upcoming
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        className="btn btn-primary"
                      >
                        History
                      </Button>
                      {/* </div> */}
                    </CardActions>
                  </div>
                </div>
                <Divider style={{ background: "black" }} variant="middle" />
                <BasicTable />
              </Card>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Leaves;

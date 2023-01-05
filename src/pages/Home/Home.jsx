import React from "react";
import ResponsiveAppBar from "../Dashboard/MenuBar";
import SideBar from "../Dashboard/SideBar";
import { Card, CardContent, Typography } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ display: "flex", marginTop: 5 }}>
        <SideBar />
        <div style={{ display: "flex", flexDirection: "Row" }}>
          <Card
            className="cardstyle"
            style={{ backgroundColor: "#839496" }}
          >
            <CardContent>
              <Typography variant="h6">Birthday</Typography>
              <Typography>Today Rupali Birthday</Typography>
              <Typography></Typography>
            </CardContent>
          </Card>
          <Card
            className="cardstyle"
            style={{ backgroundColor: "#839496" }}
          >
            <CardContent>
              <Typography variant="h6">Upcoming Holiday</Typography>
              <Typography>26th January Republic Day</Typography>
              <Typography></Typography>
            </CardContent>
          </Card>
          <Card
            className="cardstyle"
            style={{ backgroundColor: "#839496" }}
            onClick={() => {
              navigate("/leaves");
            }}
          >
            <CardContent>
              <Typography variant="h6">Leave Report</Typography>
              <Typography>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <span>
                    <CircularProgress variant="determinate" value={75} />{" "}
                  </span>
                  &nbsp;
                  <span>Vacation:2</span>
                </p>
              </Typography>
              <Typography>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <span>
                    <CircularProgress variant="determinate" value={90} />{" "}
                  </span>
                  &nbsp;
                  <span>Sick:1</span>
                </p>
              </Typography>
              <Typography>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <span>
                    <CircularProgress variant="determinate" value={50} />{" "}
                  </span>
                  &nbsp;
                  <span>Unpaid:1</span>
                </p>
              </Typography>
              <Typography>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <span>
                    <CircularProgress variant="determinate" value={100} />{" "}
                  </span>
                  &nbsp;
                  <span>Compensation:3</span>
                </p>
              </Typography>
            </CardContent>
          </Card>
          <Card
            className="cardstyle"
            style={{ backgroundColor: "#839496" }}
            onClick={() => navigate("/timepage")}
          >
            <CardContent>
              <Typography variant="h6">Request for Approval </Typography>
              <Typography></Typography>
              <Typography></Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

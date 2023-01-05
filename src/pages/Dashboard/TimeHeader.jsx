import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function Header() {
  const navigate = useNavigate();
  let today = new Date();
  let date =
    today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear();
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      position="static"
      style={{ width: "100%" }}
    >
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div>
          <Typography>Swati Ganji</Typography>
        </div>
        <div style={{ justifyContent: "center", margin: "auto" }}>
          <Typography>{date}</Typography>
        </div>
        <div style={{ justifyContent: "end", marginLeft: "auto" }}>
          <Button
            variant="outlined"
            type="button"
            className="btn btn-primary"
            fdprocessedid="s8s92q"
            onClick={() => {
              navigate("/home");
            }}
          >
            Submit For Approval
          </Button>
        </div>
      </div>
    </AppBar>
    // </Box>
  );
}

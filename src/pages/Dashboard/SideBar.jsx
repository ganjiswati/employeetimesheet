import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
// import SessionContext from "../../Context/SessionData/SessionContext";

const SideBar = () => {
  // const sessionData = useContext(SessionContext);

  // useEffect(() => {
  //   sessionData.setsetSState
  // })
  const navigate = useNavigate();

  // const handleListItemClick = (name: string, uuid: string, order: number) => {
  //   const item = { name: name, uuid: uuid };
  //   sessionData.setSState(item);
  // };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 200,
        minWidth: 260,
        bgcolor: "#002b36",
        height: "500px",
      }}
      className="sidebar"
    >
      <List component="nav" aria-label="application menus">
        {/* {data.map((d) => {
          return (
            <>
              <ListItemButton>
                <ListItemText primary={d} key={d} />
              </ListItemButton>
            </>
          );
        })} */}
        <ListItemButton onClick={() => navigate("/home")}>
          <ListItemText primary={"Home"} key={"Home"} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/leaves")}>
          <ListItemText primary={"Leave Tracker"} key={"Leave Tracker"} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/timepage")}>
          <ListItemText primary={"Time Tracker"} key={"Time Tracker"} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/attendance")}>
          <ListItemText primary={"Attendance"} key={"Attendance"} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemText primary={"Logout"} key={"Logout"} />
        </ListItemButton>
      </List>
      {/* <List component="nav" aria-label="application menus">
        {data.sections.map((currentSection) => {
          return (
            <ListItemButton
              key={currentSection.uuid}
                selected={
                  (props.selectedSection &&
                    props.selectedSection.sectionUuid ===
                      currentSection.sectionUuid) ??
                  false
                }
              onClick={() =>
                handleListItemClick(
                  currentSection.name,
                  currentSection.uuid,
                  currentSection.order
                )
              }
            >
              <ListItemText primary={currentSection.name} />
            </ListItemButton>
            
             
            
          );
        })}
      </List> */}
    </Box>
  );
};

export default SideBar;

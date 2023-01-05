import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./AddNewEmployee.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddNewEmployee = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <InputLabel className="labelcss">FirstName</InputLabel>
          <TextField
            id="txt_fname"
            type="text"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">MiddleName</InputLabel>
          <TextField
            id="txt_mname"
            type="text"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">LastName</InputLabel>
          <TextField
            id="txt_lname"
            type="text"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">Gender</InputLabel>
          <Select
            id="select"
            label="gender"
            value={gender}
            className="select"
            variant="outlined"
            onChange={handleChange}
            style={{ height: 41 }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">Date of Birth</InputLabel>
          <TextField
            id="txt_birthdate"
            type="date"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">Email-ID</InputLabel>
          <TextField
            id="txt_email"
            type="email"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>

        <Grid item xs={5}>
          <InputLabel className="labelcss">Password</InputLabel>
          <TextField
            id="txt_password"
            type="password"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">Hire-Date</InputLabel>
          <TextField
            id="txt_hiredate"
            type="date"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel className="labelcss">End-Date</InputLabel>
          <TextField
            id="txt_enddate"
            type="date"
            variant="outlined"
            className="form-control"
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={2}>
          <Button
            type="button"
            className="btn btn-success"
            fdprocessedid="vh3ttc"
            variant="contained"
          >
            {" "}
            ADD
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            type="button"
            className="btn btn-success"
            fdprocessedid="vh3ttc"
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNewEmployee;

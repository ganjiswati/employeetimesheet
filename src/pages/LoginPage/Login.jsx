import React from "react";
import "./login.css";
import Log from "../../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  InputLabel,
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <Paper
          elevation={5}
          className="paperStyle"
          // sx={{ backgroundColor: " #839496" }}
        >
          <Stack sx={{ textAlign: "center", mb: "15px" }} spacing={1}>
            <div>
              <img src={Log} alt="logo" className="logoImage" />
            </div>
            <Typography variant="h5" color="primary">
              Sign in
            </Typography>
          </Stack>

          <Container>
            <InputLabel sx={{ textAlign: "left" }}>Email</InputLabel>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              name="username"
              type="email"
              required
              //value="user@example.com"
            />
            <InputLabel sx={{ textAlign: "left", mt: "20px" }}>
              Password
            </InputLabel>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Enter your Password"
              fullWidth
              name="password"
              type="password"
              // value="Password"
              required
            />
            <Typography align="right">
              <Link href="#" underline="none" color="primary">
                Forgot password ?
              </Link>
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked color="primary" size="small" />}
              label="Remember Me"
              name="rememberMe"
              sx={{ float: "left", mt: "20px" }}
            />
            <div style={{ marginTop: "5px" }}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className="app-prim-btn"
                fullWidth
                onClick={() => {
                  navigate("/home");
                }}
              >
                Sign in
              </Button>
            </div>
          </Container>
        </Paper>
      </form>
    </div>
  );
};

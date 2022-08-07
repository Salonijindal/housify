import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";

const Login = ({ setUserData }) => {
  const { login } = useAuth();
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email || !password) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      await localStorage.setItem("user", email);
      setUserData(email);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="login">
      <h1 className="login__title">LOGIN</h1>
      {error && <Alert severity="error">{error}</Alert>}
      <form className="login__form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-search"
          label="Email"
          type="login"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" type="submit" disabled={loading}>
          Login
        </Button>
      </form>
      <h3>
        Need an Account? <Link to="/register">Sign Up</Link>
      </h3>
    </Card>
  );
};
export default Login;

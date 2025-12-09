import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginForm_MUI() {
  const nav = useNavigate();
  const account = JSON.parse(localStorage.getItem("authData"));
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {
    if (!account) return alert("No account exists — please sign up first.");

    if (email===account.email && password===account.password) {
      alert("Login Successful!");
      nav("/profile");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <Box sx={{ maxWidth:400, mx:"auto", p:4 }}>
      <h2>Login</h2>

      <TextField label="Email" fullWidth sx={{mb:2}} onChange={e=>setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth sx={{mb:2}} onChange={e=>setPassword(e.target.value)} />

      <Button variant="contained" fullWidth onClick={login}>Login</Button>
      <Button fullWidth sx={{mt:1}} onClick={()=>nav("/signup")}>Create Account</Button>
    </Box>
  );
}

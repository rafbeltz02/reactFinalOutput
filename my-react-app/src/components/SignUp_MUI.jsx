import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp_MUI() {
  const nav = useNavigate();
  const [account, setAccount] = useState({ email: "", password: "" });

  const register = () => {
    localStorage.setItem("authData", JSON.stringify(account));
    alert("Account created successfully!");
    nav("/"); // go to login
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 4 }}>
      <h2>Create Account</h2>

      <TextField label="Email" fullWidth sx={{ mb: 2 }}
        onChange={(e)=> setAccount({...account, email:e.target.value})} />

      <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }}
        onChange={(e)=> setAccount({...account, password:e.target.value})}/>

      <Button variant="contained" fullWidth onClick={register}>Sign Up</Button>
      <Button fullWidth sx={{ mt: 1 }} onClick={()=>nav("/")}>Already have an account?</Button>
    </Box>
  );
}

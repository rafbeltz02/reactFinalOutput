import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp_MUI() {
  const nav = useNavigate();
  const [user, setUser] = useState({
    name: "", about: "", skills: "", interests: "",
    experience: "", education: "", projects: "",
    email: "", password: ""
  });

  const submit = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Account created successfully!");
    nav("/");
  };

  return (
    <Box sx={{maxWidth:500, mx:"auto", p:4}}>
      <h2>Create Account</h2>

      {Object.keys(user).map((key)=>(
        <TextField key={key} label={key.toUpperCase()} fullWidth sx={{mb:2}}
        onChange={e=>setUser({...user,[key]:e.target.value})}/>
      ))}

      <Button variant="contained" fullWidth onClick={submit}>Sign Up</Button>
      <Button fullWidth sx={{mt:1}} onClick={()=>nav("/")}>Already have an account?</Button>
    </Box>
  );
}

import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp_MUI() {
  const nav = useNavigate();
  const [user, setUser] = useState({
    image:"",
    name:"", about:"", skills:"", interests:"",
    experience:"", education:"", projects:"",
    email:"", password:""
  });

  // Convert image to Base64 and store
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setUser({...user, image: reader.result});
    reader.readAsDataURL(file);
  };

  const submit = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Account Created Successfully!");
    nav("/");
  };

  return (
    <Box sx={{maxWidth:500, mx:"auto", p:4}}>
      <h2>Create Account</h2>

      {/* UPLOAD IMAGE */}
      <input type="file" accept="image/*" onChange={handleImageUpload} style={{marginBottom:"15px"}} />

      {Object.keys(user).filter(k=>k!=="image").map((key)=>(
        <TextField key={key} label={key.toUpperCase()} fullWidth sx={{mb:2}}
        onChange={e=>setUser({...user,[key]:e.target.value})} />
      ))}

      <Button variant="contained" fullWidth onClick={submit}>Sign Up</Button>
      <Button fullWidth sx={{mt:1}} onClick={()=>nav("/")}>Already have an account?</Button>
    </Box>
  );
}

import { Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";

export default function SignUp_MUI(){
  return(
    <Card sx={{maxWidth:400, margin:2, p:1}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Sign Up</Typography>

        <TextField fullWidth label="Full Name" margin="normal"/>
        <TextField fullWidth label="Email" margin="normal"/>
        <TextField fullWidth label="Password" type="password" margin="normal"/>

        <Button variant="contained" fullWidth sx={{mt:2}}>Create Account</Button>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";

export default function LoginForm_MUI() {
  return (
    <Card sx={{ maxWidth: 400, margin: 2, p:1 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Login</Typography>

        <Box component="form">
          <TextField fullWidth label="Username" margin="normal" />
          <TextField fullWidth type="password" label="Password" margin="normal" />
          <Button variant="contained" fullWidth sx={{mt:2}}>Login</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

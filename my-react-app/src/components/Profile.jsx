import { Grid, Box, Typography } from "@mui/material";

export default function Profile() {
  const data = JSON.parse(localStorage.getItem("userData"));
  if(!data) return <h2>No Profile Found — Please Sign Up first.</h2>;

  return (
    <Grid container>
      {/* LEFT PANEL */}
      <Grid item xs={12} md={4}>
        <Box sx={{p:4, bgcolor:"#1e3a57", color:"#fff", minHeight:"100vh"}}>
          <Typography variant="h4">{data.name}</Typography><hr/>

          <h3>About</h3><p>{data.about}</p>
          <h3>Skills</h3><ul>{data.skills.split(',').map((x,i)=><li key={i}>{x}</li>)}</ul>
          <h3>Interests</h3><ul>{data.interests.split(',').map((x,i)=><li key={i}>{x}</li>)}</ul>
        </Box>
      </Grid>

      {/* RIGHT PANEL */}
      <Grid item xs={12} md={8}>
        <Box sx={{p:4}}>
          <Typography variant="h3">Professional Profile</Typography><hr/>
          <h3>Experience</h3><p>{data.experience}</p>
          <h3>Education</h3><p>{data.education}</p>
          <h3>Featured Projects</h3><ul>{data.projects.split(',').map((p,i)=><li key={i}>{p}</li>)}</ul>
        </Box>
      </Grid>
    </Grid>
  );
}

import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";

export default function Profile() {

  // 🔥 FIXED DETAILS — MODIFY ANY PART YOU WANT
  const profile = {
    image: "/profile.jpg",
    name: "Janerose",
    about: "A passionate learner focused on improving technical skills and exploring technology.",
    skills: ["React", "HTML", "CSS", "JavaScript", "UI Design"],
    interests: ["Web Development", "UI/UX", "Projects", "Learning"],
    experience: "Created multiple front-end UI layouts and React-based mini systems.",
    education: "BSIT — Cebu Technological University (CTU)",
    projects: ["ExpenSync", "React Portfolio", "Mini Login Authentication App"]
  };

  return (
    <Grid container sx={{ minHeight:"100vh", bgcolor:"#f3f7fb" }}>

      {/* LEFT SIDE */}
      <Grid item xs={12} md={4}>
        <Box sx={{p:4, bgcolor:"#1e3a57", color:"white", textAlign:"center", minHeight:"100vh"}}>
          
          <Avatar src={profile.image} sx={{width:160, height:160, mx:"auto", mb:2, border:"4px solid white"}} />

          <Typography variant="h4" fontWeight={700}>{profile.name}</Typography>
          <Chip icon={<PersonIcon />} label="Personal Profile" sx={{mt:2, bgcolor:"white", color:"#1e3a57"}}/>
          <Divider sx={{my:3, bgcolor:"rgba(255,255,255,.4)"}}/>

          <h3>About</h3><p>{profile.about}</p>

          <h3>Skills</h3>
          {profile.skills.map((s,i)=> <Chip key={i} label={s} sx={{m:.5, bgcolor:"white", color:"#1e3a57"}}/>)}

          <h3 style={{marginTop:15}}>Interests</h3>
          {profile.interests.map((i,x)=> <Chip key={x} label={i} sx={{m:.5, bgcolor:"#13314a", color:"white"}}/>)}
        </Box>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid item xs={12} md={8}>
        <Box sx={{p:5}}>

          <Paper sx={{p:4, mb:4}}>
            <Typography variant="h4" fontWeight={600}><WorkIcon/> Experience</Typography>
            <Divider sx={{my:2}}/> <p>{profile.experience}</p>
          </Paper>

          <Paper sx={{p:4, mb:4}}>
            <Typography variant="h4" fontWeight={600}><SchoolIcon/> Education</Typography>
            <Divider sx={{my:2}}/> <p>{profile.education}</p>
          </Paper>

          <Paper sx={{p:4}}>
            <Typography variant="h4" fontWeight={600}><StarIcon/> Projects</Typography>
            <Divider sx={{my:2}}/>
            <ul>{profile.projects.map((p,i)=> <li key={i}>{p}</li>)}</ul>
          </Paper>

        </Box>
      </Grid>
    </Grid>
  );
}

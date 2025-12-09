import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";

export default function Profile() {

  const profile = {
    image: "/profile.jpg",
    name: "Janerose Beltz",
    title: "BSIT Student",
    about: "A passionate learner focused on web development and UI design.",
    skills: ["React", "JavaScript", "HTML", "CSS", "UI/UX"],
    interests: ["Web Apps", "Frontend", "Modern UI", "Learning New Tech"],
    experience: "Developed UI systems in React, login authentication and profile layouts.",
    education: "BSIT • Cebu Technological University",
    projects: ["ExpenSync", "Portfolio UI", "React Profile App"]
  };

  return (
    <Box sx={{ bgcolor:"#eef2f7", minHeight:"100vh", py:4 }}>

      {/* HEADER */}
      <Box sx={{
        bgcolor:"#1b2a41",
        color:"white",
        textAlign:"center",
        py:3,
        fontSize:"22px",
        fontWeight:"bold",
        mb:4
      }}>
        PERSONAL PROFILE
      </Box>

      {/* MAIN GRID LAYOUT */}
      <Grid container spacing={4} sx={{ px:5 }}>

        {/* LEFT = PROFILE CARD */}
        <Grid item xs={12} md={4}>
          <Paper sx={{
            p:4,
            borderRadius:3,
            textAlign:"center",
            bgcolor:"#fff",
            boxShadow:"0 8px 20px rgba(0,0,0,.08)"
          }}>
            
            <Avatar src={profile.image}
              sx={{
                width:170, height:170,
                mx:"auto", mb:2,
                border:"5px solid #1b2a41"
              }}
            />

            <Typography variant="h5" fontWeight="900" sx={{mt:1}}>
              {profile.name}
            </Typography>
            <Typography sx={{opacity:.7, mb:2}}>{profile.title}</Typography>

            <Divider sx={{my:2}}/>

            <Typography variant="h6" fontWeight="700">About Me</Typography>
            <Typography sx={{fontSize:15, opacity:.8, mb:2}}>
              {profile.about}
            </Typography>

            <Typography variant="h6" fontWeight="700">Skills</Typography>
            <Box sx={{my:1}}>
              {profile.skills.map((s,i)=> <Chip key={i} label={s} sx={{m:.5}}/>)}
            </Box>

            <Typography variant="h6" fontWeight="700" sx={{mt:2}}>Interests</Typography>
            <Box>
              {profile.interests.map((i,x)=> <Chip key={x} label={i} variant="outlined" sx={{m:.5}}/>)}
            </Box>

          </Paper>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={8}>

          <Paper sx={{p:4, mb:3, borderRadius:3}}>
            <Typography variant="h5" fontWeight="700">Experience</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.experience}</Typography>
          </Paper>

          <Paper sx={{p:4, mb:3, borderRadius:3}}>
            <Typography variant="h5" fontWeight="700">Education</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.education}</Typography>
          </Paper>

          <Paper sx={{p:4, borderRadius:3}}>
            <Typography variant="h5" fontWeight="700">Projects</Typography>
            <Divider sx={{my:1}}/>
            <ul style={{fontSize:"16px", lineHeight:"26px"}}>
              {profile.projects.map((p,i)=> <li key={i}>{p}</li>)}
            </ul>
          </Paper>

        </Grid>
      </Grid>
    </Box>
  );
}

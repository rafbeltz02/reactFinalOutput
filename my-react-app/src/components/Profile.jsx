import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";

export default function Profile() {

  const profile = {
    image: "/profiled.jpg",
    name: "Beltran Pestañas",
    title: "BSIT Student",
    about: "A passionate learner focused on web development and UI design.",
    skills: ["React", "JavaScript", "HTML", "CSS", "UI/UX"],
    interests: ["Web Apps", "Frontend", "Modern UI", "Learning New Tech"],
    experience: "Developed UI systems in React, login authentication and profile layouts.",
    education: "BSIT • Cebu Technological University",
    projects: ["ExpenSync", "Portfolio UI", "React Profile App"]
  };

  return (
    <Box sx={{ bgcolor:"#e4ebf5", minHeight:"100vh", py:4 }}>

      {/* HEADER — color only changed */}
      <Box sx={{
        bgcolor:"#0F172A",
        color:"white",
        textAlign:"center",
        py:3,
        fontSize:"22px",
        fontWeight:"bold",
        mb:4
      }}>
        PERSONAL PROFILE
      </Box>

      <Grid container spacing={4} sx={{ px:5 }}>

        {/* LEFT PROFILE CARD — colors only updated */}
        <Grid item xs={12} md={4}>
          <Paper sx={{
            p:4,
            borderRadius:3,
            textAlign:"center",
            bgcolor:"#ffffff",
            border:"2px solid #1E40AF",
            boxShadow:"0 10px 30px rgba(0,0,0,0.10)"
          }}>

            <Avatar src={profile.image}
              sx={{
                width:170, height:170,
                mx:"auto", mb:2,
                border:"5px solid #1E3A8A",   // New blue border
                boxShadow:"0 0 12px rgba(30,58,138,0.45)"
              }}
            />

            <Typography variant="h5" fontWeight="900" sx={{mt:1, color:"#0F172A"}}>
              {profile.name}
            </Typography>
            <Typography sx={{opacity:.7, mb:2}}>{profile.title}</Typography>

            <Divider sx={{my:2}}/>

            <Typography variant="h6" fontWeight="700" color="#1E3A8A">About Me</Typography>
            <Typography sx={{fontSize:15, opacity:.8, mb:2}}>
              {profile.about}
            </Typography>

            <Typography variant="h6" fontWeight="700" color="#1E3A8A">Skills</Typography>
            <Box sx={{my:1}}>
              {profile.skills.map((s,i)=> 
                <Chip key={i} label={s} sx={{m:.5, bgcolor:"#EEF2FF", color:"#1E3A8A"}}/>
              )}
            </Box>

            <Typography variant="h6" fontWeight="700" sx={{mt:2, color:"#1E3A8A"}}>
              Interests
            </Typography>
            <Box>
              {profile.interests.map((i,x)=> 
                <Chip key={x} label={i} variant="outlined" 
                  sx={{m:.5, borderColor:"#1E3A8A", color:"#1E3A8A"}}
                />
              )}
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT SIDE — only color enhanced */}
        <Grid item xs={12} md={8}>

          <Paper sx={{p:4, mb:3, borderRadius:3, borderLeft:"6px solid #1E3A8A"}}>
            <Typography variant="h5" fontWeight="700" color="#0F172A">Experience</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.experience}</Typography>
          </Paper>

          <Paper sx={{p:4, mb:3, borderRadius:3, borderLeft:"6px solid #1E3A8A"}}>
            <Typography variant="h5" fontWeight="700" color="#0F172A">Education</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.education}</Typography>
          </Paper>

          <Paper sx={{p:4, borderRadius:3, borderLeft:"6px solid #1E3A8A"}}>
            <Typography variant="h5" fontWeight="700" color="#0F172A">Projects</Typography>
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

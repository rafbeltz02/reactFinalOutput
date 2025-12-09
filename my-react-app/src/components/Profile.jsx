import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";

export default function Profile() {

  const profile = {
    image: "/profile.jpg",
    name: "Janerose Beltz",
    title: "BSIT Student",
    about: "Aspiring web developer passionate about creating modern, clean UI and frontend systems.",
    skills: ["React", "JavaScript", "HTML", "CSS", "UI Design"],
    interests: ["Frontend Development", "UI/UX", "Projects", "Learning New Tech"],
    experience: "Developed React UIs, login systems, and portfolio profile layouts.",
    education: "BSIT — Cebu Technological University",
    projects: ["ExpenSync", "React Portfolio", "UI Login/Profile System"]
  };

  return (
    <Box sx={{ bgcolor:"#F1F5FB", minHeight:"100vh", py:4 }}>

      {/* HEADER */}
      <Box sx={{
        bgcolor:"#1E3A8A",
        color:"white",
        textAlign:"center",
        py:3,
        fontSize:"22px",
        fontWeight:"bold",
        mb:4,
        letterSpacing:"1px"
      }}>
        PERSONAL PROFILE
      </Box>

      <Grid container spacing={4} sx={{ px:5 }}>

        {/* LEFT PROFILE CARD */}
        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{
            p:4, borderRadius:3,
            textAlign:"center",
            bgcolor:"#fff",
            border:"2px solid #3B82F6",
            boxShadow:"0 8px 25px rgba(0,0,0,.07)"
          }}>

            <Avatar src={profile.image}
              sx={{
                width:170, height:170,
                mx:"auto", mb:2,
                border:"6px solid #3B82F6",
                boxShadow:"0 0 12px rgba(59,130,246,0.4)"
              }}
            />

            <Typography variant="h5" fontWeight="900" color="#0F172A">
              {profile.name}
            </Typography>
            <Typography sx={{opacity:.7, mb:2}}>{profile.title}</Typography>

            <Divider sx={{my:2}}/>

            <Typography variant="h6" fontWeight="700" color="#1E3A8A">
              About Me
            </Typography>
            <Typography sx={{fontSize:15, opacity:.85, mb:2}}>
              {profile.about}
            </Typography>

            <Typography variant="h6" fontWeight="700" color="#1E3A8A">
              Skills
            </Typography>
            <Box sx={{my:1}}>
              {profile.skills.map((s,i)=> <Chip key={i} label={s} sx={{m:.5, bgcolor:"#EFF6FF"}}/>)}
            </Box>

            <Typography variant="h6" fontWeight="700" color="#1E3A8A" sx={{mt:2}}>
              Interests
            </Typography>
            <Box>
              {profile.interests.map((i,x)=> <Chip key={x} label={i} variant="outlined" sx={{m:.5}}/>)}
            </Box>

          </Paper>
        </Grid>

        {/* RIGHT CONTENT CARDS */}
        <Grid item xs={12} md={8}>

          <Paper sx={{p:4, mb:3, borderRadius:3, bgcolor:"#fff", borderLeft:"5px solid #1E3A8A"}}>
            <Typography variant="h5" fontWeight="700">Experience</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.experience}</Typography>
          </Paper>

          <Paper sx={{p:4, mb:3, borderRadius:3, bgcolor:"#fff", borderLeft:"5px solid #1E3A8A"}}>
            <Typography variant="h5" fontWeight="700">Education</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.education}</Typography>
          </Paper>

          <Paper sx={{p:4, borderRadius:3, bgcolor:"#fff", borderLeft:"5px solid #1E3A8A"}}>
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

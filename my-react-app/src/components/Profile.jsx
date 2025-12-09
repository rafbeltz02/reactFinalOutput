import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";

export default function Profile() {

  const profile = {
    image: "/profile.jpg",
    name: "Janerose Beltz",
    title: "BSIT Student",
    about: "A passionate learner focused on web development, UI design, and hands-on project building.",
    skills: ["React", "JavaScript", "HTML", "CSS", "UI/UX"],
    interests: ["Web Apps", "Frontend", "Modern UI", "Learning New Tech"],
    experience: "Developed multiple basic UI systems with React and Material UI. Experienced in login authentication and responsive UI design.",
    education: "BS Information Technology · Cebu Technological University",
    projects: ["ExpenSync App", "React Portfolio Website", "UI Login/Profile System"]
  };

  return (
    <Box sx={{ bgcolor:"#f3f5f9", minHeight:"100vh", py:4 }}>

      {/* ==== HEADER SIMPLE AND CLEAN ==== */}
      <Box sx={{
        bgcolor:"#203354", color:"white",
        textAlign:"center", py:3, mb:4,
        fontSize:"20px", fontWeight:700
      }}>
        Personal Profile
      </Box>

      {/* ==== MAIN LAYOUT (LEFT + RIGHT) ==== */}
      <Grid container spacing={4} sx={{ px:5 }}>

        {/* ================= LEFT PROFILE CARD ================= */}
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{
            p:4, borderRadius:4, textAlign:"center",
            bgcolor:"#ffffff", boxShadow:"0 6px 20px rgba(0,0,0,.08)"
          }}>

            {/* Profile Image */}
            <Avatar
              src={profile.image}
              sx={{
                width:170, height:170, mx:"auto",
                mb:2, border:"5px solid #203354",
                boxShadow:"0 0 10px rgba(0,0,0,.2)"
              }}
            />

            {/* Name + Title */}
            <Typography variant="h5" fontWeight={800}>{profile.name}</Typography>
            <Typography sx={{opacity:.6, mb:2}}>{profile.title}</Typography>

            <Divider sx={{my:2}}/>

            {/* ABOUT */}
            <Typography variant="h6" fontWeight={700}>About Me</Typography>
            <Typography sx={{fontSize:15, opacity:.8, mb:2}}>{profile.about}</Typography>

            {/* SKILLS */}
            <Typography variant="h6" fontWeight={700} sx={{mt:2}}>Skills</Typography>
            {profile.skills.map((s,i)=><Chip key={i} label={s} sx={{m:.4}}/>)}

            {/* INTERESTS */}
            <Typography variant="h6" fontWeight={700} sx={{mt:2}}>Interests</Typography>
            {profile.interests.map((i,x)=>
              <Chip key={x} label={i} variant="outlined" sx={{m:.4}}/>
            )}
          </Paper>
        </Grid>

        {/* ================= RIGHT DETAILS CARDS ================= */}
        <Grid item xs={12} md={8}>

          {/* EXPERIENCE */}
          <Paper elevation={3} sx={{
            p:4, borderRadius:4, mb:3, bgcolor:"#ffffff",
            boxShadow:"0 4px 14px rgba(0,0,0,.06)"
          }}>
            <Typography variant="h5" fontWeight={700}>Experience</Typography>
            <Divider sx={{my:1}}/>
            <Typography sx={{fontSize:16}}>{profile.experience}</Typography>
          </Paper>

          {/* EDUCATION */}
          <Paper elevation={3} sx={{
            p:4, borderRadius:4, mb:3, bgcolor:"#ffffff",
            boxShadow:"0 4px 14px rgba(0,0,0,.06)"
          }}>
            <Typography variant="h5" fontWeight={700}>Education</Typography>
            <Divider sx={{my:1}}/>
            <Typography sx={{fontSize:16}}>{profile.education}</Typography>
          </Paper>

          {/* PROJECTS */}
          <Paper elevation={3} sx={{
            p:4, borderRadius:4, bgcolor:"#ffffff",
            boxShadow:"0 4px 14px rgba(0,0,0,.06)"
          }}>
            <Typography variant="h5" fontWeight={700}>Projects</Typography>
            <Divider sx={{my:1}}/>
            <ul style={{fontSize:"16px", lineHeight:"26px", marginLeft:"18px"}}>
              {profile.projects.map((p,i)=><li key={i}>{p}</li>)}
            </ul>
          </Paper>

        </Grid>

      </Grid>
    </Box>
  );
}

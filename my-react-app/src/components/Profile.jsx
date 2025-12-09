import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";

export default function Profile() {

  // STATIC DETAILS – Editable anytime
  const profile = {
    image: "/profile.jpg",   // place image inside public folder
    name: "Janerose Beltz",
    title: "BSIT Student",
    about: "Dedicated and curious learner with a growing passion for web development and modern UI design.",
    skills: ["React", "JavaScript", "HTML", "CSS", "UI/UX Design"],
    interests: ["Web Development", "Projects", "Problem Solving"],
    experience: "Developed basic web applications and UI using React and Material UI.",
    education: "Cebu Technological University - BS Information Technology",
    projects: ["ExpenSync", "React Profile System", "Mini UI Portfolio"]
  };

  return (
    <Box sx={{ bgcolor:"#f5f7fa", minHeight:"100vh" }}>

      {/* HEADER SECTION - clean, separate, soft color */}
      <Box sx={{
        bgcolor:"#1b2a41",
        color:"white",
        textAlign:"center",
        py:4,
        boxShadow:"0 4px 10px rgba(0,0,0,.2)"
      }}>
        <Typography variant="h3" fontWeight={700}>{profile.name}</Typography>
        <Typography sx={{opacity:0.8}}>{profile.title}</Typography>
      </Box>

      <Grid container spacing={3} sx={{ px:5, py:4 }}>

        {/* LEFT PANEL – photo & basic info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p:4, textAlign:"center", borderRadius:3 }}>

            {/* Profile Image */}
            <Avatar 
              src={profile.image}
              sx={{
                width:150, height:150,
                mx:"auto", mb:2,
                border:"4px solid #1b2a41"
              }}
            />

            <Typography variant="h5" fontWeight={700} sx={{mb:1}}>About Me</Typography>
            <Typography sx={{fontSize:"15px", opacity:.9, mb:3}}>{profile.about}</Typography>
            <Divider sx={{my:2}}/>

            {/* Skills */}
            <Typography variant="h6" fontWeight={700}>Skills</Typography>
            <Box sx={{mt:1}}>
              {profile.skills.map((s,i)=>(
                <Chip key={i} label={s} sx={{m:.5}}/>
              ))}
            </Box>

            {/* Interests */}
            <Typography variant="h6" fontWeight={700} sx={{mt:3}}>Interests</Typography>
            <Box sx={{mt:1}}>
              {profile.interests.map((i,x)=>(
                <Chip key={x} label={i} variant="outlined" sx={{m:.5}}/>
              ))}
            </Box>

          </Paper>
        </Grid>

        {/* RIGHT PANEL – experience, education, projects */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{p:4, borderRadius:3, mb:3}}>
            <Typography variant="h5" fontWeight={700}>Experience</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.experience}</Typography>
          </Paper>

          <Paper elevation={3} sx={{p:4, borderRadius:3, mb:3}}>
            <Typography variant="h5" fontWeight={700}>Education</Typography>
            <Divider sx={{my:1}}/>
            <Typography>{profile.education}</Typography>
          </Paper>

          <Paper elevation={3} sx={{p:4, borderRadius:3}}>
            <Typography variant="h5" fontWeight={700}>Projects</Typography>
            <Divider sx={{my:1}}/>
            <ul>
              {profile.projects.map((p,i)=> <li key={i}>{p}</li>)}
            </ul>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

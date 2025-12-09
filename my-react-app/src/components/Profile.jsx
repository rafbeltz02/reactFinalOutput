import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";

export default function Profile() {

  // FIXED PROFILE DETAILS (Can edit anytime)
  const profile = {
    image: "/profile.jpg", // <-- image must be in public folder
    name: "Janerose Beltz",
    about: "A passionate BSIT student focused on building frontend applications using React.",
    skills: ["React", "CSS", "JavaScript", "UI Design"],
    interests: ["Web Development", "UI/UX", "Technology", "Programming"],
    experience: "Developed several UI projects and involved in creating responsive web layouts.",
    education: "Bachelor of Science in Information Technology (BSIT) — CTU",
    projects: ["ExpenSync", "Portfolio Website", "React Profile App"]
  };

  return (
    <Grid container sx={{ minHeight:"100vh", bgcolor:"#e9eef6" }}>

      {/* ----------- HEADER SECTION (DIFFERENT COLOR) ----------- */}
      <Grid item xs={12}>
        <Box sx={{
          background:"#152f49",            // <<< HEADER COLOR
          color:"white",
          textAlign:"center",
          py:4,
          borderBottom:"5px solid #0d1f30"
        }}>
          <Typography variant="h3" fontWeight={800}>{profile.name}</Typography>
          <Typography variant="subtitle1" sx={{opacity:.8}}>Personal Portfolio</Typography>
        </Box>
      </Grid>

      {/* ----------- LEFT SIDE PROFILE PANEL ----------- */}
      <Grid item xs={12} md={4}>
        <Box sx={{
          p:4,
          textAlign:"center",
          bgcolor:"#1d3a5c",              // <<< DIFFERENT COLOR
          color:"white",
          minHeight:"100vh"
        }}>

          {/* Profile Photo */}
          <Avatar 
            src={profile.image}
            sx={{
              width:170, height:170,
              mx:"auto", mb:3,
              border:"4px solid white",
              boxShadow:"0 0 20px rgba(255,255,255,.4)"
            }}
          />

          <Typography variant="h5" fontWeight={700}><InfoIcon sx={{mr:1}}/> About Me</Typography>
          <Typography sx={{opacity:.9, mb:3}}>{profile.about}</Typography>

          <Divider sx={{my:3, bgcolor:"rgba(255,255,255,.4)" }}/>

          {/* Skills */}
          <Typography variant="h6" fontWeight={600}>Skills</Typography>
          <Box sx={{mt:1}}>
            {profile.skills.map((s,i)=>
              <Chip key={i} label={s} sx={{m:.5, bgcolor:"white", color:"#1d3a5c", fontWeight:600}}/>
            )}
          </Box>

          {/* Interests */}
          <Typography variant="h6" fontWeight={600} sx={{mt:3}}>Interests</Typography>
          <Box sx={{mt:1}}>
            {profile.interests.map((i,x)=>
              <Chip key={x} label={i} sx={{m:.5, bgcolor:"#102538", color:"white"}}/>
            )}
          </Box>

        </Box>
      </Grid>

      {/* ----------- RIGHT SIDE DETAILS SECTION ----------- */}
      <Grid item xs={12} md={8}>
        <Box sx={{p:5}}>

          {/* Experience */}
          <Paper sx={{p:4, mb:4, borderRadius:3}}>
            <Typography variant="h4" fontWeight={700}><WorkIcon/> Experience</Typography>
            <Divider sx={{my:2}}/>
            <Typography sx={{fontSize:"18px"}}>{profile.experience}</Typography>
          </Paper>

          {/* Education */}
          <Paper sx={{p:4, mb:4, borderRadius:3}}>
            <Typography variant="h4" fontWeight={700}><SchoolIcon/> Education</Typography>
            <Divider sx={{my:2}}/>
            <Typography sx={{fontSize:"18px"}}>{profile.education}</Typography>
          </Paper>

          {/* Projects */}
          <Paper sx={{p:4, borderRadius:3}}>
            <Typography variant="h4" fontWeight={700}><StarIcon/> Featured Projects</Typography>
            <Divider sx={{my:2}}/>
            <ul style={{fontSize:"18px"}}>
              {profile.projects.map((p,i)=> <li key={i}>{p}</li>)}
            </ul>
          </Paper>

        </Box>
      </Grid>

    </Grid>
  );
}

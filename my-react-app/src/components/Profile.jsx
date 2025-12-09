import { Grid, Box, Typography, Avatar, Paper, Divider, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";

export default function Profile() {
  const data = JSON.parse(localStorage.getItem("userData"));
  if (!data) return <h2>No Profile Found — Please Sign Up first.</h2>;

  return (
    <Grid container sx={{ minHeight: "100vh", bgcolor: "#f3f7fb" }}>

      {/* LEFT PANEL / SIDEBAR */}
      <Grid item xs={12} md={4}>
        <Box sx={{
          p: 4,
          bgcolor: "#1e3a57",
          color: "white",
          minHeight: "100vh",
          textAlign: "center",
          boxShadow: "4px 0 20px rgba(0,0,0,.2)"
        }}>
          
          {/* Profile Image */}
          <Avatar 
            src={data.image}
            sx={{
              width: 160,
              height: 160,
              border: "4px solid white",
              mb: 2,
              mx: "auto",
              boxShadow: "0 0 20px rgba(255,255,255,.4)"
            }}
          />

          <Typography variant="h4" fontWeight={700}>
            {data.name}
          </Typography>

          <Chip 
            icon={<PersonIcon />} 
            label="Personal Portfolio"
            sx={{ mt: 2, bgcolor:"white", color:"#1e3a57", fontWeight:600 }}
          />

          <Divider sx={{ my: 4, bgcolor:"rgba(255,255,255,.5)" }}/>

          <Typography variant="h6" fontWeight={600}>About</Typography>
          <Typography sx={{opacity:.9, mb:3}}>{data.about}</Typography>

          <Typography variant="h6" fontWeight={600}>Skills</Typography>
          <Box>
            {data.skills.split(",").map((skill,i)=>(
              <Chip key={i} label={skill.trim()} sx={{m:.5, bgcolor:"white", color:"#1e3a57", fontWeight:600}}/>
            ))}
          </Box>

          <Typography variant="h6" fontWeight={600} sx={{mt:3}}>Interests</Typography>
          <Box>
            {data.interests.split(",").map((intr,i)=>(
              <Chip key={i} label={intr.trim()} sx={{m:.5, bgcolor:"#13314a", color:"white"}}/>
            ))}
          </Box>

        </Box>
      </Grid>

      {/* RIGHT CONTENT SECTION */}
      <Grid item xs={12} md={8}>
        <Box sx={{ p:5 }}>

          {/* EXPERIENCE CARD */}
          <Paper sx={{ p:4, mb:4, borderRadius:3 }}>
            <Typography variant="h4" fontWeight={700} sx={{display:"flex",alignItems:"center",gap:1}}>
              <WorkIcon/> Work Experience
            </Typography>
            <Divider sx={{my:2}}/>
            <Typography sx={{fontSize:"18px", lineHeight:"28px"}}>{data.experience}</Typography>
          </Paper>

          {/* EDUCATION CARD */}
          <Paper sx={{ p:4, mb:4, borderRadius:3 }}>
            <Typography variant="h4" fontWeight={700} sx={{display:"flex",alignItems:"center",gap:1}}>
              <SchoolIcon/> Education
            </Typography>
            <Divider sx={{my:2}}/>
            <Typography sx={{fontSize:"18px", lineHeight:"28px"}}>{data.education}</Typography>
          </Paper>

          {/* PROJECT CARD */}
          <Paper sx={{ p:4, borderRadius:3 }}>
            <Typography variant="h4" fontWeight={700} sx={{display:"flex",alignItems:"center",gap:1}}>
              <StarIcon/> Featured Projects
            </Typography>
            <Divider sx={{my:2}}/>
            <ul style={{fontSize:"18px"}}>
              {data.projects.split(",").map((p,i)=> <li key={i}>{p.trim()}</li>)}
            </ul>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

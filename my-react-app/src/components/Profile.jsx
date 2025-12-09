<Box sx={{ bgcolor:"#e9eef6", minHeight:"100vh", py:4 }}>

  {/* HEADER — color only changed */}
  <Box sx={{
    bgcolor:"#1D3557",
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

    {/* LEFT PROFILE CARD — color only updated */}
    <Grid item xs={12} md={4}>
      <Paper sx={{
        p:4,
        borderRadius:3,
        textAlign:"center",
        bgcolor:"#ffffff",
        border:"2px solid #457B9D",
        boxShadow:"0 8px 25px rgba(0,0,0,.08)"
      }}>

        <Avatar src="/profile.jpg"
          sx={{
            width:170, height:170,
            mx:"auto", mb:2,
            border:"6px solid #1D3557"
          }}
        />

        <Typography variant="h5" fontWeight="900" color="#1D3557">
          Janerose Beltz
        </Typography>
        <Typography sx={{opacity:.7, mb:2}}>BSIT Student</Typography>

        <Divider sx={{my:2}}/>

        <Typography variant="h6" fontWeight="700" color="#1D3557">About Me</Typography>
        <Typography sx={{fontSize:15, opacity:.85, mb:2}}>
          Aspiring frontend developer passionate in UI design.
        </Typography>

        <Typography variant="h6" fontWeight="700" color="#1D3557">Skills</Typography>
        <Box>
          <Chip label="React" sx={{m:.5}}/>
          <Chip label="JavaScript" sx={{m:.5}}/>
          <Chip label="HTML" sx={{m:.5}}/>
          <Chip label="CSS" sx={{m:.5}}/>
        </Box>

        <Typography variant="h6" fontWeight="700" color="#1D3557" sx={{mt:2}}>
          Interests
        </Typography>
        <Box>
          <Chip label="Web Dev" sx={{m:.5}}/>
          <Chip label="UI/UX" sx={{m:.5}}/>
          <Chip label="Projects" sx={{m:.5}}/>
        </Box>
      </Paper>
    </Grid>


    {/* RIGHT SECTION — colors updated only*/}
    <Grid item xs={12} md={8}>

      <Paper sx={{p:4, mb:3, borderRadius:3, borderLeft:"6px solid #1D3557"}}>
        <Typography variant="h5" fontWeight="700">Experience</Typography>
        <Divider sx={{my:1}}/>
        <Typography>
          Developed UI systems using React and Material UI.
        </Typography>
      </Paper>

      <Paper sx={{p:4, mb:3, borderRadius:3, borderLeft:"6px solid #1D3557"}}>
        <Typography variant="h5" fontWeight="700">Education</Typography>
        <Divider sx={{my:1}}/>
        <Typography>BSIT — Cebu Technological University</Typography>
      </Paper>

      <Paper sx={{p:4, borderRadius:3, borderLeft:"6px solid #1D3557"}}>
        <Typography variant="h5" fontWeight="700">Projects</Typography>
        <Divider sx={{my:1}}/>
        <ul style={{fontSize:"16px", lineHeight:"26px"}}>
          <li>ExpenSync</li>
          <li>React Portfolio</li>
          <li>Profile UI System</li>
        </ul>
      </Paper>

    </Grid>
  </Grid>
</Box>

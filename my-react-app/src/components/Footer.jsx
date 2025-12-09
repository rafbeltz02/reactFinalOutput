export default function Footer(){
  const year = new Date().getFullYear();
  
  return(
    <footer style={{padding:15, textAlign:"center", marginTop:30}}>
      Created by YOUR NAME • {year}
    </footer>
  );
}

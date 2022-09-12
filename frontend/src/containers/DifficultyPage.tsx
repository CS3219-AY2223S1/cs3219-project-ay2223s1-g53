import Mycard from "../components/Mycard";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from "styled-components";


// const CardContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #1f2229;
// `;

const Separator = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function DifficultyPage() {
    
  return (

    <Container>
      
    <Container sx={{pt: 5, pb: 5 }}>
      <Typography
        variant="h2"
        align="center"
      >
        Difficulty Levels
      </Typography>
    </Container>



    <Container>
      <Grid container spacing={4}>
          <Grid
            item
            sm={5}
            md={4}
            xs={12}
            >
          <Mycard title={"Easy"} body={"Warm up Questions"} buttontext={"choose me"}/>
          </Grid>
          <Grid
            item
            sm={5}
            md={4}
            direction="column">
          <Mycard title={"Medium"} body={"Standard Questions"} buttontext={"choose me"}/>
          </Grid>
          <Grid
            item
            sm={5}
            md={4}
            direction="column">
          <Mycard title={"Hard"} body={"Tricky Questions"} buttontext={"choose me"}/>
          </Grid>
      </Grid>
    </Container>
    </Container>
  );
}

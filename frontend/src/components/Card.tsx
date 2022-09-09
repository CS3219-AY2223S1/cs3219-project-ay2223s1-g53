import { Button, CardContent, CardActions, Typography, makeStyles} from '@mui/material';
import * as React from 'react';


export default function Card(title,body) {
  return(
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          `${title}`
        </Typography>
        <Typography variant="h5" component="div">
          `${body}`
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          Learn More
          </Button>
      </CardActions>
    </React.Fragment>
    );
};



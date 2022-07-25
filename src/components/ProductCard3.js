import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Card, Button, Badge} from 'react-bootstrap';
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProductCard({productProp}) {

	const { name, description, price, _id, imgUrl, isActive } = productProp;

	const imageStyles = { minWidth: 100, minHeight: 100 };



return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={4}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <img src={imgUrl} className="prod-img" styles={imageStyles}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs align="center" justify="center" alignItems="center">
              <Typography gutterBottom variant="subtitle1" component="div">
                <h4 className="item-price"> {name}</h4>
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                
            
            	
              </Typography>
            </Grid>
            <Grid item align="center" justify="center" alignItems="center">
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button variant="primary" as={Link} to={`/api/products/${_id}`}>Details</Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
          <Typography>
          	<span>{ '    ' }</span>
          	</Typography>
          </Grid>
          <Grid item align="center" justify="center" alignItems="center">
            <Typography variant="subtitle1" component="div">
              <h4 className="item-price"> Price: <br/><br/> {formatCurrency(price)}</h4>
              <Badge className="badge-stock" bg = "light" text = "dark" > {isActive ? 'In Stock' : 'Out of Stock'} </Badge>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

  );

	
 

    


}




  












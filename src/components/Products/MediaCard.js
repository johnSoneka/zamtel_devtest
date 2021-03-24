import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom'
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,Typography, Grid} from '@material-ui/core';
import CurrencyConverter from '../CurrencyConverter';

const useStyles = makeStyles({
  root: {
    minWidth: 165,
    borderRadius : 15,
    marginBottom: 5
  },
  styleCard:{
    margin: 20,
    padding: 20
  },
  mediaContent:{
    height: '250px',
    width: '95%',
    padding: '2.5%'
  },
  media: {
    height: '250px',
    width: '100%'
  },
CardContent:{
  background: '#ffff'
},
button:{
  background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  margin: '-90px 10px 0px 80px',
  color: '#ffffff'
}
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {products} = props
  return (
    products.map(product => (        
      <Grid item xs={12} sm={6} md={4} key={product.id}>       
        <Card className={classes.styleCard}>
          <Link to={`/products/${product.id}`}>
            <div  className={classes.mediaContent}>
            <CardMedia
              className={classes.media}
              image={product.image}
              title={product.title}
            />
            <CardActions>
            <Link to={`/products/${product.id}`}>
              <Button className={classes.button} size="large" color="secondary">
                View Detail
              </Button>
            </Link>
          </CardActions>
            </div>
            
              
          </Link>  
          <CardContent>
            <Typography gutterBottom variant="h4" component="h1">
              <CurrencyConverter price={product.price}/>
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
              {product.title}
            </Typography>
              
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
          
        </Card>    
      </Grid>      
      )) 
    );
  }
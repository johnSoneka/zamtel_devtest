import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button } from '@material-ui/core';
import MediaCard from '../components/Products/MediaCard';
import banner from '../assets/banner.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    banner:{
      background: 'linear-gradient(95deg, #f5af71 30%, #FF7d53 90%)',
      marginBottom: '40px'
    },
    image:{
    
      paddingLeft: 90,
      paddingRight: 190,
      alignItems: 'center',
    },
    bannerText:{
      paddingLeft: 40,
      paddingTop: 50
    },
button:{
  color: '#ffffff',
  marginTop: 10,
  background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  
}
  }));
function Home (){
  const classes = useStyles()
  const url = 'https://apps.zamtel.co.zm/technical/products'  
  const [products, setProduct] = useState([])
    useEffect (() => {
     axios.get(url)
    .then(({ data: products }) => {
     setProduct(products)
      } ) 
    }, [url])
    
  return(
    <span className={classes.root}>
      <Grid container className={classes.banner}>
        <Grid item sm={1}></Grid>
        <Grid item xs={12} sm={4} className={classes.bannerText} >
            <h1>
            Enjoy your shopping at ZamShop</h1>
            <Button className={classes.button} size="large" color="secondary">
               <a href='https://www.figma.com/file/ueFGTGtjkT2a6syfiiqu0J/Zamtel-test?node-id=4%3A538'>View The Design in Figma</a> 
              </Button>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.image}>
          <img 
          width={'500px'}
          alt={'banner'}
          src={banner}
          />
          </Grid>
          <Grid item sm={2}></Grid>
      </Grid>
      <Grid container>
        <Grid item sm={1}></Grid>
        <Grid item xs={10}>
          <h2>Products in stock</h2>
        </Grid>
      </Grid>
      <Grid container>
      
        <Grid item sm={1}></Grid>
        <Grid container item sm={10} md={10}>
          <MediaCard products ={products} /></Grid>
        <Grid item sm={1}></Grid>
      </Grid>
    </span>  
  )
}
export default Home
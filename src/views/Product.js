import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Grid} from '@material-ui/core';
import CurrencyConverter from '../components/CurrencyConverter';
import MediaCard from '../components/Products/MediaCard';



function Product (){
    const useStyles = makeStyles({
        root: {
         background: '#f4f4f4',
          border: 0,
          borderRadius: 3,
          padding: '50px',
        },
        leftImage:{
            borderRadius: 5,
            maxWidth: '350px'
        },
        content:{
            padding: '70px 0'
        }

      });
      const classes = useStyles();
      const { id } = useParams()
      const url = `https://apps.zamtel.co.zm/technical/products/${id}`
    
         const [products, setProduct] = useState([])
         useEffect (() => {
             axios.get(url)
             .then(({ data: products }) => {
                setProduct(products[id -1])
               } ) 
          }, [url])
      return (
        <div className={classes.root}>
            <Grid container>
            <Grid item sm={1} md={2}></Grid>
                <Grid item sm={12} md={4}>
                    <img
                        alt={products.title}
                        className={classes.leftImage}
                        src={products.image}
                        title={products.title}
                    />
                </Grid>
                <Grid item sm={12} md={6}
                    className={classes.content}>
                    <h2>Price</h2>
                    <h1><CurrencyConverter price={products.price}/></h1>
                    <h3> {products.title}</h3>
                    <p> {products.description}</p>
                </Grid>
                <Grid item sm={1} md={2}></Grid>
            </Grid>
        </div>
           
          )
      }
export default Product;

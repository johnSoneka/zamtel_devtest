import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

function footer (){
    const header = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 58,
          padding: '0 30px',
        },
        Link:{
            textDecoration: 'none',
            color: 'white'
        }
      });
    const classes = header();

    return(
        <header className={classes.root}>
            <div>
                <a href='https://www.figma.com/file/ueFGTGtjkT2a6syfiiqu0J/Zamtel-test?node-id=4%3A538'>
                    <p>View the Design</p>
                </a>
                
            </div>
        </header>
    )
}
export default footer;
import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

function Header (){
    const header = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 58,
          padding: '0 30px',
        },
        logo: {
            marginLeft: '100px',
            color: 'white'
        }
      });
    const classes = header();

    return(
        <header className={classes.root}>
            <div className={classes.logo}>
                <Link to='/'>
                    <h1>ZAMSHOP</h1>
                </Link>
                
            </div>
        </header>
    )
}
export default Header;
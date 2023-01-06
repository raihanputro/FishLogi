import React from "react";
import useStyles from './styles';
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa"
import FishLogi_Logo from '../../images/logo1.png';
import adminFishLogi_Logo from '../../images/logoAdmin.png'; 
  
const Footer = () => {

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const admin = user?.result?.isAdmin === 'admin';

  return (
    <AppBar className={classes.appBar}>
      <div className={classes.brandContainer}>  
        <Typography component={Link} to="/fishes" variant="h2">
          <img className={classes.image} src={admin ? adminFishLogi_Logo : FishLogi_Logo}  alt="Logo FishLogi" />
        </Typography>
        <Typography variant="body1" style={{color: 'black', width: '30%', textAlign: 'justify'}}>Website that helps you find information about fish such as fish descriptions, fish species, fish types, fish habitats, and fish endemic areas.</Typography>
      </div>
      <div className={classes.copyright}>
        <Typography variant="body1" style={{color: 'black', textAlign: 'justify'}}>© 2022 Fishlogi. All rights reserved.</Typography>
        <a href="https://discord.com/api/oauth2/authorize?client_id=1057752407540506775&permissions=8&scope=bot" target="_blank" rel="noreferrer"><FaDiscord className={classes.discord} color="black" style={{ fontSize: '20px', marginTop: '5px'}} /></a>
      </div>
    </AppBar>
  );
};
export default Footer;
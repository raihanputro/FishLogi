import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import FishLogi_Logo from '../../images/logo1.png';
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT'});
        setUser(null);
        navigate('/');
    };

    useEffect(() => {
        const token = user?.token;
        
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" variant="h2" align="center">
                    <img className={classes.image} src={FishLogi_Logo}  alt="Logo FishLogi" />
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Keluar</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Masuk</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
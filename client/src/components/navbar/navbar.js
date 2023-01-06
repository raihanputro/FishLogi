import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import FishLogi_Logo from '../../images/logo1.png';
import adminFishLogi_Logo from '../../images/logoAdmin.png';
import useStyles from "./styles";
import { logoutUser } from "../../actions/users";

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const id = user?.result?.id;
    const admin = user?.result?.isAdmin === 'admin';

    const logout = async () => {
        dispatch(logoutUser(id));
        dispatch({type: 'LOGOUT'})
        setUser(null);
        window.location.reload();
        navigate('/'); 
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        navigate('/auth');
    }

    useEffect(() => {
        const token = user?.token;
        
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/fishes" variant="h2" align="center">
                    <img className={classes.image} src={admin ? adminFishLogi_Logo : FishLogi_Logo}  alt="Logo FishLogi" />
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar src={user?.result?.profilePic} alt={user?.result?.name}>
                            {user?.result?.name?.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result?.name}</Typography>
                        <Button className={classes.logout} variant="contained" onClick={logout}>Keluar</Button>
                    </div>
                ) : (
                    <Button variant="contained" color="primary" onClick={handleLogin}>Masuk</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
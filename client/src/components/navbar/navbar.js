import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(null);

    return (
        <AppBar className={classes.appBar} color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
                    FishLogi
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" color="secondary">Keluar</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Masuk</Button>
                )}
            </Toolbar>
    </AppBar>
    )
}

export default Navbar;
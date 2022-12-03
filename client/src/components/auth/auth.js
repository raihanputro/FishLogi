import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from './input';
import useStyles from './styles';
import { signIn, signUp } from '../../actions/auth';

const Auth = () => {
    const classes =  useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp) {
            dispatch(signUp(formData, navigate));
        } else {
            dispatch(signIn(formData, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5' className={classes.title}>{isSignUp ? 'Daftar' : 'Masuk'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignUp && <Input name="name" label="Nama" handleChange={handleChange} autoFocus />}
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        {isSignUp  && <Input name="confirmPassword" label="Ulangi Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button className={classes.submit} type='submit' fullWidth variant='contained' color='primary'>{isSignUp ? 'Daftar' : 'Masuk'}</Button>
                    <Button className={classes.switch} type='submit' onClick={switchMode} fullWidth>{isSignUp ? 'Sudah punya akun? Masuk' : 'Tidak punya akun? Daftar'}</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;


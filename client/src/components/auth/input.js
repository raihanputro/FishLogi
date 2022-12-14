import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword }) => {
    return (
        <Grid item xs={12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                autoComplete="on"
                required
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps = { name === "password" ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null }
            />
        </Grid>
    )
}

export default Input;


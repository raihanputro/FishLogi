import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import { deleteFishPost } from "../../../actions/fishPosts";
import useStyles from './styles';

const FishPost = ({ fishPost, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const openFishPost = () => {
        navigate( `/fishes/${fishPost.id}`)
    }

    return (
            <Card className={classes.card}>
                <ButtonBase className={classes.cardAction} onClick={openFishPost} component="span">
                    <CardMedia className={classes.media} image={fishPost.fishPicture || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={fishPost.name} />  
                    <Typography style={{ marginTop: '10px'}}className={classes.title} variant="h5">{fishPost.name}</Typography>
                    <CardContent>
                        <Typography style={{textAlign: 'justify'}} variant="body2" color="textSecondary" gutterBottom>{fishPost.desc.split(' ').splice(0, 20).join(' ')}...</Typography>
                    </CardContent>
                </ButtonBase>
                {(user?.result?.isAdmin === 'admin') && (
                    <CardActions className={classes.cardActions}>
                            <>
                                <Button size="small" style={{color: 'red'}} onClick={() => dispatch(deleteFishPost(fishPost.id))}>
                                    <DeleteIcon style={{padding: '0px'}} fontSize="small"/>
                                </Button>
                                    <Button color="primary" size="small" onClick={(e) => {e.stopPropagation(); setCurrentId(fishPost.id)}}>
                                    <SettingsIcon fontSize="medium" />
                                </Button>
                            </>
                    </CardActions>
                )}
            </Card>
    )
};

export default FishPost;
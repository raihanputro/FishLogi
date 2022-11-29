import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deleteFishPost } from "../../../actions/fishPosts";
import useStyles from './styles';

const FishPost = ({ fishPost, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={fishPost.fishPicture || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={fishPost.name} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{fishPost.authorName}</Typography>
                    <Typography variant="body2">{moment(fishPost.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(fishPost.id)}>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{fishPost.desc}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">
                        <DeleteIcon fontSize="small" onClick={() => dispatch(deleteFishPost(fishPost.id))}/>
                    </Button>
                </CardActions>
            </Card>
    )
};

export default FishPost;
import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";


import FishPost from "./fishPost/fishPost";
import useStyles from './styles';

const FishPosts = ({ setCurrentId }) => {
    const fishPosts = useSelector((state) => state.fishPosts);
    const classes = useStyles();

    return (
        !fishPosts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {fishPosts.map((fishPost) => (
                    <Grid key={fishPost.id} item xs={12} sm={6}>
                        <FishPost fishPost={fishPost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default FishPosts;
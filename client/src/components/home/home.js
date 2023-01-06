import React, { useState, useEffect, useSelector } from "react";
import { Container, Grow, Grid, AppBar, TextField, Button } from "@material-ui/core";
import { Paper } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import FishPosts from "../fishPosts/fishPosts";
import useStyles from './styles';
import { getFishPosts, getFishPostsBySearch } from "../../actions/fishPosts";
import FishPostsTable from "../fishPosts/fishPostsTable/fishPostTable";
import UsersTable from "../users/usersTable/usersTable";

function useQuery() {
    return new URLSearchParams(useLocation().search);
};

const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const [currentId, setCurrentId] = useState(0);
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));

    const searchFishPosts = () => {
        if(search.trim()) {
            dispatch(getFishPostsBySearch({search}));
            navigate(`/fishes/search?searchQuery=${search}`);
        } else {
            navigate('/');
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchFishPosts();
        }
    }

    useEffect(() => {
        dispatch(getFishPosts());
    }, [currentId, dispatch]);

 
    return (
        <Grow in maxWidth="lg">
            <Container className={classes.container}>
                {user?.result?.isAdmin === 'admin' ? (
                    <>
                        <FishPostsTable />
                        <UsersTable />
                    </>
                ) : null}
                {user?.result?.isAdmin === 'admin' ? null : (
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <FishPosts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Paper className={classes.paper}>
                                <TextField 
                                    name="search" 
                                    label="Cari Ikan" 
                                    variant="outlined" 
                                    fullWidth 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}  
                                    onKeyDown={handleKeyPress}
                                />
                                <Button style={{ marginTop: '5px'}} variant="contained" size="large" color="primary" type="submit" fullWidth onClick={searchFishPosts}>Cari</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Grow>
    )
}

export default Home;


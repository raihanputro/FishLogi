import React, { useState, useEffect, useSelector } from "react";
import { CSVLink } from 'react-csv';
import { Container, Grow, Grid, AppBar, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import FishPosts from "../fishPosts/fishPosts";
import Form from "../form/form";
import useStyles from './styles';
import { getFishPosts, getFishPostsBySearch } from "../../actions/fishPosts";

function useQuery() {
    return new URLSearchParams(useLocation().search);
};

const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [fishData, setFishData] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const searchQuery = query.get('searchQuery');

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
        dispatch(getFishPosts(setFishData));
    }, [currentId, dispatch]);

    const headers = [
        {label: 'Nama Ikan', key: 'name'},
        {label: 'Nama Latin Ikan', key: 'latinName'},
        {label: 'Kelas Ikan', key: 'classes'},
        {label: 'Spesies Ikan', key: 'species'},
        {label: 'Tipe Ikan', key: 'type'},
        {label: 'Deskripsi Ikan', key: 'desc'},
        {label: 'Habitat Ikan', key: 'habitats'},
        {label: 'Daerah Endemik Ikan', key: 'endemicArea'},
        {label: 'Foto Ikan', key: 'fishPicture'},
        {label: 'Id Penulis', key: 'authorId'},
        {label: 'Nama Penulis', key: 'authorName'},
    ]

    return (
        <Grow in maxWidth="lg">
            <Container className={classes.container}>
                <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <FishPosts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CSVLink data={fishData} headers={headers} target="_blank" filename="Data Ikan_Fishlogi" className={classes.excel} >Download Data Ikan</CSVLink> 
                        <AppBar className={classes.search} position="static" color="inherit" elevation={6}>
                            <TextField 
                                name="search" 
                                label="Cari Ikan" 
                                variant="outlined" 
                                fullWidth 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}  
                                onKeyDown={handleKeyPress}
                            />
                            <Button variant="contained" size="large" color="primary" type="submit" fullWidth onClick={searchFishPosts}>Cari</Button>
                        </AppBar>
                        {user?.result?.isAdmin === 'admin' && (
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
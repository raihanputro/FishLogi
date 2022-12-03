import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import moment from "moment";
import { getFishPost } from "../../../actions/fishPosts";
import useStyles from './styles';

var idLocale = require('moment/locale/id')
moment.updateLocale('id', idLocale);

const FishPostDetail = () => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const { fishPost, fishPosts } = useSelector((state) => state.fishPosts);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getFishPost(id))
    }, [id]);
    
    if(!user?.result?.name) {
        return (
            <Paper style={{ marginTop: '130px', borderRadius: '15px', textAlign: 'center'}}>
                <Typography variant="h5">Silahkan Masuk untuk melihat detail ikan!</Typography>
            </Paper>
        )
    }

    if(!fishPost) return 'tidak ada detail ikan';

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px', marginTop: '130px' }} elevation={6} >
            <div className={classes.card}>
                <div className={classes.section}>
                <Typography variant="h3" component="h2" >{fishPost.name}</Typography>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h5">Nama Latin: {fishPost.latinName}</Typography>
                <Typography variant="h5">Kelas: {fishPost.classes}</Typography>
                <Typography variant="h5">Spesies: {fishPost.species}</Typography>
                <Typography variant="h5">Tipe: {fishPost.type}</Typography>
                <Typography variant="h5">Habitat: {fishPost.habitats}</Typography>
                <Typography variant="h5">Daerah Endemik: {fishPost.endemicArea}</Typography>
                <Typography style={{textAlign: 'justify'}} gutterBottom variant="body1" component="p">{fishPost.desc}</Typography>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6">
                    Ditulis oleh:
                    <Link to={`/authors/${fishPost.authorName}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                    {` ${fishPost.authorName}`}
                    </Link>
                </Typography>
                <Typography variant="body1">Di posting: {moment(fishPost.createdAt).fromNow()}</Typography>
                <Typography variant="body1">Di perbarui: {moment(fishPost.updateAt).fromNow()}</Typography>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={fishPost.fishPicture} alt={fishPost.name} />
                </div>
            </div>
        </Paper>
    )
}

export default FishPostDetail;
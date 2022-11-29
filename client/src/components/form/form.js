import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import { TextField, Button, Typography, Paper, MenuItem} from '@material-ui/core';
import { createFishPost, updateFishPost } from '../../actions/fishPosts';

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const [ fishData, setFishData ] = useState({
        authorName: '', 
        name: '',
        latinName: '',
        class: '',
        species: '',
        type: '',
        desc: '',
        habitats: '',
        endemicArea: '',
        fishPicture: '',
    });

    const fishPost =  useSelector((state) => (currentId ? state.fishPosts.find((fp) => fp.id === currentId) : null))

    const fishType = [{ value: 'Air Tawar', label: 'Air Tawar'}, { value: 'Air Asin', label: 'Air Asin'}];

    const clear = () => {
        setCurrentId(null);
        setFishData({
            authorName: '', 
            name: '',
            latinName: '',
            class: '',
            species: '',
            type: '',
            desc: '',
            habitats: '',
            endemicArea: '',
            fishPicture: '',
        })
    }

    useEffect(() => {
        if(fishPost) setFishData(fishPost);
    }, [fishPost])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateFishPost(currentId, fishData));
            clear();
        } else {
            dispatch(createFishPost(fishData));
            clear();
        }
       
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form className={`${classes.root} ${classes.form}`} autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? `Edit ${fishPost.name}` : `Buat Postingan Ikan`}</Typography>
                <TextField 
                    name='Penulis' 
                    label='Penulis' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.authorName}
                    onChange={(e) => setFishData({ ...fishData, authorName: e.target.value })}
                    helperText="Silahkan isi Nama Penulis"
                />   
                <TextField 
                    name='Nama Ikan' 
                    label='Nama Ikan' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.name}
                    onChange={(e) => setFishData({ ...fishData, name: e.target.value })}
                    helperText="Silahkan isi Nama Ikan"
                />   
                <TextField 
                    name='Nama Latin Ikan' 
                    label='Nama Latin Ikan' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.latinName}
                    onChange={(e) => setFishData({ ...fishData, latinName: e.target.value })}
                    helperText="Silahkan isi Nama Latin Ikan"
                />   
                <TextField 
                    name='Kelas' 
                    label='Kelas' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.class}
                    onChange={(e) => setFishData({ ...fishData, class: e.target.value })}
                    helperText="Silahkan isi Kelas Ikan"
                />   
                <TextField 
                    name='Spesies' 
                    label='Spesies' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.species}
                    onChange={(e) => setFishData({ ...fishData, species: e.target.value })}
                    helperText="Silahkan isi Spesies Ikan"
                />   
                <TextField 
                    name='Tipe' 
                    label='Tipe' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.type}
                    onChange={(e) => setFishData({ ...fishData, type: e.target.value })}
                    helperText="Silahkan isi Tipe Ikan"
                >
                    {fishType.map((pilihan) => (<MenuItem key={pilihan.value} value={pilihan.value}>{pilihan.label}</MenuItem>))}
                </TextField>   
                <TextField 
                    name='Deskripsi Ikan' 
                    label='Deskripsi Ikan' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.desc}
                    onChange={(e) => setFishData({ ...fishData, desc: e.target.value })}
                    helperText="Silahkan isi Deskripsi Ikan"
                />   
                <TextField 
                    name='Habitat' 
                    label='Habitat' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.habitats}
                    onChange={(e) => setFishData({ ...fishData, habitats: e.target.value })}
                    helperText="Silahkan isi Habitat Ikan"
                />   
                <TextField 
                    name='Daerah Endemik' 
                    label='Daerah Endemik' 
                    variant='outlined' 
                    fullWidth 
                    value={fishData.endemicArea}
                    onChange={(e) => setFishData({ ...fishData, endemicArea: e.target.value })}
                    helperText="Silahkan isi Daerah Endmik Ikan"
                />   
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone = {({ base64 }) => setFishData({ ...fishData, fishPicture: base64})}
                    name='Foto Ikan' 
                    label='Foto Ikan' 
                    variant='outlined' 
                    fullWidth 
                />
                <Button className={classes.buttonSubmit} variant='contained' size='large' type='submit' fullWidth>Kirim</Button>  
            </form>
        </Paper>
    )
}

export default Form;


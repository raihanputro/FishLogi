import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import SettingsIcon from '@material-ui/icons/Settings';
import { TextField, Button, Typography, Paper, MenuItem, Modal, Fade, Backdrop} from '@material-ui/core';
import { getFishPosts, updateFishPost } from '../../actions/fishPosts';

const FormUpdateData = ({currentId, setCurrentId, fish}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const [modal, setModal] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [ fishData, setFishData ] = useState({ 
        name: '',
        latinName: '',
        classes: '',
        species: '',
        type: '',
        desc: '',
        habitats: '',
        endemicArea: '',
        fishPicture: '',
    });
    
    const fishPost =  useSelector((state) => (currentId ? state.fishPosts.find((fp) => fp.id === currentId) : null));

    useEffect(() => {
        dispatch(getFishPosts());
    }, [currentId, dispatch]);
    
    useEffect(() => {
        if(fishPost) setFishData(fishPost);
    }, [fishPost]);

    const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(updateFishPost(currentId, {...fishData, authorName: user?.result?.name}));
            clear();
            handleCloseModal();
            window.location.reload();
    }

    const clear = () => {
        setFishData({ 
            name: '',
            latinName: '',
            classes: '',
            species: '',
            type: '',
            desc: '',
            habitats: '',
            endemicArea: '',
            fishPicture: '',
        });
    };
    
    const fishType = [
        { value: 'Air Tawar', label: 'Air Tawar'}, 
        { value: 'Air Asin', label: 'Air Asin'}
    ];

    const handleOpenModal = () => {
        setModal(true);
    }
    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <>
             <Button color="primary" type='button' size="small" onClick={ (e) => {e.stopPropagation(); handleOpenModal(); setCurrentId(fish.id) }}>
                    <SettingsIcon fontSize="medium" />
            </Button>
            <Modal className={classes.modal} open={modal} onClose={handleCloseModal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}>
                <Fade in={modal} >
                    <Paper className={classes.paper}>
                        <form className={`${classes.root} ${classes.form}`} autoComplete='off' noValidate onSubmit={handleSubmit}>
                            <Typography variant='h6'>Edit {fish?.name}</Typography>  
                            <TextField 
                                name= "name" 
                                label='Nama Ikan' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.name}
                                onChange={(e) => setFishData({ ...fishData, name: e.target.value })}
                                helperText="Silahkan isi Nama Ikan"
                            />
                            <TextField 
                                name='species' 
                                label='Spesies' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.species}
                                onChange={(e) => setFishData({ ...fishData, species: e.target.value })}
                                helperText="Silahkan isi Spesies Ikan"
                            />   
                            <TextField 
                                name='latinName' 
                                label='Nama Latin Ikan' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.latinName}
                                onChange={(e) => setFishData({ ...fishData, latinName: e.target.value })}
                                helperText="Silahkan isi Nama Latin Ikan"
                            />   
                            <TextField 
                                name='classes' 
                                label='Kelas' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.classes}
                                onChange={(e) => setFishData({ ...fishData, classes: e.target.value })}
                                helperText="Silahkan isi Kelas Ikan"
                            />      
                            <TextField 
                                select
                                name='type' 
                                label='Tipe' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.type}
                                onChange={(e) => setFishData({ ...fishData, type: e.target.value })}
                                helperText="Silahkan isi Tipe Ikan"
                            >{fishType.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}</TextField>   
                            <TextField 
                                name='desc' 
                                label='Deskripsi Ikan' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.desc}
                                onChange={(e) => setFishData({ ...fishData, desc: e.target.value })}
                                helperText="Silahkan isi Deskripsi Ikan"
                            />   
                            <TextField 
                                name='habitats' 
                                label='Habitat' 
                                variant='outlined' 
                                fullWidth 
                                value={fishData.habitats}
                                onChange={(e) => setFishData({ ...fishData, habitats: e.target.value })}
                                helperText="Silahkan isi Habitat Ikan"
                            />   
                            <TextField
                                name='endemicArea' 
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
                            />
                            <Button className={classes.buttonSubmit} color="primary" variant='contained' size='large' type='submit' fullWidth>Kirim</Button>  
                            <Button className={classes.buttonClear} style={{backgroundColor: 'red', color: 'white'}} variant='contained' size='large' type='submit' fullWidth onClick={clear}>Batal</Button>  
                        </form>
                    </Paper>
                </Fade>
            </Modal>
        </>
    )
}

export default FormUpdateData;


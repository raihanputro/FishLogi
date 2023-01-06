import React, { useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CSVLink } from 'react-csv';
import { deleteFishPost } from "../../../actions/fishPosts";
import { Button, Table, TableBody, TablePagination, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch } from "react-redux";
import useStyles from './styles';
import moment from "moment";
import FormAddData from "../../form/formAddData";
import { getFishPosts } from "../../../actions/fishPosts";
import FormUpdateData from "../../form/formUpdateData";

var idLocale = require('moment/locale/id')
moment.updateLocale('id', idLocale);

const FishPostsTable = () => {
    const fishPosts = useSelector((state) => state.fishPosts);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              'http://localhost:5000/fishes'
          );
          setData(result.data);
          setFilter(result.data);
      }
      
      fetchData()
      
  }, []);

    useEffect(() => {
      dispatch(getFishPosts());
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
      {label: 'Id Penulis', key: 'authorId'},
      {label: 'Nama Penulis', key: 'authorName'},
  ];

    return (
        <Paper className={classes.paper}>
          <Typography variant="h5" style={{marginBottom: '5px', fontWeight: 'bolder'}}>Data Ikan</Typography>
              <Button variant="contained" size="large" fullWidth style={{ backgroundColor: '#21a366', marginBottom: '10px', padding: '0px'}}>
                  <CSVLink data={data} headers={headers} target="_blank" filename="Data Ikan_Fishlogi" className={classes.excel} >Download Data Ikan</CSVLink> 
              </Button>
              <FormAddData />
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: '#165ab6' }}>
                <TableRow >
                  <TableCell style={{ color: 'white' }} align="center">Id</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Nama</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Kelas</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Nama Latin</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Spesies</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Tipe</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Deskripsi</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Habitat</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Daerah Endemik</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Gambar</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Penulis</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Dibuat</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Diperbarui</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Dihapus</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((fish) => (
                  <TableRow key={fish.id}>
                    <TableCell component="th" scope="row" align="center">
                      {fish.id}
                    </TableCell>
                    <TableCell align="center">{fish.name}</TableCell>
                    <TableCell align="center">{fish.species}</TableCell>
                    <TableCell align="center">{fish.latinName}</TableCell>
                    <TableCell align="center">{fish.classes}</TableCell>
                    <TableCell align="center">{fish.type}</TableCell>
                    <TableCell align="center">{fish.desc?.split(' ').splice(0, 10).join(' ')}...</TableCell>
                    <TableCell align="center">{fish.habitats.split(' ').splice(0, 10).join(' ')}...</TableCell>
                    <TableCell align="center">{fish.endemicArea}</TableCell>
                    <TableCell align="center"><img style={{width: '120%'}} src={fish.fishPicture}  alt={fish.name} /></TableCell>
                    <TableCell align="center">{fish.authorName}</TableCell>
                    <TableCell align="center">{moment(fish.createdAt).format('Do MMMM YYYY, h:mm:ss a')}</TableCell>
                    <TableCell align="center">{moment(fish.updatedAt).format('Do MMMM YYYY, h:mm:ss a')}</TableCell>
                    <TableCell align="center">{!fish.deletedAt ? 'Belum dihapus' : moment(fish.deletedAt).format('Do MMMM YYYY, h:mm:ss a') }</TableCell>
                    <TableCell style={{ diplay: 'flex', flexDirection: "row" }}>
                      <Button size="small" style={{color: 'red'}} onClick={() => {dispatch(deleteFishPost(fish.id));  window.location.reload()}}>
                          <DeleteIcon style={{padding: '0px'}} fontSize="small"/>
                      </Button>
                      <FormUpdateData currentId={currentId} setCurrentId={setCurrentId} fish={fish}/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage={"Data per-halaman"}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={({ from, to, count }) => `Menampilkan ${from}-${to} Data dari ${count} Data`}
          />
        </Paper>
    );
}
  
export default FishPostsTable;
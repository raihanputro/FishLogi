import React, { useState, useEffect} from "react";
import axios from "axios";
import { CSVLink } from 'react-csv';
import { useDispatch } from "react-redux";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Typography } from "@material-ui/core";
import useStyles from './styles';
import moment from "moment";

var idLocale = require('moment/locale/id')
moment.updateLocale('id', idLocale);

const UsersTable = () => {
    const [userData, setUserData] = useState([]);
    const [filter, setFilter] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


    useEffect(() => {
        const fetchUserData = async () => {
            const result = await axios(
                'http://127.0.0.1:5000/users'
            );
            setUserData(result.data);
            setFilter(result.data);
        }
        fetchUserData()
        
    }, []);

    const headers = [
      {label: 'Id', key: 'id'},
      {label: 'Nama', key: 'name'},
      {label: 'Email', key: 'email'},
      {label: 'Role', key: 'isAdmin'},
      {label: 'Dibuat', key: 'createdAt'},
      {label: 'Waktu Login', key: 'loginAt'},
      {label: 'Waktu Logout', key: 'logoutAt'},
  ]
  
    return (
        <Paper className={classes.paper}>
          <Typography variant="h5" style={{marginBottom: '5px', fontWeight: 'bolder'}}>Data User</Typography>
              <Button variant="contained" size="large" fullWidth style={{ backgroundColor: '#21a366', marginBottom: '10px', padding: '0px'}}>
                  <CSVLink data={userData} headers={headers} target="_blank" filename="Data User_Fishlogi" className={classes.excel} >Download Data USER</CSVLink> 
              </Button>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: '#165ab6' }}>
                <TableRow >
                  <TableCell style={{ color: 'white' }} align="center">Id</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Nama</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Email</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Role</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Dibuat</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Waktu Login</TableCell>
                  <TableCell style={{ color: 'white' }} align="center">Waktu logout</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row" align="center">
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.isAdmin}</TableCell>
                    <TableCell align="center">{moment(user.createdAt).format('Do MMMM YYYY, h:mm:ss a')}</TableCell>
                    <TableCell align="center">{!user.loginAt ? 'Belum login' : moment(user.loginAt).format('Do MMMM YYYY, h:mm:ss a') }</TableCell>
                    <TableCell align="center">{!user.logoutAt ? 'Belum logout' : moment(user.logoutAt).format('Do MMMM YYYY, h:mm:ss a') }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={userData.length}
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
  
export default UsersTable;
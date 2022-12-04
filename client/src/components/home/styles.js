import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainter: {
            flexDirection: 'column-reverse',
        }
    },
    container: {
        marginTop: '130px'
    },
    search: {
        marginTop: '10px',
        marginBottom: '20px'
    },
    excel: {
        backgroundColor: '#8dc63f',
        fontSize: 14,
        fontWeight: 500,
        height: "100px",
        padding: '0 48px',
        borderRadius: 5,
        color: '#fff',
        textDecoration: 'none'
    }
}))
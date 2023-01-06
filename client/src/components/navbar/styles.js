import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        marginTop: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed'
    },
    image: {
        imageRendering: '-webkit-optimize-contrast',
        paddingLeft: '50px',
        paddingTop: '15px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            paddingTop: '10px',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 70px',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '200px',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        }
    },
    logout: {
        marginLeft: '20px',
        backgroundColor: 'red',
        color: 'white'
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}))
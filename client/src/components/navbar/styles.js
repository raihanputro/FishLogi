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
        paddingTop: '15px',
        paddingLeft: '70px',
        imageRendering: '-webkit-optimize-contrast',
        imageRendering: 'crisp-edges'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 70px',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
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
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center'
    }
}))
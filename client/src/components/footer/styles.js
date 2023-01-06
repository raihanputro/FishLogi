import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
      background: 'white',
      paddingTop: '10px',
      width: '100%',
      position: "static",
      display: 'flex',
      justifyContent: 'space-evenly',   
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: '30px 120px',
      marginTop: '30px'
    },

    brandContainer: {
       width: '100%',
    },

    copyright: {
        width: '27%',
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },

    discord: {
        '&:hover': {
            cursor: 'pointer'
        },
    },

    image: {
        imageRendering: '-webkit-optimize-contrast',
        width: '20%',
        [theme.breakpoints.down('sm')]: {
            width: '30%',
        },

    },
}))
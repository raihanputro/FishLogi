import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
    container: {
        marginTop: '130px'
    },
    search: {
        marginTop: '10px',
        marginBottom: '20px'
    },
    root: {
        width: '100%',
      },
    container1: {
      maxHeight: 440,
      borderRadius: "5px"
    },
    paper: {
      padding: theme.spacing(2),
      borderRadius: '15px',
      marginBottom: '10px'
    }
}))
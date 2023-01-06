import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      borderRadius: '15px',
      marginBottom: '30px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    excel: {
      fontSize: 14,
      fontWeight: 500,
      borderRadius: 5,
      width: '100%',
      justifyContent: 'center',
      height: '43px',
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
}))
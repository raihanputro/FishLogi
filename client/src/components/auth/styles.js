import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        marginTop: '130px',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    title: {
        marginBottom: '10px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
    switch: {
      marginTop: theme.spacing(2),
    },
}))
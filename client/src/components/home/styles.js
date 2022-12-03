import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainter: {
            flexDirection: 'column-reverse',
        }
    },
    container: {
        marginTop: '120px'
    }

}))
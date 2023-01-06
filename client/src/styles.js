import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		padding: 0,
		margin: 0,
	},
    appBar: {
        marginTop: '0px',
        borderRadius: '15px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
      color: '#d71919',
      fontWeight: 'bold',
    },
    image: {
      marginLeft: '15px',
    },
}));
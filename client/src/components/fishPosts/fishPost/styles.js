import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    media: {
        height: '0',
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    border: {
      border: 'solid',
    },
    fullHeightCard: {
      height: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '330px',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
    },
    overlay2: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: 'white',
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardAction: {
      display: 'block',
      textAlign: 'initial',
    },
    cardActions: {
      padding: '0 16px',
      margin: 'auto'
    },
}));
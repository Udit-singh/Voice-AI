import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '25vh',
    padding: '5%',
    borderRadius: 10,
    color: 'white',
 
  },
  card2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25vh',
    padding: '5%',
    borderRadius: 10,
    color: 'white',
   },
  infoCard: {
    display: 'flex', flexDirection: 'row', textAlign: 'center', fontSize: '1rem'
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', padding: '0 5%', width: '100%', margin: 0,
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0, 
  },
});

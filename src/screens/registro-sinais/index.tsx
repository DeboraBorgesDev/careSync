import { Grid } from '@mui/material';
import SinaisContainer from '../../componenets/forms/sinais/container';

const SinaisPage: React.FC = () => {


  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <h1>Resgistrar Sinais Vitais</h1>
      </Grid>
      <Grid item xs={12}>
        <SinaisContainer registro={null} />
      </Grid>
    </Grid>
  );
};

export default SinaisPage;

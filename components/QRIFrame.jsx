import Iframe from 'react-iframe';
import Grid from '@mui/material/Grid2';
 const QRCode = () => {
    <Grid container alignItems="center">
        <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <Iframe url="https://linko.page/spark-e"
                    width="100%"
                    height="375px"
                    id="contactusframe"
                    className=""
                    display="block"
                    position="relative"/>
        </Grid>
    </Grid>
 };
 export default QRCode;



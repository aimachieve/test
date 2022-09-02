// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack, Card, CardContent, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // backgroundImage: `linear-gradient(180deg, #F4F4F4 0%, #F4F4F4 100%)`,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));

function createData(name, calories, fat, carbs, protein, available, expiredCredit, validity) {
  return { name, calories, fat, carbs, protein, available, expiredCredit, validity };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 0, 10, 19),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 0, 10, 19),
  createData('Eclair', 262, 16.0, 24, 6.0, 0, 10, 19),
  createData('Cupcake', 305, 3.7, 67, 4.3, 0, 10, 19),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 0, 10, 19),
];
// ----------------------------------------------------------------------

export default function Credits() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp} style={{marginBottom: '20px'}}>
            <h1 className='medium text-primary'>Credit Statement</h1>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell align="right">Package</TableCell>
                    <TableCell align="right">coupon</TableCell>
                    <TableCell align="right">Value</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">Available</TableCell>
                    <TableCell align="right">Expired Credit</TableCell>
                    <TableCell align="right">Validity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))} */}
                  <Typography>No items to show...</Typography>
                </TableBody>
              </Table>
            </TableContainer>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

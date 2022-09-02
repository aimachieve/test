// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Grid, Stack, Card, CardContent } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundImage: `linear-gradient(180deg, #F4F4F4 0%, #F4F4F4 100%)`,
  margin: theme.spacing(8, 0, 8, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0, 0, 0),
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingDigital() {
  return (
    <RootStyle>
      <Container maxWidth="lg"  id="benefits">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4", textAlign: "center" }}>
              With Registro.Legal you get
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4} mb={10}>
                <Card sx={{ }}>
                  <CardContent>
                    <Stack alignItems="center" spacing={2} mb={2}>
                      <SafetyCheckOutlinedIcon sx={{fontSize: '100px'}} color="primary" />
                      <Typography sx={{ fontWeight: 'bold' }}>SAFETY</Typography>
                    </Stack>
                    <Typography sx={{textAlign: 'center'}}>
                      Registro.Legal in the cloud and <br />
                      meets all <br />
                      security criteria <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Card sx={{ }}>
                  <CardContent>
                    <Stack alignItems="center" spacing={2} mb={2}>
                      <SafetyCheckOutlinedIcon sx={{fontSize: '100px'}} color="primary" />
                      <Typography sx={{ fontWeight: 'bold' }}>SAFETY</Typography>
                    </Stack>
                    <Typography sx={{textAlign: 'center'}}>
                      Registro.Legal in the cloud and <br />
                      meets all <br />
                      security criteria <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Card sx={{ }}>
                  <CardContent>
                    <Stack alignItems="center" spacing={2} mb={2}>
                      <SafetyCheckOutlinedIcon sx={{fontSize: '100px'}} color="primary" />
                      <Typography sx={{ fontWeight: 'bold' }}>SAFETY</Typography>
                    </Stack>
                    <Typography sx={{textAlign: 'center'}}>
                      Registro.Legal in the cloud and <br />
                      meets all <br />
                      security criteria <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Card sx={{ }}>
                  <CardContent>
                    <Stack alignItems="center" spacing={2} mb={2}>
                      <SafetyCheckOutlinedIcon sx={{fontSize: '100px'}} color="primary" />
                      <Typography sx={{ fontWeight: 'bold' }}>SAFETY</Typography>
                    </Stack>
                    <Typography sx={{textAlign: 'center'}}>
                      Registro.Legal in the cloud and <br />
                      meets all <br />
                      security criteria <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Card sx={{ }}>
                  <CardContent>
                    <Stack alignItems="center" spacing={2} mb={2}>
                      <SafetyCheckOutlinedIcon sx={{fontSize: '100px'}} color="primary" />
                      <Typography sx={{ fontWeight: 'bold' }}>SAFETY</Typography>
                    </Stack>
                    <Typography sx={{textAlign: 'center'}}>
                      Registro.Legal in the cloud and <br />
                      meets all <br />
                      security criteria <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Card sx={{ }}>
                  <CardContent>
                    <Stack alignItems="center" spacing={2} mb={2}>
                      <SafetyCheckOutlinedIcon sx={{fontSize: '100px'}} color="primary" />
                      <Typography sx={{ fontWeight: 'bold' }}>SAFETY</Typography>
                    </Stack>
                    <Typography sx={{textAlign: 'center'}}>
                      Registro.Legal in the cloud and <br />
                      meets all <br />
                      security criteria <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

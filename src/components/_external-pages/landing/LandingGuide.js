// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack } from '@material-ui/core';
//
import { MotionInView, varFadeInUp } from '../../animate';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

// ----------------------------------------------------------------------

export default function LandingGuide() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }} id="how">
        <Grid container spacing={8} direction="row-reverse" justifyContent="space-between" alignItems={'center'}>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Stack spacing={2}>
                  <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4", textAlign: "center" }}>
                    See how easy it is to create your <br />
                    Proof of Priority
                  </Typography>
                  
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <LooksOneOutlinedIcon color="primary" sx={{ fontSize: '50px' }} />
                    <Typography sx={{ fontSize: 15, fontFamily: "Poppins" }}>
                      Register at Registro.Legal and access through the login menu.
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <LooksTwoOutlinedIcon color="primary" sx={{ fontSize: '50px' }} />
                    <Typography sx={{ fontSize: 15, fontFamily: "Poppins" }}>
                      When accessing the platform, click on the "Register" menu
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Looks3OutlinedIcon color="primary" sx={{ fontSize: '50px' }} />
                    <Typography sx={{ fontSize: 15, fontFamily: "Poppins" }}>
                      Enter the data of the registration holder, registration type, title and description.
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Looks4OutlinedIcon color="primary" sx={{ fontSize: '50px' }} />
                    <Typography sx={{ fontSize: 15, fontFamily: "Poppins" }}>
                      Select the digital file for the platform to generate the hash.
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Looks5OutlinedIcon color="primary" sx={{ fontSize: '50px' }} />
                    <Typography sx={{ fontSize: 15, fontFamily: "Poppins" }}>
                      Then click on register and wait for confirmation on the Blockchain and issuance of the Certificate of Priority.
                    </Typography>
                  </Stack>
                </Stack>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <Box component="img" src="https://www.authoradigital.com.br/wp-content/uploads/2022/02/Screenshot_11.jpg" />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

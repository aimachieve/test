// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack } from '@material-ui/core';
//
import { MotionInView, varFadeInUp } from '../../animate';

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

export default function LandingHow() {
  return (
    <RootStyle>
      <Container id="how" maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={8} direction="row-reverse" justifyContent="space-between" alignItems={'center'}>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Stack spacing={2}>
                  <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4", textAlign: "center" }}>
                    Why register with Registro.Legal
                  </Typography>

                  <Typography>
                    The record of proof of prior art in Blockchain technology is gaining more and more notoriety in the legal field, both for its ease, transparency and security, as well as for its wide acceptance in more than 179 countries!
                  </Typography>
                  <Typography>
                    Registro.legal has arrived to facilitate the process of creating Proofs of Priority, with the issuance of a certificate for each transaction, which contains the most relevant data from the record, such as the timestamp stamp, name of the person in charge and the hash of the document, in addition to the QR Code for direct validation on the network.
                  </Typography>
                  <Typography>
                    Watch the video and learn about all the registration possibilities through Registro.Legal.
                  </Typography>
                </Stack>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <Box component="img" src="" sx={{borderRadius: '10px'}}/>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import CampaignIcon from '@mui/icons-material/Campaign';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(18, 0, 8, 0),
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
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg" id="solution">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4", textAlign: "center" }}>
              In REGISTRO you can register all <br />
              types of digital files
            </Typography>
            <Typography sx={{ mb: 3, fontFamily: 'Poppins', textAlign: "center", fontSize: '20px' }}>
              Some <b>examples</b> than you can register
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} mb={10}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <CampaignIcon sx={{fontSize: '50px'}} color="primary" />
                  <Typography sx={{fontWeight: 'bold'}}>Advertixing Expression</Typography>
                </Stack>
                <Typography>
                  Protect captions, ads, phrases, <br />
                  words, originals, word <br />
                  combinations, <br />
                  drawings and engravings
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>

          <MotionInView variants={varFadeInUp} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button size="large" variant="contained" sx={{ borderRadius: '50px', padding: 4 }}>
              Discorver all the possibilities <br /> you can protect!
            </Button>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

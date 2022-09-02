// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack, Card, CardContent, TextField } from '@material-ui/core';
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
    textAlign: 'center',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function BuyCredits() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography sx={{ mb: 3, textAlign: "center" }}>
              Buy credits to register your files on Blockchain and have up to a year to use!
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Stack alignItems="center" spacing={2} mb={2}>
                  <Typography variant='h3'>CERTIFICAO EM <br /> BLOCKCHAIN</Typography>
                  <Typography>Approximate amount in reais:</Typography>
                  <Typography>Evidence in static format</Typography>
                  <Typography variant='h2'>R$27.49</Typography>
                  <Typography>(Cost in euros: € 4.99)</Typography>
                  <Button variant='contained' href="/dashboard/purchase-summary">INSTALL PLUGIN</Button>
                  <Typography style={{ fontWeight: 'bold' }}>SEE PRICING DETAILS</Typography>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems="center" spacing={2} mb={2}>
                  <Typography variant='h3'>CERTIFICAO EM <br /> BLOCKCHAIN</Typography>
                  <Typography>Approximate amount in reais:</Typography>
                  <Typography>Evidence in any format:static, audio and video</Typography>
                  <Typography variant='h2'>R$165.24</Typography>
                  <Typography>(Cost in euros: € 29.99)</Typography>
                  <Button variant='contained' href="/dashboard/purchase-summary">INSTALL PLUGIN</Button>
                  <Typography style={{ fontWeight: 'bold' }}>SEE PRICING DETAILS</Typography>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems="center" spacing={2} mb={2}>
                  <Typography variant='h3'>NOTARIAL <br /> AUTHENTICATION</Typography>
                  <Typography>Approximate amount in reais:</Typography>
                  <Typography>Evidence in static format</Typography>
                  <Typography variant='h2'>R$110.14</Typography>
                  <Typography>(Cost in euros: € 19.99)</Typography>
                  <Button variant='contained' href="/dashboard/purchase-summary">INSTALL PLUGIN</Button>
                  <Typography style={{ fontWeight: 'bold' }}>SEE PRICING DETAILS</Typography>
                  <Typography sx={{ textAlign: 'left' }}>
                    Notary authentication is done in partnership with the Azevedo Bastos registry office. After payment, you will receive the link to download the authenticated document within 1 business day
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                    <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>

            <Stack direction={'row'} alignItems="flex-end" spacing={2}>
              <Stack>
                <Typography>You have a coupon, redeem it below:</Typography>
                <TextField label="Credit Coupon" />
              </Stack>
              <Button variant="outlined" size="large">Rescue</Button>
            </Stack>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

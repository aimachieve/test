// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack, TextField } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import { Icon } from '@iconify/react';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-outline';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(20, 0, 8, 0),
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

export default function Contact() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={6} mb={10}>
                <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4" }}>
                  You doubt? We can help you.
                </Typography>
                <Typography sx={{ mb: 3, fontFamily: 'Poppins', }}>
                  Ask us about our product, hiring and support questions. Our experts are here to help you chart a path to success.
                </Typography>
                <Typography sx={{ mb: 3, fontFamily: 'Poppins', fontWeight: 'bold' }}>
                  Fill out the form on the side or send an email to
                </Typography>
                {/* <Typography sx={{ mb: 3, fontFamily: 'Poppins', fontWeight: 'bold', color: "#1FA0F4" }}>
                  comercial@authoradigital.com.br
                </Typography> */}
              </Grid>
              <Grid item xs={12} md={6} mb={10}>
                <Stack spacing={3}>
                  <TextField
                    placeholder='Name'
                  />
                  <TextField
                    placeholder='Email'
                  />
                  <TextField
                    placeholder='Area code + Telephone'
                  />
                  <TextField
                    placeholder='Message'
                    multiline
                    rows={4}
                  />
                  <Button variant='contained'>
                    RECEIVE CONTACT
                  </Button>
                  <Typography sx={{ fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: "center" }}>
                    <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#000000" />
                    Your contact was successfully sent!
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

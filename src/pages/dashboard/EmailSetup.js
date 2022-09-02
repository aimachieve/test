// material
import { Container, Typography, Stack, Button, Grid } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
import { useNavigate } from 'react-router';
// components
import Page from 'components/Page';
import TextField from '@material-ui/core/TextField';

// ----------------------------------------------------------------------

export default function EmailSetup() {
  const { themeStretch } = useSettings();
  const navigate = useNavigate();

  return (
    <Page title="Registro.Legal | Generate Hash">
      <Container maxWidth={themeStretch ? false : 'md'}>
        <Typography variant="h3" component="h1" paragraph>
          Email Setup
        </Typography>
        <Stack spacing={2} justifyContent="center" alignItems={'center'}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography>E-mail introduction (email start)</Typography>
                <TextField
                  label="Message"
                  minRows={10}
                  multiline
                  fullWidth
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography>E-mail introduction (end of email)</Typography>
                <TextField
                  label="Message"
                  minRows={10}
                  multiline
                  fullWidth
                />
              </Stack>

            </Grid>
          </Grid>
          <Button variant="contained" sx={{width: '100px'}} onClick={() => {
            alert("Configuration Successfully Saved!")
            navigate("/dashboard")
          }}>To save</Button>
        </Stack>
      </Container>
    </Page>
  );
}

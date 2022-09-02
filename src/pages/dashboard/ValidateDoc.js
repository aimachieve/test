// material
import { Container, Typography, Stack, Button } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import TextField from '@material-ui/core/TextField';

// ----------------------------------------------------------------------

export default function ValidateDoc() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Dashboard | Validate Doc">
      <Container maxWidth={themeStretch ? false : 'md'}>
        <Typography variant="h3" component="h1" paragraph>
          Validate document
        </Typography>
        <Stack spacing={3} direction="column">
          <TextField label="Address" />
          <TextField label="Signature" />
          <TextField 
          label="Message"
          minRows={4}
          multiline
           />
           <Button variant="contained">Verify</Button>
        </Stack>
      </Container>
    </Page>
  );
}

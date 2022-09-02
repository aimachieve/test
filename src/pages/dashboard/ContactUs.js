import * as React from 'react';
// material
import { Container, Typography, Stack, Button } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import { TextField, MenuItem } from '@material-ui/core';
import { Navigate, useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function ContactUs() {
  const { themeStretch } = useSettings();
  const navigate = useNavigate()
  const [goal, setGoal] = React.useState('support');

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <Page title="Registro.Legal | Generate Hash">
      <Container maxWidth={themeStretch ? false : 'md'}>
        <Typography variant="h3" component="h1" paragraph>
          Contact us
        </Typography>
        <Stack spacing={3} direction="column">
          <Typography>Who would you like to talk to? *</Typography>
          <TextField
            label="Who"
            select
            value={goal}
            onChange={handleChange}
          >
             <MenuItem value={'support'}>Support</MenuItem>
             <MenuItem value={'commercial'}>Commercial</MenuItem>
             <MenuItem value={'financial'}>Financial</MenuItem>
          </TextField>
          <Typography>Write your question: *</Typography>
          <TextField
            label="Message"
            minRows={4}
            multiline
          />
          <Button variant="contained" onClick={() => {
            alert("Message Successfully sent!")
            navigate("/dashboard")
          }}>Submit</Button>
        </Stack>
      </Container>
    </Page>
  );
}


import * as React from 'react'
import { Stack, Typography, Container, TextField, Button } from '@material-ui/core';
// components
import Page from 'components/Page';
import { keyBy } from 'lodash';

const BlockchainHash = () => {
  const [key, setKey] = React.useState('9630a6471f57ea152f9f')
  const [secret, setSecret] = React.useState('a781fdf8b9a2f6e85ca0acaef115bcfc8fe34e9bf3f96171c7aa94c725deb98d')

  return (
    <Page title="Registro.Legal | Generate Hash">
      <Container maxWidth='md'>
        <h1 className='medium text-primary' style={{ marginBottom: '40px' }}>
          Blockchain Hash
        </h1>
        <Stack spacing={3}>
          <>
            <Typography variant="h5">1. Restful API Field</Typography>
            <Typography>url: "https://api.pinata.cloud/pinning/pinFileToIPFS",</Typography>
          </>
          <>
            <Typography variant="h5">2. IPFS Pinata Key</Typography>
            <Typography>Current Pinata API Key : {key}</Typography>
            <Typography>Current Pinata API Secret : {secret}</Typography>
          </>
          <>
            <Typography variant="h5">3. Update Pinata Info</Typography>
            <TextField label="pinata-api-key" onChange={(e) => setKey(e.target.value)} />
            <TextField label="pinata-api-secret" onChange={(e) => setSecret(e.target.value)} />
            <Button variant="contained" onClick={() => alert('Successfully Updated!')}>Update</Button>
          </>
        </Stack>
      </Container>
    </Page>
  );
}

export default BlockchainHash;
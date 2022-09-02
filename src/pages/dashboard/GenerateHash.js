// material
import { Container, Typography, Stack, Button } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// Axios
import axios from 'axios';
// components
import Page from 'components/Page';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function GenerateHash() {
  const { themeStretch } = useSettings();
  const pinata_api_key = '61228e75429061894220';
  const pinata_api_secret = 'ac10bfc43c9d8540153674d2612400c821a543ee6b60be710b67bde0b3d3c1ad';

  const [hash, setHash] = useState('');
  const sendFileToIPFS = async (fileImg) => {
    if (fileImg) {
      try {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            'pinata_api_key': pinata_api_key,
            'pinata_secret_api_key': pinata_api_secret,
            "Content-Type": "multipart/form-data"
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        setHash(ImgHash)

        //Take a look at your Pinata Pinned section, you will see a new file added to you list.   
      } catch (error) {
        console.log("Error sending File to IPFS: ")
        console.log(error)
      }
    }
  }

  return (
    <Page title="Registro.Legal | Generate Hash">
      <Container maxWidth={themeStretch ? false : 'md'}>
        <Typography variant="h3" component="h1" paragraph>
          Generate Hash
        </Typography>
        <Stack spacing={3} direction="column">
          <TextField type={'file'} onChange={(e) => {
            sendFileToIPFS(e.target.files[0])
          }} />
          <Typography>Hash (SHA256): {hash}</Typography>
        </Stack>
      </Container>
    </Page>
  );
}

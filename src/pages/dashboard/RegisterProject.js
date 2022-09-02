import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
// material
import { Container, Typography, Stack, Button, Card, CardContent, Select, Modal, Box, Checkbox, ListItemText, OutlinedInput, Grid } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// components
import PageComponent from 'components/Page';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import RegistrationTypesNew from './RegisterationTypesNew';
import Spinner from 'pages/layout/Spinner';
// Actions
import { getTypes, createHolder, getHolders, createRecord } from '../../actions/record';
// Axios
import axios from 'axios';
// Pdf generation
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Image, pdf, renderToFile } from '@react-pdf/renderer';

// ----------------------------------------------------------------------

const RegisterProject = ({ getTypes, createHolder, getHolders, createRecord, record: { types, holders }, auth: { user } }) => {
  const { themeStretch } = useSettings();
  const navigate = useNavigate();
 console.log("user=>", user)
  useEffect(() => {
    getTypes();
    getHolders();
  }, [getTypes, getHolders]);

  // Title and Description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  // Manage the Types
  const [type, setType] = useState('');
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  // IPFS upload key && fuction
  const pinata_api_key = '9630a6471f57ea152f9f';
  const pinata_api_secret = 'a781fdf8b9a2f6e85ca0acaef115bcfc8fe34e9bf3f96171c7aa94c725deb98d';

  const [hash, setHash] = useState('');
  const [filename, setFilename] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    document: '',
    email: '',
    language: '',
    timestamp: '',
  });
  const { name, document, email, language, timestamp } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendFileToIPFS = async (fileImg) => {
    setFilename(fileImg.name)

    if (fileImg) {
      try {
        const fileData = new FormData();
        fileData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: fileData,
          headers: {
            'pinata_api_key': pinata_api_key,
            'pinata_secret_api_key': pinata_api_secret,
            "Content-Type": "multipart/form-data"
          },
        });
        console.log(resFile.data.Timestamp)

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        setHash(ImgHash)
        setFormData({ ...formData, "timestamp": resFile.data.Timestamp });

        //Take a look at your Pinata Pinned section, you will see a new file added to you list.   
      } catch (error) {
        console.log("Error sending File to IPFS: ")
        console.log(error)
      }
    }
  }

  // Manage the Holders
  const [holder, setHolder] = useState([]);
  const handleChangeHolder = (event) => {
    const {
      target: { value },
    } = event;
    setHolder(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [openHolder, setOpenHolder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    createHolder({ name, document, email, language });
    setFormData({
      name: '',
      document: '',
      email: '',
      language: '',
      timestamp: '',
    })
    setOpenHolder(false)
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '20px',
    p: 4,
  };

  // Pdf generation

  // Create styles
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      marginTop: 80,
      flexDirection: 'column',
      // backgroundColor: '#E4E4E4'
    },
    section: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
      spacing: 3,
      // flexGrow: 1
    },
    gridSection: {
      flexDirection: 'row',
      marginTop: 15
    }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="/logo/logo-ipfs.png" alt="logo" style={{ height: "150px", width: "200px", alignItems: 'center' }} />
          <Text style={{ textAlign: 'center', fontSize: '25px', fontWeight: "700", marginTop: 30 }}>
            PRECEDENCE CERTIFICATE
          </Text>
        </View>

        <View>
          <Text style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold', marginBottom: 10 }}>
            Registered by
          </Text>
          <Text style={{ textAlign: 'left', fontSize: '18px' }}>
            Holder : {holder.toString()}
          </Text>
        </View>

        <View style={styles.gridSection}>
          <View style={{ justifyContent: 'space-between', border: '1px solid #000', padding: 3, textAlign: 'right', flexGrow: 1 }}>
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
              IPFS CID :
            </Text>
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
              FILE NAME :
            </Text>
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
              TIMESTAMP :
            </Text>
          </View>
          <View style={{ justifyContent: 'space-between', textAlign: "center", flexGrow: 8, border: '1px solid #000', padding: 3 }}>
            <Text style={{ fontSize: '10px' }}>
              {hash}
            </Text>
            <Text style={{ fontSize: '10px' }}>
              {filename}
            </Text>
            <Text style={{ fontSize: '10px' }}>
              {timestamp}
            </Text>
          </View>
          <View style={{ flexGrow: 1, border: '1px solid #000', margin: 'auto' }}>
            <Image src="/images/ipfs.png" alt="ipfs" style={{ width: '100px', height: '100px' }} />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ textAlign: 'center', fontSize: '20px', fontWeight: "600" }}>
            DIGITAL REGISTER
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: 10 }}>Details</Text>
          <Text style={{ fontSize: '18px' }}>
            Type : {type}
          </Text>
          <Text style={{ fontSize: '18px' }}>
            Title : {title}
          </Text>
          <Text style={{ fontSize: '18px' }}>
            Description : {description}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PageComponent title="Dashboard | Register Proof of Priority">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <h1 className='medium text-primary'>
          Register Projects
        </h1>
        <Card>
          <CardContent>
            <Stack spacing={4}>
              {/* Titular */}
              <Stack direction="row" spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Holder</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Holder"
                    multiple
                    value={holder}
                    renderValue={(selected) => selected.join(', ')}
                    input={<OutlinedInput label="Holder" />}
                    onChange={handleChangeHolder}
                  >
                    {
                      holders && holders.map((h, index) => (
                        <MenuItem key={index} value={h.name + ' (' + h.document + ')' + ' - ' + h.language}>
                          {/* {h.name + ' (' + h.document + ')' + ' - ' + h.language} */}
                          <Checkbox checked={holder.indexOf(h.name + ' (' + h.document + ')' + ' - ' + h.language) > -1} />
                          <ListItemText primary={h.name + ' (' + h.document + ')' + ' - ' + h.language} />
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>

                <Button variant="outlined" sx={{}} startIcon={<AddIcon />} onClick={() => { setOpenHolder(true) }} >
                  Holder
                </Button>
                <Modal
                  open={openHolder}
                  onClose={() => { setOpenHolder(false) }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
                      Register Holder
                    </Typography>

                    <Stack spacing={3} sx={{ border: '1px solid #ddd', p: 3 }}>
                      <TextField
                        label="Name *"
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                      />
                      <TextField
                        label="Document(RG, CPF, CNPJ, etc...) *"
                        type="text"
                        name="document"
                        value={document}
                        onChange={onChange}
                      />
                      <TextField
                        label="E-mail *"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Certificate Language</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Certificate Language"
                          name="language"
                          value={language}
                          onChange={onChange}
                        >
                          <MenuItem value={'English'}>English</MenuItem>
                          <MenuItem value={'Portuguese'}>Portuguese</MenuItem>
                        </Select>
                      </FormControl>
                      <Stack direction="row" justifyContent={'center'} alignItems="center" spacing={3}>
                        <Button variant="contained" onClick={onSubmit}>To save</Button>
                        <Button variant="outlined" onClick={() => setOpenHolder(false)}>Cancel</Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Modal>
              </Stack>
              {/* Record Type */}
              <Stack direction="row" spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={type}
                    onChange={handleChangeType}
                  >
                    {
                      types && types.map((type, index) => (
                        <MenuItem key={index} value={type.type}>{type.type}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>

                {/* New type */}
                <RegistrationTypesNew />
              </Stack>
              {/* title */}
              <TextField fullWidth label='Title *' onChange={(e) => {
                setTitle(e.target.value)
              }} />
              {/* Description */}
              <TextField label="Description" multiline rows={4} fullWidth onChange={(e) => {
                setDescription(e.target.value)
              }} />
              {/* File Hash Generation */}
              <Stack spacing={3} direction="column">
                <TextField type={'file'} onChange={(e) => {
                  sendFileToIPFS(e.target.files[0])
                }} />
                <div>Hash (SHA256): {hash ? hash : <Spinner />}</div>
              </Stack>
              <Stack justifyContent='center' alignItems={'center'}>
                {/* <PDFDownloadLink document={<MyDocument />} fileName={"Model-Certificate"}> */}
                  <Button
                    variant="contained"
                    sx={{ width: '10%' }}
                    disabled={(!holder || !title || !description || !hash || !filename || !timestamp) ?? true}
                    onClick={async () => {
                      if (user && user.credits > 0) {
                        await createRecord({
                          holder: holder.toString(),
                          type: type,
                          title: title,
                          description: description,
                          hash: hash,
                          fileName: filename,
                          timestamp: timestamp
                        })
                        navigate("/dashboard/projects")
                      } else {
                        alert("You have to register a package to get a credits! (Você tem que registrar um pacote para obter créditos!)")
                        navigate("/dashboard/buy_credits")
                      }
                      
                    }}>
                    Register
                  </Button>
                {/* </PDFDownloadLink> */}

                {/* <Button variant="outlined" onClick={ async () => {
                  const blob = await renderToFile(<MyDocument />, "/")
                  console.log(blob)
                }}>To Blob</Button> */}
              </Stack>
            </Stack>
            {/* pdf generate */}
          </CardContent>
        </Card>
      </Container>
    </PageComponent>
  );
}

RegisterProject.propTypes = {
  getTypes: PropTypes.func.isRequired,
  createHolder: PropTypes.func.isRequired,
  getHolders: PropTypes.func.isRequired,
  createRecord: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  record: state.record,
  auth: state.auth
});
export default connect(mapStateToProps, { getTypes, createHolder, getHolders, createRecord })(RegisterProject);
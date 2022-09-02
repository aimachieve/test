import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { Container, Typography, Stack, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// components
import PageComponent from 'components/Page';
import AddIcon from '@mui/icons-material/Add';
// actions
import { getRecords } from '../../actions/record'
// Generate PDF
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Image, pdf, renderToFile } from '@react-pdf/renderer';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// ----------------------------------------------------------------------

const Projects = ({ getRecords, record: { records } }) => {
  const { themeStretch } = useSettings();

  useEffect(() => {
    getRecords();
  }, [getRecords]);

  // Create styles
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      marginTop: 10,
      flexDirection: 'column',
      // backgroundColor: '#E4E4E4'
    },
    section: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      spacing: 3,
      // flexGrow: 1
    },
    gridSection: {
      flexDirection: 'row',
      marginTop: 5
    }
  });

  // Create Document Component English
  const MyDocument = ({ holder, hash, filename, timestamp, type, title, description }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src="/images/header.png" alt="ipfs" style={{ height: '100px' }} />

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
            Holder : {holder}
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

        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: '20px', fontWeight: "600" }}>
            DIGITAL REGISTER
          </Text>
        </View>

        <View style={{ marginTop: 10, marginBottom: 30 }}>
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

        <Image src="/images/footer.png" alt="footer" style={{ height: '100px' }} />
      </Page>
    </Document>
  );

  // Create Document Component Portuguese
  const MyDocument1 = ({ holder, hash, filename, timestamp, type, title, description }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src="/images/header.png" alt="ipfs" style={{ height: '100px' }} />

        <View style={styles.section}>
          <Image src="/logo/logo-ipfs.png" alt="logo" style={{ height: "150px", width: "200px", alignItems: 'center' }} />
          <Text style={{ textAlign: 'center', fontSize: '25px', fontWeight: "700", marginTop: 30 }}>
            CERTIFICADO DE PRECEDÊNCIA
          </Text>
        </View>

        <View>
          <Text style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold', marginBottom: 10 }}>
            Registrado por
          </Text>
          <Text style={{ textAlign: 'left', fontSize: '18px' }}>
            Suporte : {holder}
          </Text>
        </View>

        <View style={styles.gridSection}>
          <View style={{ justifyContent: 'space-between', border: '1px solid #000', padding: 3, textAlign: 'right', flexGrow: 1 }}>
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
              CID IPFS :
            </Text>
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
              NOME :
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
            REGISTRO DIGITAL
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: 10 }}>Details</Text>
          <Text style={{ fontSize: '18px' }}>
            Modelo : {type}
          </Text>
          <Text style={{ fontSize: '18px' }}>
            Título : {title}
          </Text>
          <Text style={{ fontSize: '18px' }}>
            Descrição : {description}
          </Text>
        </View>

        <Image src="/images/footer.png" alt="footer" style={{ height: '100px' }} />
      </Page>
    </Document>
  );

  return (
    <PageComponent title="Dashboard | Projects">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction="row" justifyContent={'space-between'} alignItems="center">
          <h1 className="medium text-primary">Records</h1>
          <Button variant="outlined" startIcon={<AddIcon />} href="/dashboard/register-project">Register</Button>
        </Stack>
        {
          records && records.length > 0 ?
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Holder</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>File Name</TableCell>
                    <TableCell>Timestamp</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {records.map((record, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <b>{record.title}</b>
                      </TableCell>
                      <TableCell><b>{record.description}</b></TableCell>
                      <TableCell><b>{record.holder}</b></TableCell>
                      <TableCell><b>{record.type}</b></TableCell>
                      <TableCell><b>{record.fileName}</b></TableCell>
                      <TableCell><b>{record.timestamp}</b></TableCell>
                      <TableCell>
                        <Stack spacing={2} direction="row">
                          {/* English */}
                          <PDFDownloadLink
                            document={
                              <MyDocument
                                holder={record.holder}
                                description={record.description}
                                type={record.type}
                                filename={record.fileName}
                                timestamp={record.timestamp}
                                title={record.title}
                                hash={record.hash}
                              />
                            }
                            fileName={"Model-Certificate"}
                          >
                            <Button variant="contained" startIcon={<FileDownloadOutlinedIcon />}>
                              PDF(en)
                            </Button>
                          </PDFDownloadLink>
                          {/* Portuguese */}
                          <PDFDownloadLink
                            document={
                              <MyDocument1
                                holder={record.holder}
                                description={record.description}
                                type={record.type}
                                filename={record.fileName}
                                timestamp={record.timestamp}
                                title={record.title}
                                hash={record.hash}
                              />
                            }
                            fileName={"Modelo-Certificado"}
                          >
                            <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
                              PDF(pt)
                            </Button>
                          </PDFDownloadLink>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> :
            <Typography gutterBottom> 
              You don't have any registrations yet, make yours right now.
            </Typography>
        }
      </Container>
    </PageComponent>
  );
}

Projects.propTypes = {
  record: PropTypes.object.isRequired,
  getRecords: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  record: state.record
});

export default connect(mapStateToProps, { getRecords })(Projects);
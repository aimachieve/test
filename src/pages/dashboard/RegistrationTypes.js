import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { Container, Typography, Stack, Button, Card, CardContent, Divider } from '@material-ui/core';
// hooks
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
import AddIcon from '@mui/icons-material/Add';
import RegistrationTypesNew from './RegisterationTypesNew';
// actions
import { getTypes } from '../../actions/record';

// ----------------------------------------------------------------------

const RegistrationTypes = ({ getTypes, record: { types } }) => {
  const { themeStretch } = useSettings();
  useEffect(() => {
    getTypes();
  }, [getTypes]);

  return (
    <Page title="Page One | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction="row" justifyContent={'space-between'} alignItems="center">
          <Typography variant="h3" component="h1" paragraph>
            Registration Types
          </Typography>
          {/* <Button variant="contained" startIcon={<AddIcon />} href="/dashboard/register-project">New Type</Button>
           */}
          <RegistrationTypesNew />
        </Stack>
        <Card>
          <CardContent>
            <Typography sx={{ fontWeight: 'bold', fontColor: 'primary' }}>Type</Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

            {/* Items */}
            {types && types.map((type) => (
              <RegistrationTypesNew key={type._id} item={type} />
            ))}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

RegistrationTypes.propTypes = {
  getTypes: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  record: state.record
});

export default connect(mapStateToProps, { getTypes })(RegistrationTypes);
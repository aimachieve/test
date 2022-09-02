import React, { Fragment } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Stack } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
// 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Alert from './Alert'
// Multinlingual
import { useTranslation } from 'react-i18next';
import LanguagePopover from 'layouts/dashboard/LanguagePopover';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 79;
const APP_BAR_DESKTOP = 80;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.longer
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  },
  boxShadow: theme.customShadows.z8
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

const MainNavbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const { t, i18n } = useTranslation('common');

  const authLinks = (
    <Stack spacing={2} direction="row" alignItems="center">
      {/* <Link style={{ fontSize: '20px', fontWeight: 'bold' }} to="/profiles">Users</Link> */}
      {/* <Link style={{ fontSize: '20px', fontWeight: 'bold' }} to="/posts">Posts</Link> */}
      {/* <Link style={{ fontSize: '20px', fontWeight: 'bold' }} to="">Dashboard</Link> */}
      <Link style={{ fontSize: '20px', fontWeight: 'bold' }} to="/dashboard">
        <i className="fas fa-user" />{' '}
        <span className="hide-sm">{user && user.name}</span>
      </Link>
      {/* <Button variant="outlined" onClick={logout}>
        <i className="fas fa-sign-out-alt" />{'  '}
        <span className="hide-sm">Logout</span>
      </Button> */}
    </Stack>
  );

  const guestLinks = (
    <Stack spacing={2} direction="row" alignItems="center">
      {/* <Link style={{ fontSize: '20px', fontWeight: 'bold' }} to="/profiles">Users</Link> */}
      <Button component={RouterLink} variant="outlined" to="/register">
        {t('register.register_button')}
      </Button>
      <Button component={RouterLink} variant="contained" to="/login">
        {t('login.login_button')}
      </Button>
    </Stack>
  );

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'white', marginBottom: 50 }}>
      <Alert />
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 70 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // pr: 20
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                transition: 'transform 0.3s',
                width: { xs: '100px', md: '100px' },
                height: { xs: '60px', md: '80px' },
                ...(isOffset && {
                  transform: { xs: 'scale(0.8)', md: 'scale(0.7)' }
                }),
                // marginTop: {xs: 15, md: 0}
              }}
            />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <LanguagePopover />
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          </MHidden>

          <MHidden width="mdUp">
            <LanguagePopover />
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}

MainNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(MainNavbar);
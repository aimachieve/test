import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import { MHidden } from '../../components/@material-extend';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import Alert from '../main/Alert'
import { getCurrentProfile } from 'actions/profile';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

const DashboardNavbar = ({
  getCurrentProfile,
  auth: { user },
  onOpenSidebar
}) => {
  const { isCollapse } = useCollapseDrawer();

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        })
      }}
    >
      <Alert />
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 1.5 }} justifyContent="center">
          {/* Credits */}
          {/* <Button variant="outlined" sx={{ height: '40px' }} href="/dashboard/credits"> */}
          <Button variant="outlined" sx={{ height: '40px' }}>
            <Stack alignItems="center">
              <Typography color="primary">
                {user && user.credits}
              </Typography>
              <Typography sx={{ fontSize: '10px', color: '#000' }}>credits</Typography>
            </Stack>
          </Button>

          <LanguagePopover />
          {/* <NotificationsPopover /> */}

          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(
  DashboardNavbar
);
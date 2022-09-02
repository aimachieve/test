import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import listFill from '@iconify/icons-eva/list-fill';
import hashFill from '@iconify/icons-eva/hash-fill';
import emailOutline from '@iconify/icons-eva/email-outline';
import contactIcon from '@iconify/icons-eva/message-circle-outline';
import holdersIcon from '@iconify/icons-eva/people-outline';
import helpIcon from '@iconify/icons-eva/question-mark-circle-outline';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// material
import { alpha } from '@material-ui/core/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography } from '@material-ui/core';
// components
import { MIconButton } from '../../components/@material-extend';
import MenuPopover from '../../components/MenuPopover';
// 
import { getCurrentProfile } from 'actions/profile';
import { logout } from 'actions/auth';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'Home', icon: homeFill, linkTo: '/' },
  { label: 'Registration Types', icon: listFill, linkTo: '/dashboard/registration-types' },
  { label: 'Profile', icon: personFill, linkTo: '/dashboard/app/profile' },
  // { label: 'Holders', icon: holdersIcon, linkTo: '/dashboard/app/profiles' },
  { label: 'Generate Hash', icon: hashFill, linkTo: '/dashboard/generate-hash' },
  { label: 'Email Setup', icon: emailOutline, linkTo: '/dashboard/email-setup' },
  { label: 'Help', icon: helpIcon, linkTo: '/dashboard/help' },
  { label: 'Contact Us', icon: contactIcon, linkTo: '/dashboard/contact-us' }
];

// ----------------------------------------------------------------------

const AccountPopover = ({
  getCurrentProfile,
  logout,
  auth: { user }, }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar alt="My Avatar" src="/static/mock-images/avatars/avatar_default.jpg" />
      </MIconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user && user.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user && user.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={() => {
            logout();
            navigate("/");
          }}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

AccountPopover.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, logout })(
  AccountPopover
);
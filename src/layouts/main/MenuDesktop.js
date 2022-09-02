import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Link, Grid, List, Stack, Collapse, Popover, ListItemText, ListItem, ListItemButton, ListSubheader, CardActionArea, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

const SubLinkStyle = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item'])
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 })
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

function MenuDesktopItem({ item, pathname, isHome, isOpen, isOffset, onOpen, onClose }) {
  const { title, path, children } = item;
  const isActive = pathname === path;
  const { t } = useTranslation('common');

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  if (children) {
    return (
      <div key={title}>
        <LinkStyle
          onClick={handleClick}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'text.primary' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 })
          }}
        >
          {t(title)}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              mt: 2,
              px: 3,
              pt: 5,
              pb: 3,
              borderRadius: 2,
              boxShadow: (theme) => theme.customShadows.z24
            }
          }}
        >
          <Stack direction="column" spacing={1}>
            {
              children.map((item) => (
                <div key={item.title}>
                  <SubLinkStyle
                    to={item.path}
                    component={RouterLink}
                    sx={{
                      ...(isHome && { color: 'text.primary' }),
                      ...(isOffset && { color: 'text.primary' }),
                      ...(isActive && { color: 'primary.main' })
                    }}
                  >
                    {t(item.title)}
                  </SubLinkStyle>

                  <Divider />
                </div>
              ))
            }
          </Stack>
        </Popover>

      </div>
    );
  }

  return (
    <LinkStyle
      key={title}
      href={path}
      sx={{
        ...(isHome && { color: 'text.primary' }),
        ...(isOffset && { color: 'text.primary' }),
        ...(isActive && { color: 'primary.main' })
      }}
    >
      {t(title)}
    </LinkStyle>
  );
}

MenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link, index) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          pathname={pathname + hash}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}

    </Stack>
  );
}

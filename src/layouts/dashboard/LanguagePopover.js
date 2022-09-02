import { useRef, useState } from 'react';
// material
import { alpha } from '@material-ui/core/styles';
import { Box, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
// components
import MenuPopover from '../../components/MenuPopover';
import { MIconButton } from '../../components/@material-extend';
import i18n from 'i18n';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg'
  },
  {
    value: 'pt',
    label: 'Portuguese',
    icon: '/static/icons/ic_flag_brazil.png'
  }
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(0)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{margin: '10px', textAlign: 'right'}}>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <img src={LANGS[flag].icon} alt={LANGS[flag].label} />
      </MIconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {LANGS.map((option, index) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => {
                setFlag(index);
                i18n.changeLanguage(LANGS[index].value);
                handleClose();
              }}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon}  sx={{width: '50px', height: '50px'}} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>{option.label}</ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </div>
  );
}

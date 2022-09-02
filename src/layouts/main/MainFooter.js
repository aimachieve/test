import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Button, Stack } from '@material-ui/core';
//
import SvgIconStyle from 'components/SvgIconStyle';
import Logo from 'components/Logo'
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill }
];

const LINKS = [
  {
    headline: 'CONTACT US',
    children: [
      { name: '6595 Rosewell Road Ste G PMG 13625 Atlanta', href: '#' },
      { name: '(404) 828 0870', href: '#' }
    ]
  },
  {
    headline: 'INFORMATION',
    children: [
      { name: 'Solutions', href: '/#solution' },
      { name: 'How it works', href: '/#how' },
      { name: 'Benefits', href: '/#benefits' },
      { name: 'Values', href: '/#values' },
      { name: 'Doubts', href: '/help-register' },
      { name: 'Contact us', href: '/contact' }
    ]
  },
  {
    headline: 'MY ACCOUNT',
    children: [{ name: 'Shopping Cart', href: '#' }]
  },
  {
    headline: 'LET US HELP YOU',
    children: [{ name: 'Wishlist', href: '#' }]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'url(/images/footer-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid container item xs={12} md={10}>
            {LINKS.map((list, index) => {
              const { headline, children } = list;
              return (
                <Grid item key={index} xs={6} md={3} justifyContent="space-between">
                  <Stack spacing={2}>
                    <Typography
                      variant="overline"
                      color="white"
                      sx={{ fontFamily: 'Poppins', fontSize: 20, lineHeight: '30px', fontWeight: 600 }}
                    >
                      {headline}
                    </Typography>
                    {children.map((link, index) => (
                      <Link
                        to={link.href}
                        key={index}
                        color="white"
                        component={RouterLink}
                        sx={{
                          display: 'block',
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: '24px',
                          fontFamily: 'Poppins'
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack direction="row" justifyContent="space-between">
              <SvgIconStyle src="/images/facebook.png" color="paper" sx={{ width: 30, height: 30 }} />
              <SvgIconStyle src="/images/twitter.png" color="paper" sx={{ width: 30, height: 30 }} />
              <SvgIconStyle src="/images/instagram.png" color="paper" sx={{ width: 30, height: 30 }} />
              <SvgIconStyle src="/images/youtube.png" color="paper" sx={{ width: 30, height: 30 }} />
            </Stack>
            <Button
              sx={{
                mt: 5,
                background: 'url(/images/apple-store.png)',
                backgroundSize: '100% 100%',
                width: 1,
                height: 72
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ border: '2px solid #ffffff' }} />

      <Typography
        color="white"
        sx={{
          py: 4,
          fontSize: 16,
          fontWeight: 500,
          textAlign: 'center',
          fontFamily: 'Poppins'
        }}
      >
        Copyright @ 2022 REGISTRO.LEGAL. All Right reserved
      </Typography>
    </RootStyle>
  );
}

// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import { Icon } from '@iconify/react';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-outline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooksOutlined';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(20, 0, 8, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4" }}>
              What I can  register?
            </Typography>
            <Typography sx={{ mb: 3, fontFamily: 'Poppins', }}>
              Any and all digital files that you want to <b>protect your intellectual work</b> by creating <b>proof of prior art.</b>
              <br />
              <br />
              Authora was created thinking about the immense range of <b>authorial productions</b> that need this ease and security, including because you can register <b>stages</b> and <b>versions of your authorial creations</b> ensuring even more security of your intellectual property. But Authora's potential is not restricted to this purpose only, in it you can register documents such as minutes of meetings, contracts, courses and other diverse documents that need protection and guarantee of integrity as proof of the original.
              <br />
              <br />
              In short, in Registro.Legal you can record everything that can be placed in a digital file and if you want to protect it from future misuse, copying or plagiarism.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4} mb={10}>
                <Stack direction="column" spacing={2} mb={2}>
                  <LibraryBooksIcon sx={{fontSize: '100px'}} color="primary" />
                  <Typography sx={{ fontWeight: 'bold', color: "#1FA0F4", fontSize: '20px' }}>Author Texts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>allocutions</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>articles</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>blogs</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>geographic maps</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Collections or compilations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>conferences</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>courses</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>posts</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>sermons</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>TCCs and academic papers</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Theses and Dissertations</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Teaching materials</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Speeches</Typography>
                </Stack>
                <Stack direction="row">
                  <Icon icon={checkmarkCircle2Fill} width={24} height={24} color="#1FA0F4" />
                  <Typography>Translations</Typography>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

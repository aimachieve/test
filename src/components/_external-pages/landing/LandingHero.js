import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
//
import C5 from 'components/carousel/CarouselThumbnail'
import ReactPlayer from 'react-player'
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  // background: 'url(/images/hero-bg.png)',
  // backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    // paddingTop: theme.spacing(15),
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle>
        {/* <video
          style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
          autoPlay
          playsInline
          loop
          muted
          // controls
          alt="All the devices"
          src="/slider/gold.mp4"
        /> */}
        <img style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }} src="https://www.authoradigital.com.br/wp-content/uploads/2022/03/authora-blockchain-prova-anterioridade-PI.png" alt="hero image" />
      </RootStyle>
    </>
  );
}

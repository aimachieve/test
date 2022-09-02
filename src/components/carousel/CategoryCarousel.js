import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import arrowForwardFill from '@iconify/icons-eva/arrow-forward-fill';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Paper, Link, Typography, CardContent, Stack } from '@material-ui/core';
// utils
import mockData from '../../utils/mock-data';
//
import { CarouselControlsArrowsBasic2 } from './controls';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [
  {
    title: 'Placeholder1',
    image: '/landscape/1.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder2',
    image: '/landscape/2.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder3',
    image: '/landscape/3.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder4',
    image: '/landscape/4.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder5',
    image: '/landscape/5.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder1',
    image: '/landscape/1.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder2',
    image: '/landscape/2.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder3',
    image: '/landscape/3.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder4',
    image: '/landscape/4.jpg',
    description: 'Instruments'
  },
  {
    title: 'Placeholder5',
    image: '/landscape/5.jpg',
    description: 'Instruments'
  }
];
const RootStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  position: 'relative'
}));
// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { image, title } = item;

  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 1,
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        height: 270,
        background: '#FFFFFF',
        boxShadow: '0px 4px 31px rgba(0, 0, 0, 0.11)',
        position: 'relative',
        mt: 10,
        mb: 5
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          transform: 'translateY(-50px)',
          borderRadius: '50%',
          width: 170,
          height: 170,
          background: '#FFFFFF',
          boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.22)'
        }}
      >
        <Box component="img" src={image} sx={{
          borderRadius: '50%',
          width: 170,
          height: 170,
        }} />
      </Stack>
      <CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'center',
          position: 'absolute',
          color: '#1FA0F4',
          fontStyle: 'italic'
        }}
      >
        <Typography variant="h4" paragraph>
          {title}
        </Typography>
      </CardContent>
    </Box>
  );
}

export default function CarouselCenterMode() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    slidesToShow: 5,
    arrows: false,
    // centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerPadding: '60px',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Slider>
      <CarouselControlsArrowsBasic2 onNext={handleNext} onPrevious={handlePrevious} />
    </RootStyle>
  );
}

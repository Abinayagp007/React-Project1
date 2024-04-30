import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Angkor Wat, Cambodia',
    imgPath:
      'https://wallpaperaccess.com/full/1913479.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://media.istockphoto.com/id/504122496/photo/angkor-wat.jpg?s=1024x1024&w=is&k=20&c=K_JhobcXSM46Qr9EoPeG3o6XOc6dH1G7eZqOrWYakyI=',
  },
  {
    label: 'Madurai,India',
    imgPath:
      'https://thumbs.dreamstime.com/b/hindu-temple-tower-tamil-nadu-south-india-temple-gopuram-hindu-temple-tower-tamil-nadu-south-india-temple-gopuram-tamilnadu-169466506.jpg',
  },
  {
    label: 'Tanjore, India',
    imgPath:
      'https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=612x612&w=0&k=20&c=WNoJ6KAMZvWsSECYeQNt_xx9vXOGXly_h6BLcsWHucU=',
  },
];

function ImageSwiper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1300, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          height: 35,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 450,
                  display: 'flex',
                  maxWidth: 1300,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
     
     >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ImageSwiper;
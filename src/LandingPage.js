import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Paper,
  Box,
  Link,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  CssBaseline,
  TextField,
  List,
  ListItem,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the arrow icon
import CheckIcon from '@mui/icons-material/Check'; // Import the checkmark icon
import '@fontsource/lora'; // Professional serif font
import '@fontsource/roboto-slab'; // Professional font
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function LandingPage() {
  const [mode, setMode] = useState('light');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#2c3e50', // Muted dark blue
      },
      secondary: {
        main: '#8e44ad', // Purple for secondary color
      },
      accent: {
        main: '#e67e22', // Orange for accent color
      },
    },
    typography: {
      fontFamily: "'Lora', 'Roboto Slab', serif", // Set professional fonts
      h1: {
        fontFamily: "'Lora', serif",
      },
      h2: {
        fontFamily: "'Lora', serif",
      },
      h3: {
        fontFamily: "'Roboto Slab', serif",
      },
      body1: {
        fontFamily: "'Roboto Slab', serif",
      },
      body2: {
        fontFamily: "'Roboto Slab', serif",
      },
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const sliderSettings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  const appImages = [
    '/figma1.png', 
    '/figma2.png', 
    '/figma3.png',
    '/figma4.png',
    '/figma5.png',
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDocumentClick = (url) => {
    window.open(url, '_blank');
    handleMenuClose();
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        {/* Sticky Header */}
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              UniGuide
            </Typography>
            <Button color="inherit" href="#features">
              Features
            </Button>
            <Button color="inherit" href="#showcase">
              App Showcase
            </Button>
            <Button
              color="inherit"
              onClick={handleMenuClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Documents
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleDocumentClick('https://docs.google.com/document/d/1dgIDF5iQsmtxmS8xCUFhyySj7PZHdM34uR-fggwetVc/edit?usp=sharing')}>
                Business Foundation
              </MenuItem>
              <MenuItem onClick={() => handleDocumentClick('https://www.figma.com/proto/12B1CwTQlLG2ghzbrm4aTx/UniGuide?node-id=2-2&t=NY3hkI1ytEZvCRFR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=50%3A844')}>
                Product Design
              </MenuItem>
              <MenuItem onClick={() => handleDocumentClick('https://docs.google.com/presentation/d/1iJ_gY8AYW1MAfAIpR3uNwyEtYRZxJJKd/edit?usp=sharing&ouid=113710230882758090956&rtpof=true&sd=true')}>
                Pitch for Funding
              </MenuItem>
            </Menu>
            <Button color="inherit" href="#pricing">
              Pricing
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
            <Button color="inherit" href="#team">
              Team
            </Button>
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: '100vh',
            backgroundImage: 'url(/header.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
              zIndex: 1,
            }}
          />
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to UniGuide
            </Typography>
            <Typography variant="h6" paragraph>
              Simplify your journey to finding the perfect university abroad.
            </Typography>
            <Button
              variant="contained"
              color="accent"
              href="#contact"
              sx={{ mt: 2 }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Down Arrow Animation */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              animation: 'bounce 2s infinite',
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 100,
                color: 'white',
              }}
            />
          </Box>
        </Box>

        {/* Add keyframes for bounce animation */}
        <style>
          {`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-10px);
              }
              60% {
                transform: translateY(-5px);
              }
            }
          `}
        </style>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Container>

          <Box id="features" />
          {/* Invisible Spacer */}
          <Box sx={{ height: '32px' }} />
          <Box sx={{ my: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: 'primary.main', // Use primary color
                  py: 3, // Add more vertical padding
                }}
              >
                Key Features
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 3,
                justifyContent: 'center'
              }}>
                <Card sx={{ width: 300, height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="talking.jpg"
                    alt="Personalized Recommendations"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" minHeight={60} gutterBottom>
                      Personalized Recommendations
                    </Typography>
                    <Typography variant="body2">
                      AI-powered chatbot provides tailored university recommendations based on your profile and preferences.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ width: 300, height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/management.jpg"
                    alt="Shortlist Management"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" minHeight={60} gutterBottom>
                      Shortlist Management
                    </Typography>
                    <Typography variant="body2">
                      Add or remove universities from your shortlist and set alerts for application deadlines.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ width: 300, height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/students.jpg"
                    alt="Student Connections"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" minHeight={60} gutterBottom>
                      Student Connections
                    </Typography>
                    <Typography variant="body2">
                      Connect with current students or alumni for insights and advice.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            
            
            {/* App Showcase Section */}
            <Box id="showcase"/>
            {/* Invisible Spacer */}
            <Box sx={{ height: '32px' }} />
            <Box sx={{ my: 2 }}></Box>
            <Box sx={{ my: 8, textAlign: 'center' }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  py: 3,
                }}
              >
                App Showcase
              </Typography>
              <Box sx={{ maxWidth: 300, mx: 'auto', position: 'relative' }}>
                <Slider {...sliderSettings}>
                  {appImages.map((image, index) => (
                    <Box key={index} sx={{ px: 2 }}>
                      <Box
                        component="img"
                        src={image}
                        alt={`App Mockup ${index + 1}`}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: 2,
                          boxShadow: 3,
                          objectFit: 'contain', // Ensures the image fits within the container
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
            
            {/* Download the App Section */}
          <Box
              sx={{
                my: 8,
                textAlign: 'center',
                backgroundColor: 'primary.light',
                color: 'white',
                py: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Download the App Now!
              </Typography>
              <Button
                variant="contained"
                color="accent"
                href="https://example.com/download"
                sx={{ mt: 2 }}
              >
                Get the App
              </Button>
            </Box>
            
            {/* Pricing Section */}
            <Box id="pricing"/>
            {/* Invisible Spacer */}
            <Box sx={{ height: '32px' }} />
            <Box sx={{ my: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: 'primary.main', // Use primary color
                  py: 3, // Add more vertical padding
                  textAlign: 'center', // Center-align the header
                  fontWeight: 'bold', // Make the text bold
                }}
              >
                <strong>Pricing</strong>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  justifyContent: 'center',
                  alignItems: 'stretch', // Ensures all cards align to the same height
                }}
              >
                {/* Free Trial Card */}
                <Card
                  sx={{
                    maxWidth: 300, // Explicitly set the maximum width
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1, // Ensures the card stretches to match the height of others
                  }}
                >
                  <CardContent
                    sx={{
                      p: 0, // Remove padding
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1, // Ensures content stretches to fill the card
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        py: 2, // Add vertical padding inside the header
                      }}
                    >
                      <strong>7 Day Free Trial</strong>
                    </Typography>
                    <Box sx={{ p: 2, flexGrow: 1 }}>
                      <Typography variant="body2" paragraph>
                        Get started with a 7-day free trial. Explore all features and see how UniGuide can help you.
                      </Typography>
                      <List>
                        <ListItem>
                          <CheckIcon sx={{ color: 'primary.main', mr: 1 }} />
                          Access to basic features
                        </ListItem>
                        <ListItem>
                          <CheckIcon sx={{ color: 'primary.main', mr: 1 }} />
                          Personalized recommendations
                        </ListItem>
                        <ListItem>
                          <CheckIcon sx={{ color: 'primary.main', mr: 1 }} />
                          Limited shortlist management
                        </ListItem>
                      </List>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Button variant="contained" color="primary" href="#contact">
                        Start Free Trial
                      </Button>
                    </Box>
                  </CardContent>
                </Card>

                {/* Premium Membership Card */}
                <Card
                  sx={{
                    maxWidth: 300, // Explicitly set the maximum width
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1, // Ensures the card stretches to match the height of others
                  }}
                >
                  <CardContent
                    sx={{
                      p: 0, // Remove padding
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1, // Ensures content stretches to fill the card
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        py: 2, // Add vertical padding inside the header
                      }}
                    >
                      <strong>Premium Membership</strong>
                    </Typography>
                    <Box sx={{ p: 2, flexGrow: 1 }}>
                      <Typography variant="body2" paragraph>
                        Unlock all features for just €10 per month. Enjoy personalized recommendations, shortlist management, and more.
                      </Typography>
                      <List>
                        <ListItem>
                          <CheckIcon sx={{ color: 'accent.main', mr: 1 }} />
                          Unlimited access to all features
                        </ListItem>
                        <ListItem>
                          <CheckIcon sx={{ color: 'accent.main', mr: 1 }} />
                          Advanced shortlist management
                        </ListItem>
                        <ListItem>
                          <CheckIcon sx={{ color: 'accent.main', mr: 1 }} />
                          Priority support
                        </ListItem>
                      </List>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" color="accent" gutterBottom>
                        €10/month
                      </Typography>
                      <Button
                        variant="contained"
                        color="accent"
                        href="#contact"
                        sx={{
                          color: 'white', // Set the button text color to white
                        }}
                      >
                        Subscribe Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            {/* Contact Form Section */}
            <Box id="contact" />
            {/* Invisible Spacer */}
            <Box sx={{ height: '32px' }} />
            <Box id="contact" sx={{ my: 4, px: 2 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: 'primary.main', // Use primary color
                  py: 3, // Add more vertical padding
                }}
              >
                Contact Us
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  maxWidth: 500,
                  mx: 'auto',
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for reaching out! We will get back to you soon.');
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Box>

          </Container>
        </Box>
        
        {/* Our team */}
        <Box
          id="team"
          sx={{
            my: 8,
            py: 8,
            backgroundColor: 'primary.dark', 
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Team
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 6, 
                mt: 6,
              }}
            >
              {[
                { name: "Bina Mircea Marian", img: "Mircea.jpg" },
                { name: "Cobzariu Emma-Elena", img: "Emma.jpg" },
                { name: "Nacu Andrei-Emilian", img: "Nacu.jpg" },
                { name: "Stoian Cosmin-Ionuț", img: "Cosmin.jpg" },
                { name: "Strat Bogdan-Valentin", img: "Bogdan.jpg" },
              ].map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: 'center',
                    width: 180,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)', 
                      boxShadow: 6, 
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={member.img}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      mb: 2,
                      border: '3px solid white',
                    }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>


        {/* Sticky Footer */}
        <Box
          component="footer"
          sx={{
            p: 2,
            backgroundColor: 'background.paper',
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} UniGuide. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;

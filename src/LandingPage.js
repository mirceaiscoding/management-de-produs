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
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the arrow icon
import '@fontsource/lora'; // Professional serif font
import '@fontsource/roboto-slab'; // Professional font

function LandingPage() {
  const [mode, setMode] = useState('light');

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
        <AppBar position="fixed" color="primary" top={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              UniGuide
            </Typography>
            <Button color="inherit" component={Link} href="#overview">
              Overview
            </Button>
            <Button color="inherit" component={Link} href="#features">
              Features
            </Button>
            <Button color="inherit" component={Link} href="#swot">
              SWOT Analysis
            </Button>
            <Button color="inherit" component={Link} href="#contact">
              Contact
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

            <Box id="features" sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Key Features
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 3,
                justifyContent: 'center'
              }}>
                <Card sx={{ width: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="talking.jpg"
                    alt="Personalized Recommendations"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      Personalized Recommendations
                    </Typography>
                    <Typography variant="body2">
                      AI-powered chatbot provides tailored university recommendations based on your profile and preferences.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ width: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/management.jpg"
                    alt="Shortlist Management"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      Shortlist Management
                    </Typography>
                    <Typography variant="body2">
                      Add or remove universities from your shortlist and set alerts for application deadlines.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ width: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/students.jpg"
                    alt="Student Connections"
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      Student Connections
                    </Typography>
                    <Typography variant="body2">
                      Connect with current students or alumni for insights and advice.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            {/* SWOT Analysis Section */}
            <Box id="swot" sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                SWOT Analysis
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 3,
                justifyContent: 'center'
              }}>
                <Paper sx={{ p: 2, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Strengths
                  </Typography>
                  <Typography variant="body2">
                    - Addresses a critical need for university selection assistance.<br />
                    - Cost-effective and AI-driven.
                  </Typography>
                </Paper>

                <Paper sx={{ p: 2, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Weaknesses
                  </Typography>
                  <Typography variant="body2">
                    - One-time use for university selection.<br />
                    - Trust in AI vs. human interaction.
                  </Typography>
                </Paper>

                <Paper sx={{ p: 2, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Opportunities
                  </Typography>
                  <Typography variant="body2">
                    - Expand to offer consultancy for other profiles.<br />
                    - Partnerships with scholarship institutions.
                  </Typography>
                </Paper>

                <Paper sx={{ p: 2, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Threats
                  </Typography>
                  <Typography variant="body2">
                    - Sudden changes in admission regulations.<br />
                    - Competitors integrating similar AI solutions.
                  </Typography>
                </Paper>
              </Box>
            </Box>

            {/* Contact Form Section */}
            <Box id="contact" sx={{ my: 4, px: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
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

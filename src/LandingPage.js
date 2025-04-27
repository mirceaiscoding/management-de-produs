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
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function LandingPage() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
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
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              My Application
            </Typography>
            <Button color="inherit" component={Link} href="#overview">
              Overview
            </Button>
            <Button color="inherit" component={Link} href="#features">
              Features
            </Button>
            <Button color="inherit" component={Link} href="#team">
              Team
            </Button>
            <Button color="inherit" component={Link} href="#contact">
              Contact
            </Button>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            {/* Overview Section */}
            <Box id="overview" sx={{ my: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to My Application
              </Typography>
              <Typography variant="body1" paragraph>
                Our innovative platform is designed to revolutionize the market.
                Discover how we are positioned to deliver breakthrough solutions that drive growth and capture investor interest.
              </Typography>
              <Button variant="contained" color="primary" href="/pitch">
                Learn More
              </Button>
            </Box>

            {/* Features Section */}
            <Box id="features" sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Key Features
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, m: 1, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Feature One
                  </Typography>
                  <Typography variant="body2">
                    An overview of how feature one sets us apart.
                  </Typography>
                  <Button variant="text" href="/feature-one">
                    Read More
                  </Button>
                </Paper>
                <Paper sx={{ p: 2, m: 1, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Feature Two
                  </Typography>
                  <Typography variant="body2">
                    Explore the benefits of our second feature.
                  </Typography>
                  <Button variant="text" href="/feature-two">
                    Read More
                  </Button>
                </Paper>
                <Paper sx={{ p: 2, m: 1, width: 300 }}>
                  <Typography variant="h5" component="h3">
                    Feature Three
                  </Typography>
                  <Typography variant="body2">
                    Learn how this feature drives our competitive edge.
                  </Typography>
                  <Button variant="text" href="/feature-three">
                    Read More
                  </Button>
                </Paper>
              </Box>
            </Box>

            {/* Team Section with Flexbox Row */}
            <Box id="team" sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Meet the Team
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                }}
              >
                {/* Team Member 1 */}
                <Card sx={{ width: 300, height: 400, m: 2 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://via.placeholder.com/300"
                    alt="John Doe"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      John Doe
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Chief Executive Officer
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Achievements: Led the company to double its revenue and secured key partnerships.
                    </Typography>
                  </CardContent>
                </Card>
                {/* Team Member 2 */}
                <Card sx={{ width: 300, height: 400, m: 2 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://via.placeholder.com/300"
                    alt="Jane Smith"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Jane Smith
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Chief Technology Officer
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Achievements: Developed cutting-edge technology and built a robust development team.
                    </Typography>
                  </CardContent>
                </Card>
                {/* Team Member 3 */}
                <Card sx={{ width: 300, height: 400, m: 2 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://via.placeholder.com/300"
                    alt="Alice Johnson"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Alice Johnson
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Chief Marketing Officer
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Achievements: Launched award-winning campaigns and expanded the brand's global reach.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            {/* Contact Section */}
            <Box id="contact" sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" paragraph>
                Interested in learning more or discussing investment opportunities? Reach out at{' '}
                <Link href="mailto:info@example.com">info@example.com</Link>.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Sticky Footer with theme-aware colors */}
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
            © {new Date().getFullYear()} My Application. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;

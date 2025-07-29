import React from 'react';
import { Box, Typography, Grid, Button, Divider } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ 
      background: "#ffffff", 
      color: '#0f172a', 
      p: 4,
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(59, 130, 246, 0.08)",
      border: "1px solid rgba(59, 130, 246, 0.1)"
    }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ 
          background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 4px rgba(30, 64, 175, 0.3)"
        }}>
          Welcome
        </Typography>
        <Typography variant="body1" maxWidth="md" mx="auto">
          Mr. Rodolphe Meyer is your premier point of contact in Europe for the direct purchase of fine art and collectible pieces.
          He offers his expertise to both private collectors and art professionals, ensuring high-end service, confidentiality, and commission-free immediate payments.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: '#3b82f6', my: 4, borderWidth: "2px" }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: "#1e40af", fontWeight: "600" }}>Fair Market Estimations</Typography>
          <Typography mt={1}>
            Mr. Meyer provides a free estimation service for your art based on current market values. You can be assured of a justified and competitive offer.
            For highly sought-after pieces, the buyback price may even exceed the standard market rate.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: "#1e40af", fontWeight: "600" }}>Clear & Transparent Offers</Typography>
          <Typography mt={1}>
            Evaluations are conducted using precise, disclosed criteria. Mr. Meyer guarantees firm offers tailored to your artwork for optimal selling conditions.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: "#1e40af", fontWeight: "600" }}>Immediate Purchase – No Commission</Typography>
          <Typography mt={1}>
            Immediate, commission-free purchases backed by a financially independent structure, enabling secure and reliable transactions.
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: '#3b82f6', my: 6, borderWidth: "2px" }} />

      <Box mb={4}>
        <Typography variant="h4" sx={{ 
          color: "#1e40af",
          fontWeight: "600",
          textShadow: "0 1px 2px rgba(30, 64, 175, 0.2)"
        }}>Mr. Rodolphe Meyer – A Passion for Art</Typography>
        <Typography mt={1}>
          Mr. Meyer’s primary mission is to acquire artworks through direct, immediate purchase, offering an alternative to auctions.
        </Typography>

        <Typography mt={2} fontWeight="bold">Our Commitments:</Typography>
        <ul style={{ marginLeft: '20px' }}>
          <li>Free travel across Europe (and globally for select artworks)</li>
          <li>Free expertise and fair market offers</li>
          <li>Immediate payment</li>
          <li>0% commission</li>
          <li>Fast response and complete discretion</li>
          <li>Evaluation of all types of art and antique items</li>
        </ul>
      </Box>

      <Divider sx={{ borderColor: '#3b82f6', my: 6, borderWidth: "2px" }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: "#1e40af", fontWeight: "600" }}>How to Sell</Typography>
          <Typography mt={1}><strong>Step 1: Expert Appraisal</strong></Typography>
          <Typography>
            Size, condition, and date of creation impact an artwork's value. A proper evaluation ensures a reliable price.
          </Typography>

          <Typography mt={2}><strong>Step 2: Selling the Artwork</strong></Typography>
          <Typography>
            Choose between private or public sales. Mr. Meyer will help you determine the most suitable method.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: "#1e40af", fontWeight: "600" }}>Art Objects – Beauties of the World</Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Masterpieces by Picasso and other famous artists</li>
            <li>Fabergé Egg</li>
            <li>Fernando Botero bronze sculpture</li>
            <li>Japanese ivory carving</li>
            <li>Japanese coral</li>
            <li><a href="https://tuftingshop.com/fr/blogs/blogposts/the-most-expensive-rugs-in-the-world" target="_blank" rel="noopener noreferrer">The world’s most expensive rug</a></li>
          </ul>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: '#3b82f6', my: 6, borderWidth: "2px" }} />

      <Box textAlign="center">
        <Typography variant="h4" sx={{ 
          color: "#1e40af",
          fontWeight: "600",
          textShadow: "0 1px 2px rgba(30, 64, 175, 0.2)"
        }}>Contact</Typography>
        <Typography mt={2}>📞 +XXXXXXXXXX</Typography>
        <Typography>📍 Address Line 1</Typography>
        <Typography>✉️ contact@yourdomain.com</Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;

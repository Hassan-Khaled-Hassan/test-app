//MyFooter
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import ForestIcon from "@mui/icons-material/Forest";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "#ffffff", mt: 1 }}>
      {" © "}
      <Link color="#FFD700" href="/" sx={{fontWeight : "bold"}}>
        Siwa Garden 
      </Link>
      All Rights Reserved
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function MyFooter() {
  return (
    <Box sx={{ backgroundColor: "#8B4513" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              maxWidth: { xs: "100%", md: "45%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "100%" } }}>
              <Box
                variant="h6"
                component="div"
                sx={{
                  color: "#FFD700",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.7,
                  fontSize: "26px",
                  fontWeight: "bold",
                  flexWrap: "npwrap",
                }}
              >
                <IconButton
                  color="#FFD700"
                  size="small"
                  sx={{ alignSelf: "center" }}
                >
                  <ForestIcon sx={{ color: "#FFD700" }} />
                </IconButton>
                Siwa Garden
              </Box>
              <Typography variant="body2" sx={{ color: "#F4F6FA", mb: 2 }}>
                Subscribe for weekly updates. No spams ever!
              </Typography>
              <InputLabel htmlFor="email-newsletter" sx={{ color: "#F4F6FA" }}>
                Email
              </InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  slotProps={{
                    htmlInput: {
                      autoComplete: "off",
                      "aria-label": "Enter your email address",
                    },
                  }}
                  sx={{
                    width: "250px",
                    backgroundColor: "white",
                    border: "2px solid black",
                    borderRadius: "10px",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    flexShrink: 0,
                    backgroundColor: "black",
                    borderRadius: "12px",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
              <Box
                variant="body2"
                sx={{
                  color: "#F4F6FA",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.7,
                }}
              >
                <IconButton
                  color="#FFD700"
                  size="small"
                  sx={{ alignSelf: "center" }}
                >
                  <EmailIcon sx={{ color: "#FFD700" }} />
                </IconButton>
                Siwa_Garden@contact.com
              </Box>
              <Box
                variant="body2"
                sx={{
                  color: "#F4F6FA",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.7,
                }}
              >
                <IconButton
                  color="#FFD700"
                  size="small"
                  sx={{ alignSelf: "center" }}
                >
                  <PhoneIcon sx={{ color: "#FFD700" }} />
                </IconButton>
                +201234567890 - +201234567891
              </Box>
              <Box
                variant="body2"
                sx={{
                  color: "#F4F6FA",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.7,
                }}
              >
                <IconButton
                  color="#FFD700"
                  size="small"
                  sx={{ alignSelf: "center" }}
                >
                  <LocationOnIcon sx={{ color: "#FFD700" }} />
                </IconButton>
                VILLA202-FIRST NEIGHBORHOOD - SEVENTH DISTRICT - SHEIKH ZAYED -
                EGYPT
              </Box>
              <Box
                variant="body2"
                sx={{
                  color: "#F4F6FA",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.7,
                }}
              >
                <IconButton
                  color="#FFD700"
                  size="small"
                  sx={{ alignSelf: "center" }}
                >
                  <AccessTimeFilledIcon sx={{ color: "#FFD700" }} />
                </IconButton>
                8:00 - 20:00, Sunday - Thursday
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              maxWidth: "100%",
              justifyContent: "space-between",
              width: { xs: "100%", md: "49%" },
              mt: { xs: 4, md: "auto" },
              mb: { xs: 3, md: "auto" },
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "White" }}
              >
                Help Center
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex" },
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  width: "100%",
                }}
              >
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Payments
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Refund
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Shipping
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Q&A
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 1,
                mt: { xs: 2, md: "auto" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Useful Links
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex" },
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  width: "100%",
                }}
              >
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Blogs
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Career
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Our Teems
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Help Center
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 1,
                mt: { xs: 2, md: "auto" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Social Media
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex" },
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  width: "100%",
                }}
              >
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Blogs
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Career
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Our Teems
                </Link>
                <Link
                  color="#ffffff"
                  variant="body1"
                  href="#"
                  sx={{ textDecoration: "none" }}
                >
                  Help Center
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <div>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
              justifyContent: "left",
              color: "text.secondary",
              color: "white",
              mt: { xs: 2, sm: "auto" },
            }}
          >
            Designed & Developed By
            <Box sx={{ fontWeight: "bold" }}>TechLand BS</Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
'use client'
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
import { useDrawer } from "./DrawerContext";
import { drawerWidth } from "@/app/Utils/Roles";
import { usePathname } from "next/navigation";
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
  const { isDrawerOpenSecond} =
    useDrawer();
    const pathname = usePathname();
  return (
    <Box
      sx={{
        backgroundColor: "#4C6444",
        width: {
          xs: "100%",
          md: pathname.includes("/AdminDashboard/admin")
            ? isDrawerOpenSecond
              ? `calc(100% - 243px)`
              : "93.8%"
            : "100%",
          lg: pathname.includes("/AdminDashboard/admin")
            ? isDrawerOpenSecond
              ? `calc(100% - 243px)`
              : "calc(100% - 72px)"
            : "100%",
        },
        m: "auto",
        marginLeft: {
          xs: "auto",
          md: pathname.includes("/AdminDashboard/admin")
            ? isDrawerOpenSecond
              ? "246px"
              : "72px"
            : "auto",
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          px: { xs: "3px", sm: 1 },
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
                  <EmailIcon sx={{ color: "#F1E8D8" }} />
                </IconButton>
                mohamed.saleh@siwagarden.com <br/> mohamed.saleh@siwagarden.com
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
                  <PhoneIcon sx={{ color: "#F1E8D8" }} />
                </IconButton>
                +20 111 991 9899 - +20 111 441 2223
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
                  <LocationOnIcon sx={{ color: "#F1E8D8" }} />
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
                  <AccessTimeFilledIcon sx={{ color: "#F1E8D8" }} />
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
              alignItems: "start",
              width: { xs: "100%", md: "49%" },
              mt: { xs: 4, md: "0" },
              mb: { xs: 3, md: "0" },
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#F4F6FA", mb: 2, textAlign: "center" , fontSize : "30px" , fontWeight : "bold" }}
              >
                Join Us & Save!
              </Typography>
                            <Typography
                variant="body2"
                sx={{ color: "#F4F6FA", mb: 1, textAlign: "center" , fontSize : "20px" , fontWeight : "bold" }}
              >
                Join our exclusive newsletter and be the first to know about new arrivals, special offers, and insider deals!
              </Typography>

                <Stack direction="row" spacing={1} useFlexGap sx={{flexDirection: { xs: "column", md: "row" },}}>
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
                    backgroundColor: "#F1E8D8",
                    borderRadius: "12px",
                    color: "black",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
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
            borderColor: "white",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <div>
            <Copyright  />
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
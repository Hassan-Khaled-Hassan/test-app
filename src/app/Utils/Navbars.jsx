"use client";
import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  useTheme,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import { drawerWidth } from "./Roles";
import { useDrawer } from "./DrawerContext";
import useNavHook from "./useNavHook";
import { usePathname } from "next/navigation"; 
import { useMediaQuery } from "@mui/material";
const CssTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#B5B5B5",
  },
  "& label.Mui-focused": {
    color: "#9D7D43",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
    backgroundColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderWidth: "3px",
      borderRadius: "30px",
      //  backgroundColor: "white",
      color: "red !important",
    },
    "&:hover fieldset": {
      borderColor: "black",
      // backgroundColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: "3px",
      borderRadius: "30px",
      // backgroundColor: "white",
    },
  },
}));
const pages = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About", to: "/About-Us" },
  { id: 3, name: "Products", to: "/Products" },
  { id: 4, name: "Success Stories", to: "/Stories" },
  { id: 5, name: "Blogs", to: "/Blogs" },
  { id: 6, name: "Contact Us", to: "/Contact-Us" },
];

export default function PrimarySearchAppBar() {
  const { openDrawer, isDrawerOpen } = useDrawer();
  // console.log(screenWidth)
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("mmd"));
  const isSmall = useMediaQuery(theme.breakpoints.down("msm"));
  const isBig = useMediaQuery(theme.breakpoints.down("lg"));
  const pathname = usePathname();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          paddingRight: "0px !important",
          zIndex: "1200",

          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(isDrawerOpen && {
            marginLeft: drawerWidth,
            width: "100%",
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              padding: "0px 6px !important",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                maxWidth: !isMobile ? "196px" : !isSmall ? "150px" : "120px",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dyunrntg7/image/upload/v1735150770/Logo_v93bay.png"
                width={400}
                height={200}
                style={{
                  maxWidth: "100%",
                  height: "auto", // for responsive height
                  // maxHeight: "100px", // limit the height to your requirement
                  margin: "10px 3px",
                  mr: "15px",
                  verticalAlign: "middle",
                }}
                alt="Description"
              />
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: isMobile ? "none" : "flex",
                ml: !isBig ? 4 : !isMobile ? 1 : "auto",
                mt: "49px",
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.id}
                  href={page.to}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: pathname === page.to ? "#8B4513" : "#92929D",
                      display: "block",
                      transition: "color 0.6s ease",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "transparent", // Sets the background color to red on hover
                        color: "#8B4513",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                // border: "1.5px solid #8B4513"
                display: isMobile ? "flex" : "none",
              }}
            />
            <Box
              sx={{
                maxWidth: "200px",
                mt: !isMobile ? "46px" : "0px",
              }}
            >
              <CssTextField
                id="name"
                name="name"
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Search"
                // sx={{ marginRight: "10px", marginLeft: "20px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        // onClick={handleTogglePasswordVisibility}
                        edge="end"
                        sx={{
                          // backgroundColor: "#4CAF50",
                          fontSize: "12px",
                          marginBottom: "1px",
                          marginRight: "-6px",
                          p: "6px",
                          color: "#8B4513",
                          "&:hover": { backgroundColor: "transparent" },
                        }}
                      >
                        <SearchIcon
                          sx={{ fontSize: "22px", fontWeight: "bold" }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {!isMobile ? null : (
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="open drawer"
                sx={{
                  mr: 1,
                  marginLeft: isSmall && !isSmallMobile ? 0 : 1,
                  fontSize: "30px",
                  // display: screenWidth <= 992 ? "block" : "none",
                  // ...(isDrawerOpen && { display: "none" }),
                }}
                onClick={openDrawer}
              >
                <MenuIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

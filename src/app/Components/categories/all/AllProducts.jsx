'use client'
import * as React from "react";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/system";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Paper, Typography, Button, Avatar , Container } from "@mui/material";
import Link from "next/link";


const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function AllProducts({response}) {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      // maxWidth="lg"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        maxWidth: "1186px !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: "2px" },
        flexGrow: 1,
        paddingRight: "0px !important",
        paddingLeft: "0px !important",
      }}
    >
      <MyHeaderTwo part1="Our" name=" Blogs" link="/" />
      <Grid container spacing={2}>
        {response.map((testimonial, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link href={`/Blogs/BlogDetails/${testimonial.id}`}>
              <Paper
                component="div"
                // maxWidth="sm"
                sx={{
                  position: "relative",
                  backgroundImage: `url('${testimonial?.image?.url || ""}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  width: { xs: "90%", sm: "87%", md: "94%", lg: "375px" },
                  height: { xs: "300px", sm: "350px", md: "440px" },
                  m: "auto",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s ease, filter 0.3s ease , box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(0.95)",
                    filter: "brightness(0.9)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 120%)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    textAlign: "center",
                    height: "96%",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: { xs: "22px", sm: "22px", md: "24px" },
                      p: "0px 22px",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

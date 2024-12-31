'use client'
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/system";
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
const userTestimonials = [
  {
    id: 1,
    avatar: <FontAwesomeIcon icon={faHandshake} className="fa-fw" />,
    name: "Quality",
  },
  {
    id: 2,
    avatar: <FontAwesomeIcon icon={faHandshake} className="fa-fw" />,
    name: "Integrity",
  },
  {
    id: 3,
    avatar: <FontAwesomeIcon icon={faHandshake} className="fa-fw" />,
    name: "Tradition",
  },
  {
    id: 4,
    avatar: <FontAwesomeIcon icon={faHandshake} className="fa-fw" />,
    name: "Sustainability",
  },
];

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

export default function AllProducts({data}) {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      //   maxWidth="xl"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <MyHeaderTwo
        part1="Our"
        name=" Products"
        link="/"
        paragraphs={[
          "At Nile Garden, our values guide everything we do. They are the foundation of our commitment to excellence and our dedication to delivering the best possible products to our customers.",
        ]}
      />
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {data.map((item, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
            id={item.id}
          >
            <Card
              sx={{
                maxWidth: { xs: "100%", sm: 345 },
                borderRadius: "30px",
                // boxShadow: "none",
                width: "100%",
                border: "2px solid #4CAF50",
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    width: { xs: "196px", sm: "74%" },
                    height: { xs: "auto", sm: "auto" },
                    borderRadius: "50%",
                    backgroundColor: "rgba(232, 232, 232, 0.54)",
                    position: "relative",
                    "--fill": "0%",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    p: "34px 10px",
                    m: "auto",
                    margin: "46px auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    aspectRatio: "1",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                    sx={{
                      width: "97px",
                      // margin: " auto",
                      // objectFit: "cover",
                      height: "auto",
                      // width : "253px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1, // Limit to one line
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis", // Add ellipsis for overflow
                      fontSize: "22px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#8B4513",
                    }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

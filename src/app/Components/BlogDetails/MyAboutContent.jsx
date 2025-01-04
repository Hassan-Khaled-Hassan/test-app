"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SignInCard from "./SignInCard";
import Image from "next/image";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
const MyAboutContent = ({data}) => {
  // console.log(data);
  return (
    <Box sx={{ mt: 6 }}>
      <Container
        id="SignUp"
        maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 0 },
          pb: { xs: 1, sm: 0 },
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: "2px" },
          flexGrow: 1,
          paddingRight: "0px !important",
          paddingLeft: "0px !important",
          // width: "100%",
          m: "auto",
          mt: 6,
          mb: 15,

          // borderTop: "1px solid",
          // borderColor: "divider",
          bgcolor: "white",
        }}
      >
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: "center",
              height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
              marginTop: "0px",
              minHeight: "100%",
              width: "94%",
            },
            (theme) => ({
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                zIndex: -1,
                inset: 0,
                backgroundImage:
                  "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
                backgroundRepeat: "no-repeat",
                ...theme.applyStyles("dark", {
                  backgroundImage:
                    "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
                }),
              },
            }),
          ]}
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 3 },
              p: 0,
              mx: "auto",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                width: { xs: "100%", md: "100%" },
                height: { xs: "350px", md: "500px" },
                maxHeight: "800px",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dsccvadus/image/upload/v1736000870/gyrv5vadvcr6vuiidyzc.png"
                width={568}
                height={466}
                alt="Description"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </Box>
          </Stack>
          <Box
            sx={{
              m: "auto",
              mt: "15px",
              ml: { xs: "10px", sm: "25px" },
              fontSize: { xs: "22px", sm: "30px" },
              fontWeight: "bold",
              color: "#050430",
            }}
          >
            Olive Oil Is Rich in Healthy Monounsaturated Fats
          </Box>
          <Box
            sx={{
              m: "auto",
              mt: "15px",
              ml: { xs: "10px", sm: "25px" },
              fontSize: { xs: "18px", sm: "20px" },
              // fontWeight: "bold",
              color: "#050430",
            }}
          >
            Olive oil is a nutritional powerhouse, rich in monounsaturated fats,
            particularly oleic acid. This healthy fat is known for its ability
            to reduce bad cholesterol levels, lower inflammation, and promote
            heart health. Here are some standout benefits:
          </Box>

          <Box
            sx={{
              m: "auto",
              mt: "15px",
              ml: { xs: "10px", sm: "25px" },
              fontSize: { xs: "18px", sm: "20px" },
              // fontWeight: "bold",
              color: "#050430",
            }}
          >
            <Box
              sx={{
                m: "auto",
                mt: "15px",
                ml: { xs: "10px", sm: "25px" },
                fontSize: { xs: "18px", sm: "20px" },
                // fontWeight: "bold",
                color: "#050430",
              }}
            >
              <span style={{ fontWeight: "bold" }}>1.Heart Health:&nbsp;</span>
              Regular consumption of olive oil can reduce the risk of heart
              disease by lowering bad cholesterol and improving blood vessel
              function.
            </Box>
            <Box
              sx={{
                m: "auto",
                mt: "15px",
                ml: { xs: "10px", sm: "25px" },
                fontSize: { xs: "18px", sm: "20px" },
                // fontWeight: "bold",
                color: "#050430",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                2.Anti- inflammatory Effects:&nbsp;
              </span>
              Packed with antioxidants, including oleocanthal, olive oil can
              help reduce inflammation, potentially lowering the risk of chronic
              diseases.
            </Box>
            <Box
              sx={{
                m: "auto",
                mt: "15px",
                ml: { xs: "10px", sm: "25px" },
                fontSize: { xs: "18px", sm: "20px" },
                // fontWeight: "bold",
                color: "#050430",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                3.Antioxidant Powerhouse:&nbsp;
              </span>
              Extra virgin olive oil is high in vitamins E and K, and
              antioxidants that protect against cellular damage.
            </Box>
            <Box
              sx={{
                m: "auto",
                mt: "15px",
                ml: { xs: "10px", sm: "25px" },
                fontSize: { xs: "18px", sm: "20px" },
                // fontWeight: "bold",
                color: "#050430",
              }}
            >
              <span style={{ fontWeight: "bold" }}>4.Stroke Prevention:&nbsp;</span>
              Studies suggest that olive oil intake is linked to a lower risk of stroke, the second biggest killer after heart disease.
            </Box>
            <Box
              sx={{
                m: "auto",
                mt: "15px",
                ml: { xs: "10px", sm: "25px" },
                fontSize: { xs: "18px", sm: "20px" },
                // fontWeight: "bold",
                color: "#050430",
                textAlign: "center",
              }}
            >
              It's a key ingredient in the Mediterranean diet, known for its
              numerous health benefits. How do you usually use it in your
              cooking?
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MyAboutContent;

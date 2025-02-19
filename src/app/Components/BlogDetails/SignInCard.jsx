'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import {  Container, Stack } from "@mui/material";
import Image from "next/image";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
export default function SignInCard({response}) {

  return (
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
              height: { xs: "350px", md: "550px" },
              maxHeight: "800px",
            }}
          >
            <Image
              src={response.image.url}
              width={568}
              height={466}
              alt="Description"
              style={{
                width: "100%",
                height: "100%",
                // objectFit: "cover",
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
          {response.name}
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
          {response.description} {response?.Benefits?.length > 0 && response?.Benefits[0]?.head !== "" && response?.Benefits[0]?.body !== "" ? "Here are some standout benefits:" : null}
        </Box>
        {response?.Benefits?.length > 0 && (
          <Box
            sx={{
              m: "auto",
              mt: "15px",
              ml: { xs: "10px", sm: "25px" },
              fontSize: { xs: "18px", sm: "20px" },
              color: "#050430",
            }}
          >
            {response.Benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  m: "auto",
                  mt: "15px",
                  ml: {
                    xs: item?.head ? "10px" : "15px",
                    sm: item?.head ? "25px" : "60px",
                  },
                  fontSize: { xs: "18px", sm: "20px" },
                  color: "#050430",
                }}
              >
                {item?.head ? (
                  <span style={{ fontWeight: "bold" }}>
                    {index + 1}.{item.head}:&nbsp;
                  </span>
                ) : null}
                {item.body}
              </Box>
            ))}
          </Box>
        )}
      </Stack>
    </Container>
  );
}

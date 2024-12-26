'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { IconButton, InputAdornment} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { PulseLoader } from "react-spinners";
import GoogleIcon from '@mui/icons-material/Google';

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  border : "0px",
  backgroundColor : "transparent",
  boxShadow:
    "0px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));
export default function SignInCard() {

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "15px",
        width: { xs: "100%", md: "44% !important" },
        m: "auto",
      }}
    >

          <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" , mb:4  , textTransform : "capitalize" , color : "white"}}
      >
        Learn more about the oil making process with out guides.
      </Typography>

      <Typography
        component="h1"
        variant="body1"
        sx={{ width: "100%", color: "white" }}
      >
        Nile Garden’s factory, situated on the Alex Desert Road near Dina Farms,
        boasts an advanced processing facility built to top food industry
        standards. Featuring a cutting-edge laboratory for continuous innovation
        and rigorous quality control, the factory has a current capacity of
        10,000 tons of table olives, with plans to increase to 15,000 tons by
        2025. This positions Nile Garden as a leading producer of olive oil and
        canned foods, committed to high quality and professional service at
        competitive costs.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            borderRadius: "999px",
            p: ["10px 22px", "10px 30px"],
            background: "transparent",
            color: "white",
            border: "2px solid #8B4513",
            width: "300px",
            fontWeight: "bold",
            transition : "all 0.6s",
            ":hover": {
              background: "#8B4513",
              color : "white",
              // border : "0px"
            },
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </Card>
  );
}

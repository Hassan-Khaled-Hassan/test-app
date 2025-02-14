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
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  border: "0px",
  backgroundColor: "transparent",
  boxShadow: "0px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
    padding: theme.spacing(4),
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));
export default function SignInCard({data }) {

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "15px",
        width: { xs: "100%", md: "54% !important" },
        m: "auto",
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          width: "100%",
          fontSize: "40px",
          mb: 3,
          textTransform: "capitalize",
          color: "#000000",
          fontWeight: "bold",
        }}
      >
        {data.name} {data.Part}
      </Typography>
      {data.paragraphs && data.paragraphs.length > 0
        ? data.paragraphs.map((paragraph, index) => (
            <Typography
              component="h1"
              variant="body1"
              key={index}
              sx={{ width: "100%", color: "#000000", fontSize: "20px" }}
            >
              {paragraph}
            </Typography>
          ))
        : null}
    </Card>
  );
}

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
        width: { xs: "100%", md: "58% !important" },
        m: "auto",
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          width: "100%",
          fontSize: {xs : "24px",md : "34px"},
          mb: 4,
          textTransform: "capitalize",
          color: "white",
        }}
      >
        Learn more about the oil making process with out guides.
      </Typography>

      <Typography
        component="h1"
        variant="body1"
        sx={{ width: "100%", color: "white" , fontSize : {xs : "18px",md : "25px"} , textAlign : "justify" }}
      >
        Siwa Garden’s factory, situated on the Alex Desert Road near Dina Farms,
        boasts an advanced processing facility built to top food industry
        standards. Featuring a cutting-edge laboratory for continuous innovation
        and rigorous quality control, the factory has a current capacity of
        10,000 tons of table olives, with plans to increase to 15,000 tons by
        2025. This positions Siwa Garden as a leading producer of olive oil and
        canned foods, committed to high quality and professional service at
        competitive costs.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: {xs:"center",sm:"start"} }}>
        <Link href="/Stories">
          <Button
            sx={{
              borderRadius: "16px",
              p: ["10px 22px", "15px 30px"],
              background: "#F1E8D8",
              color: "#000000",
              width: "195px",
              fontWeight: "bold",
              transition: "all 0.6s",
              ":hover": {
                background: "#F1E8D8",
                color: "#000000",
                // border : "0px"
              },
            }}
            type="submit"
          >
            Read More
          </Button>
        </Link>
      </Box>
    </Card>
  );
}

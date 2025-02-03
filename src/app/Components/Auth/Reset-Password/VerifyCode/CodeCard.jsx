"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import VerifyCodeFunc from './VerifyCodeFunc';
import { ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));
const CssTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#B5B5B5",
  },
  "& label.Mui-focused": {
    color: "#9D7D43",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderWidth: "4px",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: "4px",
      borderRadius: "15px",
    },
  },
}));


const CodeCard = () => {
  const {
    errors,
    register,
    handleSubmit,
    handleClick,
    loadingSpinner,
  }= VerifyCodeFunc();
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "15px",
        width: { xs: "97%", sm: "508px !important" },
      }}
    >
      <Typography
        component="h1"
        variant="body1"
        sx={{ width: "100%", color: "#a3a3a3" }}
      >
        Reset Password !!!
      </Typography>

      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Verification Code
      </Typography>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "20px", color: "darkgrey", mb: 4 }}
      >
        Please set a verified Code that we have send it to you on a mail...
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit((data) => handleClick(data))}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <CssTextField
            name="code"
            placeholder="set your code : XXXXXX"
            type="text"
            id="code"
            autoComplete="code"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={"primary"}
            sx={{
              backgroundColor: "white",
            }}
            size="small"
            {...register("code", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            error={errors.code}
            helperText={
              errors.code && `This field is required, contain 6 numbers.`
            }
          />
        </FormControl>
        <Box
          sx={{ display: { xs: "flex", md: "flex" }, justifyContent: "center" }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "15px",
              p: ["10px 22px", "10px 30px"], // Responsive padding values for mobile and larger screens
              background: "#8B4513",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                boxShadow:
                  "6px -2px 30px 1px rgb(164, 69, 9), -13px 7px 50px 1px rgb(251, 251, 251)",
              },
              // boxShadow:
              //   "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
              width: { xs: "200px", sm: "300px" },
              textTransform: "capitalize",
              my: 2,
            }}
            type="submit"
          >
            Submit
            <PulseLoader
              color="white"
              loading={loadingSpinner}
              margin={2}
              size={10}
              speedMultiplier={0.8}
            />
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Card>
  );
};

export default CodeCard;

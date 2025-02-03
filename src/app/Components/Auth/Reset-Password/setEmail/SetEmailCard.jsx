"use client";
import * as React from "react";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { Box ,Button , FormControl,TextField,Typography } from "@mui/material";
import setEmailFunc from './setEmailFunc'

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
      borderWidth: "3px",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: "3px",
      borderRadius: "15px",
    },
  },
}));

export const SetEmailCard = () => {
  const {
    regEmail,
    errors,
    register,
    handleSubmit,
    handleClick,
    loadingSpinner
  }=setEmailFunc();
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
        Set Your Mail
      </Typography>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "20px", color: "darkgrey", mb: 4 }}
      >
        Please set a verified e-mail to send a verification code to you on this
        mail...
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit((data) => handleClick(data))}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
                    <CssTextField
            name="email"
            placeholder="Set your Email : example@gmail.com"
            type="email"
            autoComplete="email"
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "100px",
            }}
            error={!!errors.Email}
            helperText={errors.Email && `Please enter a valid email address.`}
            {...register("Email", {
              required: true,
              pattern: regEmail,
            })}
            size="small"
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
                width: {xs : "200px",sm :"300px"},
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
      <ToastContainer/>
    </Card>
  );
};

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
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import SignUpFunc from "./SignUpFunc";
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

export default function SignInCard() {
  const {
    regEmail,
    phoneRegExp,
    regPassword,
    showPassword,
    errors,
    register,
    handleSubmit,
    handleClick,
     handleTogglePasswordVisibility,
    address,
    onChangeAddress,
    loadingSpinner
  } = SignUpFunc();

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
        Welcome to our form
      </Typography>

      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign Up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit((data) => handleClick(data))}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <CssTextField
            id="name"
            name="name"
            placeholder="Set your name"
            autoComplete="name"
            size="small"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "100px",
            }}
            {...register("Name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            error={errors.Name}
            helperText={
              errors.Name && `This field is required, min 3 and max 20.`
            }
          />
        </FormControl>
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
        <FormControl>
          <CssTextField
            name="phone"
            placeholder="Set your mobile number ••••••"
            error={!!errors.phone}
            helperText={errors.phone && `Please enter a valid mobile number.`}
            {...register("phone", {
              required: true,
              pattern: phoneRegExp,
            })}
            type="phone"
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "100px",
            }}
            size="small"
          />
        </FormControl>
        <FormControl>
          <CssTextField
            name="password"
            placeholder="Set your password ••••••"
            type={showPassword ? "text" : "password"}
            error={!!errors.pass}
            helperText={
              errors.pass
                ? errors.pass.type === "required"
                  ? "This field is required."
                  : "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                : null
            }
            {...register("pass", {
              required: true,
              pattern: regPassword,
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "100px",
            }}
            size="small"
          />
        </FormControl>
        <FormControl>
          <CssTextField
            name="password"
            placeholder="Set your Confirmation password ••••••"
            type={showPassword ? "text" : "password"}
            error={!!errors.ConfirmPass}
            helperText={
              errors.pass
                ? errors.ConfirmPass.type === "required"
                  ? "This field is required."
                  : "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                : null
            }
            {...register("ConfirmPass", {
              required: true,
              pattern: regPassword,
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "100px",
            }}
            size="small"
          />
        </FormControl>
        <FormControl>
          <CssTextField
            name="address"
            placeholder="Set your Address"
            value={address}
            onChange={onChangeAddress}
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "100px",
            }}
            size="small"
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              p: ["10px 22px", "10px 30px"],
              background: "#C076CB",
              color: "white",
              width: "300px",
              fontWeight : "bold"
            }}
            type="submit"
          >
           Sign Up
           <PulseLoader
  color="white"
  loading = {loadingSpinner}
  margin={2}
  size={10}
  speedMultiplier={0.8}
/>
          </Button>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          Do you have an account?{" "}
          <Link
            href="/Auth/login"
            style={{ color: "#C076CB", textDecoration: "underline" }}
          >
            Sign in
          </Link>
        </Typography>
      </Box>
      <ToastContainer/>
    </Card>
  );
}

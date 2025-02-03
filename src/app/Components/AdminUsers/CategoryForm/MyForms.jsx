"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Dialog,
  InputLabel,
  Select,
  DialogContent,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import { ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";
import useFormFunc from "../../../../../useFormFunc";
import { styled } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import MultiImageInput from "react-multiple-image-input";
import "./main.css";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#4CAF50",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderColor: "#E0E3E7",
    borderWidth: "4px",
    "& fieldset": {
      borderColor: "black",
      borderWidth: "4px",
      color: "black",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
      borderWidth: "4px",
    },
  },
});
const MyForms = () => {
  const [
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    isDrawerOpenSecond,
    control,
    regEmail,
    phoneRegExp,
    regPassword,
    showPassword,
    handleTogglePasswordVisibility,
  ] = useFormFunc();
  // console.log(isDrawerOpenSecond)
  const crop = {
    unit: "%",
    aspect: 1 / 1,
    width: "100",
  };
  // =========================================
  const currencies = [
    {
      name: "Admin",
      id: "admin",
    },
    {
      name: "User",
      id: "user",
    },
  ];
  // ===============================
  return (
    <Box
      sx={{
        flexGrow: 1,
        // height: 400,
        maxWidth: {
          xs: "95%",
          sm: isDrawerOpenSecond ? "calc(100% - 25px)" : `calc(100% - 19px)`,
        },
        margin: isDrawerOpenSecond ? "initial" : "auto",
        marginLeft: {
          xs: "initial",
          md: isDrawerOpenSecond ? "16px" : "initial",
        },
        // mr: {xs :  "auto" , sm : !isDrawerOpenSecond ? "30px" : "auto"},
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        onSubmit={handleSubmit((data) => {
          handleClick(data);
        })}
        noValidate
        autoComplete="false"
      >
        <Stack
          direction={"row"}
          sx={{ gap: 2, flexDirection: { xs: "column", md: "row" } }}
        >
          <FormControl
            sx={{
              width: { xs: "100%", md: "44.5%" },
              marginBottom: { xs: "22px", md: "auto" },
            }}
          >
            <CssTextField
              id="name"
              name="name"
              placeholder="Set your name"
              autoComplete="name"
              // size="small"
              label="Name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              // sx={{
              //   backgroundColor: "white",
              //   borderRadius: "100px",
              //         height : "50.5px"

              // }}
              {...register("Name", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              error={errors.Name}
              helperText={
                errors.Name && `This field is required, min 3 and max 50.`
              }
            />
          </FormControl>
          <FormControl
            sx={{
              width: { xs: "100%", md: "44.5%" },
              // margin : "auto",
              marginBottom: { xs: "22px", md: "auto" },
            }}
          >
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
              // size="small"
            />
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ gap: 2, flexDirection: { xs: "column", md: "row" } }}
        >
          <FormControl
            sx={{
              width: { xs: "100%", md: "44.5%" },
              marginBottom: { xs: "22px", md: "auto" },
            }}
          >
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
              // size="small"
            />
          </FormControl>
          <FormControl
            sx={{
              width: { xs: "100%", md: "44.5%" },
              marginBottom: { xs: "22px", md: "auto" },
            }}
            error={!!errors.Role}
          >
            <InputLabel id="demo-simple-select-helper-label">
              Select Your Type
            </InputLabel>
            <Controller
              name="Role"
              control={control}
              defaultValue=""
              rules={{
                required: "Role is required",
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Select Your Role"
                  className="my-select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                </Select>
              )}
            />
            {errors.Role && (
              <FormHelperText>{errors.Role.message}</FormHelperText>
            )}
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ gap: 2, flexDirection: { xs: "column", md: "row" } }}
        >
          <FormControl
            sx={{
              width: { xs: "100%", md: "44.5%" },
              marginBottom: { xs: "22px", md: "auto" },
            }}
          >
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
              // size="small"
            />
          </FormControl>
          <FormControl
            sx={{
              width: { xs: "100%", md: "44.5%" },
              marginBottom: { xs: "22px", md: "auto" },
            }}
          >
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
              // size="small"
            />
          </FormControl>
        </Stack>
        <Box sx={{ textAlign: "center", width: { xs: "100%", md: "90%" } }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              padding: "11px 28px",
              borderRadius: "13px",
              backgroundColor: "#8B4513",
            }}
          >
            Add User
          </Button>
        </Box>
      </Box>
      <Dialog open={loading} aria-labelledby="responsive-dialog-title">
        <DialogContent sx={{ py: 6, px: 16 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                mt: "15px",
                fontSize: { xs: "25px", sm: "40px" },
                fontWeight: "bold",
                color: "#8B4513",
              }}
            >
              Loading
            </Box>
            <PulseLoader
              // color="#36d7b7"
              color="rgb(139 69 19)"
              cssOverride={{}}
              loading
              margin={7}
              size={15}
              speedMultiplier={0.8}
            />
          </Box>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};

export default MyForms;

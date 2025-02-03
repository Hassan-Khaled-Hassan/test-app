'use client'
import UseChangePassHook from "./UseChangePassHook";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import { styled } from "@mui/material/styles";
import { PulseLoader } from "react-spinners";
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormHelperText,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  InputLabel,
  Select,
  MenuItem ,
  Typography,
  Grid,
  Paper,
  Avatar,
  CssBaseline,
  Box
} from "@mui/material";
const CssTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#B5B5B5",
  },
  "& label.Mui-focused": {
    color: "#4CAF50",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
    backgroundColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "& fieldset": {
      borderColor: "black",
      borderWidth: "4px",
      borderRadius: "8px",
      //  backgroundColor: "white",
      color: "black !important",
    },
    "&:hover fieldset": {
      borderColor: "black",
      // backgroundColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: "4px",
      borderRadius: "8px",
      // backgroundColor: "white",
    },
  },
}));
// eslint-disable-next-line react/prop-types
export default function UserChangePass({ isDrawerOpenSecond, screenWidth, mode }) {
  const [
    register,
    handleSubmit,
    errors,
    handleClick,
    regPassword,
    handleTogglePasswordVisibility,
    showPassword,
    loading,
  ] = UseChangePassHook();
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "auto",
        maxWidth: {
          xs: "95%",
          md: isDrawerOpenSecond ? "calc(100% - 50px)" : "calc(100% - 120px)",
        },
        margin: "auto",
        ml: { xs: "auto", md: "28px" },
        gap: "20px",
        mb: "50px",
        pb: 5,
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={screenWidth > 900 ? 7 : 12}
        md={11.7}
        component={Paper}
        elevation={6}
        sx={{
          backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
          borderRadius: "20px",
          display: "flex",
          width: "100%",
          flexDirection: "row",
          gap: "45px",
          boxShadow:
            "#4CAF50c4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <Grid
          item
          xs={false}
          sm={4}
          md={3.5}
          //component={Paper}
          elevation={6}
          sx={{
            backgroundColor: "transparent",
            borderRight: "2px solid",
            borderColor: "divider",
            height: "80%",
            margin: "auto",
            display: { xs: "none", md: "flex" },
          }}
        ></Grid>
        <Grid
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "40px",
            width: "100%",
          }}
          xs={12}
          sm={screenWidth > 900 ? 7 : 12}
          md={8}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit((data) => {
              handleClick(data);
            })}
            autoComplete="false"
            sx={{ mt: 1, width: "100%" }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Current Password
            </Typography>
            <CssTextField
              error={errors.CurrentPassword}
              helperText={
                errors.CurrentPassword
                  ? errors.CurrentPassword.type === "required"
                    ? "This field is required."
                    : errors.CurrentPassword.type === "pattern"
                    ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                    : null
                  : null
              }
              {...register("CurrentPassword", {
                required: true,
                pattern: regPassword,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Current Password"
              id="Password11"
              size="small"
              type={showPassword ? "text" : "password"}
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
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              New Password
            </Typography>
            <CssTextField
              error={errors.NewPassword}
              helperText={
                errors.NewPassword
                  ? errors.NewPassword.type === "required"
                    ? "This field is required."
                    : errors.NewPassword.type === "pattern"
                    ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                    : null
                  : null
              }
              {...register("NewPassword", {
                required: true,
                pattern: regPassword,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="New Password"
              id="NewPassword"
              size="small"
              autoComplete="Address"
              type={showPassword ? "text" : "password"}
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
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              Confirm New Password
            </Typography>
            <CssTextField
              error={errors.ConfirmedPassword}
              helperText={
                errors.ConfirmedPassword
                  ? errors.ConfirmedPassword.type === "required"
                    ? "This field is required."
                    : errors.ConfirmedPassword.type === "pattern"
                    ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                    : null
                  : null
              }
              {...register("ConfirmedPassword", {
                required: true,
                pattern: regPassword,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Confirm New Password"
              id="ConfirmedPassword"
              size="small"
              autoComplete="Address"
              type={showPassword ? "text" : "password"}
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
            />
            <Grid item xs={12}>
              <Stack sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: { xs: "200px", sm: "300px" },
                    mr: "auto",
                    ml: "auto",
                    borderRadius: " 20px",
                    p: "15px 30px",
                    background: "#8B4513",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      boxShadow:
                        "6px -2px 30px 1px rgb(164, 69, 9), -13px 7px 50px 1px rgb(251, 251, 251)",
                    },
                    mt: 3,
                    mb: 3,
                  }}
                >
                  Save Changes
                </Button>
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
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
    </Grid>
  );
}

'use client'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormHelperText,
  Stack,
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
import UseProfileHook from "./UseProfileHook";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import Badge from '@mui/material/Badge';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";
// eslint-disable-next-line react/prop-types
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
export default function UserProfile({ isDrawerOpen ,screenWidth ,mode , response }) {
  const [
    regEmail,
    register,
    handleSubmit,
    errors,
    handleClick,
    showPassword,
    handleTogglePasswordVisibility,
    regPassword,
    loading,
     imageSrc,
    handleImageChange,
    triggerFileInput,
    handleDeleteImage
  ] = UseProfileHook(response);
  const theme = useTheme();
  // console.log(response);
  //#FCFCFD
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "auto",
        maxWidth: {
          xs: "95%",
          md: isDrawerOpen ? "calc(100% - 50px)" : "calc(100% - 120px)",
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
        xs={false}
        sm={4}
        md={3.5}
        component={Paper}
        elevation={6}
        sx={{
          backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
          display: { xs: "none", md: "flex" },
          borderRadius: "20px",
          boxShadow:
            "#4CAF50c4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", //8B4513
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              py: "44%",
              mx: { xs: 1.5, lg: 3 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  <EditIcon
                    sx={{
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      margin: "4px 4px",
                      cursor: "pointer",
                    }}
                    onClick={triggerFileInput}
                  />
                  <ExitToAppIcon
                    sx={{
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      margin: "4px 4px",
                      cursor: "pointer",
                    }}
                     onClick={handleDeleteImage} // Deletes the image
                  />
                </Box>
              }
              // onClick={triggerFileInput}
            >
              <Avatar
                alt={
                  imageSrc ? response?.name ?? "User Avatar" : "User Initials"
                }
                onClick={triggerFileInput}
                src={imageSrc || undefined}
                sx={{
                  mx: isDrawerOpen ? "auto" : "5px",
                  my: 1,
                  width: isDrawerOpen ? 88 : 100,
                  height: isDrawerOpen ? 88 : 100,
                  border: "2px solid grey",
                  cursor: "pointer",
                  color: imageSrc ? "inherit" : "White",
                  fontWeight: "bold",
                  fontSize: imageSrc ? "inherit" : "40px",
                  backgroundColor: "#8B4513",
                }}
              >
                {!imageSrc &&
                  (response?.name
                    ?.trim()
                    ?.split(" ")
                    ?.filter((word) => word.length > 0)
                    ?.slice(0, 2)
                    ?.map((word) => word.charAt(0).toUpperCase())
                    ?.join("") ??
                    "U")}
              </Avatar>
            </Badge>
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
            <Typography
              align="center"
              sx={{
                fontSize: isDrawerOpen ? "17px" : "25px",
              }}
            >
              {response.name}
            </Typography>
            <Box sx={{ width: "100%", margin: "auto" }}>
              <Typography
                component="h1"
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  paddingTop: "8px",
                }}
              >
                Recommended dimensions: 200x200, maximum file size: 5MB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={screenWidth > 900 ? 7 : 12}
        md={8}
        component={Paper}
        elevation={6}
        sx={{
          backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
          borderRadius: "20px",
          boxShadow:
            "#4CAF50c4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "40px",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              backgroundColor: "#8B4513",
              display: { xs: "none", md: "flex" },
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            component="h1"
            variant="h5"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Account Details
          </Typography>
          <Box
            sx={{
              p: "0%",
              display: { xs: "flex", md: "none" },
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  <EditIcon
                    sx={{
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      margin: "4px 4px",
                      cursor: "pointer",
                    }}
                    onClick={triggerFileInput}
                  />
                  <ExitToAppIcon
                    sx={{
                      // backgroundColor: "white",
                      // borderRadius: "50%",
                      margin: "4px 4px",
                      cursor: "pointer",
                    }}
                     onClick={handleDeleteImage} // Deletes the image
                  />
                </Box>
              }
              // onClick={triggerFileInput}
            >
              <Avatar
                alt={
                  imageSrc ? response?.name ?? "User Avatar" : "User Initials"
                }
                onClick={triggerFileInput}
                src={imageSrc || undefined}
                sx={{
                  mx: isDrawerOpen ? "auto" : "5px",
                  my: 1,
                  width: isDrawerOpen ? 88 : 100,
                  height: isDrawerOpen ? 88 : 100,
                  border: "2px solid grey",
                  cursor: "pointer",
                  color: imageSrc ? "inherit" : "White",
                  fontWeight: "bold",
                  fontSize: imageSrc ? "inherit" : "40px",
                  backgroundColor: "#8B4513",
                }}
              >
                {!imageSrc &&
                  (response?.name
                    ?.trim()
                    ?.split(" ")
                    ?.filter((word) => word.length > 0)
                    ?.slice(0, 2)
                    ?.map((word) => word.charAt(0).toUpperCase())
                    ?.join("") ??
                    "U")}
              </Avatar>
            </Badge>
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
            <Box
              sx={{
                pt: "4%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "flex-start", sm: "space-between" },
                }}
              >
                <Typography
                  //align="center"
                  sx={{
                    fontSize: isDrawerOpen ? "17px" : "22px",
                    paddingLeft: "10px",
                  }}
                >
                  {response.name}
                </Typography>
              </Box>
              <Typography
                component="h1"
                variant="subtitle1"
                sx={{
                  ps: "5px",
                  paddingTop: "3px",
                  pl: "5px",
                  color: "rgb(151, 161, 186)",
                }}
              >
                Recommended dimensions: 200x200, maximum file size: 5MB
              </Typography>
            </Box>
          </Box>
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
              Name
            </Typography>
            <CssTextField
              error={errors.FirstName}
              helperText={
                errors.FirstName
                  ? `This field is required , min 3 and max 20.`
                  : null
              }
              {...register("FirstName", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Set Your Name"
              id="Name"
              size="small"
              autoComplete="Name"
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              Email
            </Typography>
            <CssTextField
              error={errors.Email}
              helperText={
                errors.Email ? `Please enter a valid email address.` : null
              }
              {...register("Email", {
                required: true,
                pattern: regEmail,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Email"
              id="Email"
              size="small"
              autoComplete="Email"
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              Mobile_Number
            </Typography>
            <CssTextField
              name="phone"
              label="Set your mobile number ••••••"
              error={!!errors.phone}
              helperText={errors.phone && `Please enter a valid mobile number.`}
              {...register("phone", {
                required: true,
                // pattern: phoneRegExp,
              })}
              type="phone"
              fullWidth
              variant="outlined"
              size="small"
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
        </Box>
      </Grid>
    </Grid>
  );
}

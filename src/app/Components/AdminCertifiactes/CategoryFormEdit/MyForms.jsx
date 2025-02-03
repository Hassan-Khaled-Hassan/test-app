'use client'
import {  Box, Button, Dialog, DialogContent,FormControl,FormHelperText, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import { ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";
import useFormFunc from "./useFormFunc";
import { styled } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import MultiImageInput from "react-multiple-image-input";
import './main.css'
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#4CAF50',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: "white",
    borderColor: '#E0E3E7',
    borderWidth: "4px",
    '& fieldset': {
      borderColor: 'black',
      borderWidth : "4px",
      color : "black",
      borderRadius : "10px",
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
      borderWidth: "4px",
    },
  },
});
const MyForms = ({response}) => {
  const {
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    isDrawerOpenSecond,
    control,
  } = useFormFunc(response);
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
        // mr: {xs :  "auto" , sm : !isDrawerOpenSecond? "30px" : "auto"},
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 5 }}
        onSubmit={handleSubmit((data) => {
          handleClick(data);
        })}
        noValidate
        autoComplete="false"
      >
        <Stack sx={{ gap: 2, flexDirection: { xs: "column", md: "row" } }}>
          <FormControl sx={{ width: { xs: "100%", md: "90%" } }}>
            <Controller
              name="images"
              control={control}
              default={response.data.image ? { 0: response.data.image } : {}} // Convert single image to object
              rules={{
                validate: (value) =>
                  Object.keys(value).length > 0 ||
                  "At least one image is required",
              }}
              render={({ field }) => (
                <div>
                  <MultiImageInput
                    images={field.value}
                    setImages={field.onChange} // Pass onChange handler to update form state
                    allowCrop={false}
                    cropConfig={{ crop, ruleOfThirds: true }}
                    max={1} // Limit to 1 image
                    theme={{
                      background: "transparent",
                      outlineColor: "#003366",
                      textColor: "rgba(255,255,255,0.6)",
                      buttonColor: "#ff0e1f",
                      modalColor: "#ffffff",
                    }}
                  />
                </div>
              )}
            />

            {errors.images && (
              <FormHelperText error>{errors.images.message}</FormHelperText>
            )}
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ gap: 2, flexDirection: { xs: "column", md: "row" } }}
        >
          <FormControl
            sx={{
              width: { xs: "100%", md: "44%" },
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
              width: { xs: "100%", md: "44%" },
              marginBottom: { xs: "22px", md: "auto" },
            }}
          >
            <CssTextField
              id="description"
              name="description"
              placeholder="Set your description"
              autoComplete="description"
              // size="small"
              label="Description"
              autoFocus
              required
              fullWidth
              variant="outlined"
              // sx={{
              //   backgroundColor: "white",
              //   borderRadius: "100px",
              //         height : "50.5px"

              // }}
              {...register("Description", {
                required: true,
                minLength: 10,
              })}
              error={errors.Description}
              helperText={
                errors.Description && `This field is required, min 10`
              }
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
            Save Changes
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

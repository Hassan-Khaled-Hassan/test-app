'use client';

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  backgroundColor : "#F5F5DC",
  borderRadius : "25px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "650px",
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
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white", // Ensure the background is white
    borderRadius: "15px",
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
  "& .MuiInputBase-input": {
    backgroundColor: "transparent", // Placeholder's background is unaffected
    color: "inherit", // Inherit color for text
  },
}));


export default function SignInCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Card variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        We love to hear from you!
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        autoComplete="false"
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <CssTextField
            id="CompanyName"
            type="Name"
            name="CompanyName"
            placeholder="Company Name"
            autoComplete="name"
            autoFocus
            required
            fullWidth
            size="small"
            variant="outlined"
            error={errors.Company}
            helperText={errors.Company ? `Company Name is required. ` : null}
            {...register("Company", {
              required: true,
            })}
          />
        </FormControl>
        <FormControl>
          <CssTextField
            id="Name"
            type="Name"
            name="Name"
            placeholder="Full Name"
            autoComplete="name"
            autoFocus
            required
            fullWidth
            size="small"
            variant="outlined"
            error={errors.Name}
            helperText={errors.Name ? `Full Name is required. ` : null}
            {...register("Name", {
              required: true,
            })}
          />
        </FormControl>
        <FormControl>
          <CssTextField
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            size="small"
            variant="outlined"
            error={errors.email}
            helperText={errors.email ? `Full Name is required.` : null}
            {...register("email", {
              required: true,
              pattern: regEmail,
            })}
          />
        </FormControl>
        <FormControl>
          <CssTextField
            id="phone"
            type="phone"
            name="phone"
            placeholder="Set your Phone"
            autoComplete="Phone"
            autoFocus
            required
            fullWidth
            size="small"
            variant="outlined"
            error={errors.phone}
            helperText={errors.phone ? `Full Name is required.` : null}
            {...register("phone", {
              required: true,
            })}
          />
        </FormControl>
        <FormControl>
          <CssTextField
            id="Requirements"
            type="text"
            name="Requirements"
            placeholder="Set your Requirements"
            autoComplete="Requirements"
            autoFocus
            required
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            error={errors.Requirements}
            helperText={errors.Requirements ? `Full Name is required. ` : null}
            {...register("Requirements", {
              required: true,
            })}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#8B4513",
            color: "white",
            borderRadius: "15px",
            width: { xs: "80%", sm: "50%" },
            m: "auto",
          }}
        >
          Submit
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}></Box>
    </Card>
  );
}

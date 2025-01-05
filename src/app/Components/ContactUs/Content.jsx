"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ContactMailIcon from '@mui/icons-material/ContactMail';

const items = [
  {
    icon: <ContactMailIcon sx={{ color: "text.secondary",fontWeight: "bold" , fontSize : "40px", mt: "9px"  }} />,
    title: "Get in touch!!!",
    description:"Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    descriptionTwo:"Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  }
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: 450,
      }}
    >
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" ,  fontSize: "20px" , mt : 2}}>
              {item.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary",fontSize: "20px", mt : 2 }}>
              {item.descriptionTwo}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}

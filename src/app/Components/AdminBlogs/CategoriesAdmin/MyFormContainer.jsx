"use client";
import MyHeaderThree from "@/app/Utils/MyHeaderThree";
import React, { useEffect, useState } from "react";
import {
  Box,
  useTheme,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import { drawerWidth } from "@/app/Utils/Roles";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { ToastContainer } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import useCategoriesHook from "./useCategoriesHook";
import "./main.css";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";

const MyFormContainer = ({ part1, name, newItems }) => {
  const { isDrawerOpenSecond, screenWidth, handleDeleteClick, loading } =
    useCategoriesHook();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
      align: "center",
      headerAlign: "center",
      headerClassName: "super-app-theme--headertwo",
    },
    {
      field: "name",
      headerName: "Name",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      align: "center",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "description",
      headerName: "Description",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      align: "center",
      headerAlign: "center",
      headerClassName: "super-app-theme--headertwo",
    },
    {
      field: "image",
      headerName: "Image",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 140,
      align: "center",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row: { image } }) => (
        <Box display="flex" justifyContent="center" alignItems="center">
          {image && (
            <Image src={image} width={80} height={45} alt="Description" />
          )}
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 220,
      align: "center",
      headerAlign: "center",
      headerClassName: "super-app-theme--headertwo",
      renderCell: ({ row: { registrarId } }) => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link
            href={`/AdminDashboard/admin/Blogs/allBlogs/${registrarId}`}
            passHref
          >
            <IconButton sx={{ backgroundColor: "green", mx: 1 }}>
              <EditNoteIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <IconButton
            onClick={() => handleDeleteClick(registrarId)}
            sx={{ backgroundColor: "red", mx: 1 }}
          >
            <DeleteIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box
      component={"main"}
      sx={{
      padding: { xs: "117px 0px", sm: "10px 0px", md: "40px 0px" },
      width: {
        xs: "98%",
        md: isDrawerOpenSecond ? `calc(100% - ${drawerWidth}px)` : "91%",
      },
      m: "auto",
      marginLeft: {
        xs: "auto",
        md: isDrawerOpenSecond ? "246px" : "79px",
      },
    }}
    >
      <MyHeaderThree
        part1={part1}
        name={name}
        paragraphs={["This page displays all Blogs"]}
      />

      <Box sx={{ height: 625 }}>
        <Box
          sx={{
            flexGrow: 1,
            height: 596,
            maxWidth: screenWidth < 600 ? "95%" : "95%",
            margin: "auto",
            "& .super-app-theme--header": {
              backgroundColor: "#bab9ba",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            },
            "& .super-app-theme--headertwo": {
              backgroundColor: "#8B4513",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            },
          }}
        >
          <DataGrid
            rows={newItems}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 10 } },
            }}
            pageSizeOptions={[10, 20, 25, { value: -1, label: "All" }]}
            // columnVisibilityModel={{ registrarId: false }}
            slots={{ toolbar: GridToolbar }}
            sx={{
              border: 5,
              borderColor: "#8B4513",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: 7,
            }}
          />
        </Box>

        <Dialog open={loading}>
          <DialogContent sx={{ py: 6, px: 16 }}>
            <Typography
              className="myAnimation"
              sx={{ fontSize: "43px", color: "black" }}
            >
              Deleting Now....
            </Typography>
          </DialogContent>
        </Dialog>

        <ToastContainer />
      </Box>
    </Box>
  );
};

export default MyFormContainer;

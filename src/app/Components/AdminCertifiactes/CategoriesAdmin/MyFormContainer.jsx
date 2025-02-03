'use client'
import MyHeaderThree from "@/app/Utils/MyHeaderThree";
import React, { useEffect, useState } from "react";
import { Box, useTheme , Typography ,   Dialog,
  DialogContent, } from "@mui/material";
import { drawerWidth } from "@/app/Utils/Roles";
 import { useDrawer } from "@/app/Utils/DrawerContext";
import { ToastContainer } from 'react-toastify';
import { DataGrid , GridToolbar } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Image from "next/image";
import useCategoriesHook from  './useCategoriesHook';
import './main.css';
import Link from "next/link";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditNoteIcon from "@mui/icons-material/EditNote";
const MyFormContainer = ({part1 , name ,newItems}) => {
  const {
    anchorEl,
    openButton,
    handleClick,
    handleCloseTwo,
    isDrawerOpenSecond,
    OpenMenu,
    User,
    setUser,
    Request,
    setRequest,
    Images,
    setImages,
    handleClose,
    theme,
    screenWidth,
    setOpenMenu,
    handleDeleteClick,
    loading,
  } = useCategoriesHook();
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
      field: "registrarId",
      headerName: "Registrar ID",
      flex: screenWidth > 600 ? 0.8 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      headerClassName: "super-app-theme--headertwo",
      headerAlign: "center",
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
      renderCell: ({ row: { image, registrarId, name } }) => {
        return (
          <Box
            width="100%"
            //  m="7px auto"
            //  p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ flexWrap: "nowrap", cursor: "pointer", height: "100%" }}
            // onClick={() => {
            //   if(images=== ""){
            //     return;
            //   }
            //   setUser(name);
            //   setRequest(registrarId);
            //   setOpenMenu(true);
            //   const filteredItem = baseData.find(
            //     (item) => item._id === registrarId
            //   );
            //   if (
            //     filteredItem &&
            //     filteredItem.images &&
            //     filteredItem.images.length > 0
            //   ) {
            //     setImages(filteredItem.images.filter(Boolean)); // Filter out null or undefined values
            //   }
            // }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                width: { md: "466px", lg: "568px" },
                justifyContent: "center",
                // height: "500px",
              }}
            >
              {image === "" ? null : (
                <Image
                  src={image}
                  width={500}
                  height={500}
                  alt="Description"
                  style={{ width: "80px", height: "45px" }}
                />
              )}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 220,
      align: "center",
      headerAlign: "center",
      headerClassName: "super-app-theme--headertwo",
      renderCell: ({ row: { delete: deleteValue, registrarId } }) => {
        return (
          <Box
            width="100%"
            // m="7px auto"
            // p="5px"
            height="100%"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer" }}
          >
            <Link
              href={`/AdminDashboard/admin/Certificates/allCertificates/${registrarId}`}
              passHref
            >
              <IconButton
                aria-label="edit"
                sx={{
                  backgroundColor: theme.palette.success.main,
                  display: "flex",
                  justifyContent: "space-evenly",
                  m: "0px 8px",
                  ":hover": {
                    backgroundColor: theme.palette.success.main,
                  },
                }}
              >
                <EditNoteIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteClick(registrarId)}
              sx={{
                backgroundColor: theme.palette.error.main,
                display: "flex",
                justifyContent: "space-evenly",
                m: "0px 8px",
                ":hover": {
                  backgroundColor: theme.palette.error.main,
                },
              }}
            >
              <DeleteIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        );
      },
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
        paragraphs={["this page to display all Certificates"]}
      />
      <Box
        sx={{
          height: 625,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: 596,
            maxWidth: `${
              screenWidth < 600 ? "95%" : isDrawerOpenSecond ? "95%" : `95%`
            }`,
            margin: "auto",
            mr: `${
              screenWidth < 600 ? "auto" : !isDrawerOpenSecond ? "30px" : "auto"
            }`,
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
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20, 25, { value: -1, label: "All" }]}
            columnVisibilityModel={{ registrarId: false }}
            slots={{ toolbar: GridToolbar }}
            align="center"
            // checkboxSelection
            sx={{
              border: 5,
              borderColor: "primary.light",
              borderColor: "#8B4513",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: 7,
            }}
          />
        </Box>
        <Dialog
          open={loading}
          aria-labelledby="responsive-dialog-title"
          sx={{ borderRadius: "20px" }}
        >
          <DialogContent sx={{ py: 6, px: 16, borderRadius: "20px" }}>
            <Typography
              className="myAnimation"
              sx={{ mt: "3px", fontSize: "43px", color: "black" }}
            >
              Deleting Now....
            </Typography>
          </DialogContent>
        </Dialog>
        <ToastContainer />
      </Box>
    </Box>
  );
}

export default MyFormContainer
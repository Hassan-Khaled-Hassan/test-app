"use client";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/system";
import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Avatar,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText ,
  DialogTitle ,
  Slide
} from "@mui/material";
import Link from "next/link";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import './main.css';
import MyPaginate from "@/app/Utils/MyPaginate";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AllProducts({ Categories, id, Products }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(Categories)
  return (
    <Container
      // maxWidth="lg"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        maxWidth: "1460px !important",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: { xs: "row", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "98%", sm: "96%" },
          margin: "10px auto",
          padding: "0 1%",
        }}
      >
        <Box
          sx={{
            mt: "15px",
            fontSize: { xs: "26px", sm: "40px" },
            fontWeight: "bold",
            color: "black",
            // textAlign : "center",
          }}
        >
          Products
        </Box>
        <Box
          sx={{
            mt: "15px",
            fontSize: { xs: "26px", sm: "40px" },
            fontWeight: "bold",
            color: "black",
            // textAlign : "center",
          }}
        >
          <IconButton
            aria-label="delete"
            color="black"
            onClick={handleClickOpen}
          >
            <FilterAltOutlinedIcon
              sx={{ color: "black", fontWeight: "bold", fontSize: "42px" }}
            />
          </IconButton>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{
          width: "100%",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 3, lg: 2.5 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              maxWidth: "100%",
              justifyContent: "flex-start",
              width: { xs: "100%", md: "100%" },
              mt: { xs: 4, md: "auto" },
              mb: { xs: 3, md: "auto" },
              backgroundColor: "transparent",
              p: "12px",
              borderRadius: "35px",
              border: "6px solid #4C6444",

              // height : "100%",
            }}
          >
            <Link href={`/Products`} passHref>
              <Typography
                variant="body2"
                sx={{
                  color: "#4C6444",
                  mb: 1,
                  mt: 2,
                  // textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                All Categories
              </Typography>
            </Link>
            {Categories?.data?.map((list) => (
              <List
                key={list.id} // Added unique key here
                sx={{
                  width: "100%",
                  // bgcolor: "#F5F5DC",
                  // m: "auto",
                }}
                id={list.id}
                aria-labelledby={`nested-list-${list.id}`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    px: 2.5,
                    fontWeight: "bold",
                    fontSize: "34px",
                    backgroundColor:
                      list.id === Number(id) ? "#4C6444" : "transparent",
                  }}
                  component={Link}
                  to={`/Products/Category/${list.id}/ALL`}
                >
                  <ListItemText
                    primary={list.name}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "34px !important",
                      color: list.id === Number(id) ? "white" : "black",
                    }}
                  />
                </ListItemButton>
              </List>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9.5 }}>
          <Grid container spacing={2}>
            {Products?.data && Products.data.length > 0 ? (
              Products.data.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Link href={`/Products`} passHref>
                    <Card
                      sx={{
                        borderRadius: "30px",
                        width: { xs: "98%", sm: "98%", md: "98%", lg: "100%" },
                        boxShadow: "none",
                        border: "1px solid #D9D9D9",
                        m: "auto",
                        cursor: "pointer",
                      }}
                    >
                      <CardActionArea
                        component="div"
                        sx={{ width: "100%", height: "100%" }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            backgroundColor: "transparent",
                            borderRadius: "15px",
                            p: "38px 10px 14px",
                            m: "auto",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={item?.imageCover?.url || ""}
                            alt="green iguana"
                            sx={{
                              width: "80%",
                              margin: " auto",
                              objectFit: "cover",
                              height: "100%",
                            }}
                          />
                        </Box>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              fontSize: "25px",
                              textAlign: "center",
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            {item?.name || ""}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              display: "flex",
                              fontSize: "20px",
                              textAlign: "center",
                              color: "#696969",
                              fontWeight: "600",
                            }}
                          >
                            {item?.description || ""}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "15px",
                              fontSize: "20px",
                              p: ["15px 22px", "15px 30px"],
                              background: "#4C6444",
                              color: "white",
                              fontWeight: "bold",
                              margin: "auto",
                              "&:hover": {
                                boxShadow:
                                  "6px -2px 30px 1px rgb(45, 88, 15), -13px 7px 50px 1px rgb(251, 251, 251)",
                              },
                              width: { xs: "100%", sm: "100%" },
                              textTransform: "capitalize",
                            }}
                          >
                            More Details
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "column" },
                  maxWidth: "100%",
                  justifyContent: "center",
                  width: { xs: "100%", md: "100%" },
                  mt: { xs: 4, md: "auto" },
                  mb: { xs: 3, md: "auto" },
                  backgroundColor: "transparent",
                  p: "12px",

                  // height : "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    color: "#888",
                    fontWeight: "bold",
                    mt: 2,
                    fontSize: "25px",
                  }}
                >
                  No products available till now
                </Typography>
              </Box>
            )}
          </Grid>
          {Products?.PaginationResult?.numberOfPages > 0 && (
            <MyPaginate
              Size={Categories?.PaginationResult?.numberOfPages ?? 1}
            />
          )}
        </Grid>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              maxWidth: "100%",
              justifyContent: "flex-start",
              width: { xs: "360px", md: "350px" },
              mt: { xs: 4, md: "auto" },
              mb: { xs: 3, md: "auto" },
              backgroundColor: "transparent",
              // height : "100%",
            }}
          >
            <Link href={`/Products`} passHref>
              <Typography
                variant="body2"
                sx={{
                  color: "#4C6444",
                  mb: 1,
                  mt: 2,
                  // textAlign: "center",
                  fontSize: "23px",
                  fontWeight: "bold",
                }}
              >
                All Categories
              </Typography>
            </Link>
            {Categories?.data?.map((list) => (
              <List
                key={list.id} // Added unique key here
                sx={{
                  width: "100%",
                  // bgcolor: "#F5F5DC",
                  // m: "auto",
                }}
                id={list.id}
                aria-labelledby={`nested-list-${list.id}`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    px: 2.5,
                    fontWeight: "bold",
                    fontSize: "34px",
                    backgroundColor:
                      list.id === Number(id) ? "#4C6444" : "transparent",
                  }}
                  component={Link}
                  to={`/Products/Category/${list.id}/ALL`}
                >
                  <ListItemText
                    primary={list.name}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "34px !important",
                      color: list.id === Number(id) ? "white" : "black",
                    }}
                  />
                </ListItemButton>
              </List>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

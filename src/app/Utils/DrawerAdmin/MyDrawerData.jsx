'use client'
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./main.css";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
  List,
  Divider,
  IconButton,
  Drawer,
  ListItemButton,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button
} from "@mui/material";
import { drawerWidth } from "../Roles";
import MyDrawerlogic from "./MyDrawerlogic";
import CategoryIcon from '@mui/icons-material/Category';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import MoneyIcon from '@mui/icons-material/Money';
import {
  ContactsOutlined,
  ExpandLess,
  ExpandMore,
  GroupOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Link from "next/link";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation"; 
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AssignmentIcon from "@mui/icons-material/Assignment";
import ForestIcon from '@mui/icons-material/Forest';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
var array1 = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HomeOutlined />,
    // link: "/AdminDashboard/admin",
    link: "#",

  },
  {
    id: 2,
    name: "User Profile",
    icon: <GroupOutlined />,
    link: "/AdminDashboard/admin/UserProfile",
  },
];
var array8 = [
  {
    id: 1,
    name: "Manage Team",
    icon: <GroupOutlined />,
    link: "/AdminDashboard/admin/Users/teams",
  },
  {
    id: 2,
    name: "Users Info",
    icon: <ContactsOutlined />,
    link: "/AdminDashboard/admin/Users/users",
  },
  {
    id: 3,
    name: "Add User",
    icon: <PersonOutlinedIcon />,
    link: "/AdminDashboard/admin/Users/addUser",
  },
];
var array2 = [
  {
    id: 1,
    name: "Add Category",
    icon: <CategoryIcon />,
    link: "/AdminDashboard/admin/Categories/addCategory",
  },
  {
    id: 2,
    name: "ALL Categories",
    icon: <CategoryIcon />,
    link: "/AdminDashboard/admin/Categories/allCategories",
  },
];
var array3 = [
  {
    id: 1,
    name: "Add ClientType",
    icon: <SupervisedUserCircleIcon />,
    link: "/AdminDashboard/admin/ClientTypes/addClientType",
  },
  {
    id: 2,
    name: "ALL ClientTypes",
    icon: <SupervisedUserCircleIcon />,
    link: "/AdminDashboard/admin/ClientTypes/allClientTypes",
  },
];
var array4 = [
  {
    id: 1,
    name: "Add Client",
    icon: <Diversity3Icon />,
    link: "/AdminDashboard/admin/Clients/addClient",
  },
  {
    id: 2,
    name: "ALL Clients",
    icon: <Diversity3Icon />,
    link: "/AdminDashboard/admin/Clients/allClients",
  },
];
var array5 = [
  {
    id: 1,
    name: "Add Certificate",
    icon: <CardMembershipIcon />,
    link: "/AdminDashboard/admin/Certificates/addCertificate",
  },
  {
    id: 2,
    name: "ALL Certificates",
    icon: <CardMembershipIcon />,
    link: "/AdminDashboard/admin/Certificates/allCertificates",
  },
];
var array6 = [
  {
    id: 1,
    name: "Add Blog",
    icon: <AssignmentIcon />,
    link: "/AdminDashboard/admin/Blogs/addBlog",
  },
  {
    id: 2,
    name: "ALL Blogs",
    icon: <AssignmentIcon />,
    link: "/AdminDashboard/admin/Blogs/allBlogs",
  },
];
var array7 = [
  {
    id: 1,
    name: "Add Product",
    icon: <ForestIcon />,
    link: "/AdminDashboard/admin/Products/addProduct",
  },
  {
    id: 2,
    name: "ALL Products",
    icon: <ForestIcon />,
    link: "/AdminDashboard/admin/Products/allProducts",
  },
];
const MyDrawerData = (response) => {
  const [
    open,
    setOpen,
    handleDrawerOpen,
    handleDrawerClose,
    variant,
    theme,
    isDrawerOpenSecond,
    closeDrawerSecond,
    openedMixin,
    closedMixin,
    DrawerHeader,
    handleItemClick,
    openDrawerSecond,
    ListOpen,
    handleClick,
    ListTwoOpen,
    handleClickTwo,
    ListThreeOpen,
    handleClickThree,
    ListFourOpen,
    handleClickFour,
    ListFiveOpen,
    handleClickFive,
    ListSexOpen,
    handleClickSex,
    ListSevenOpen,
    handleClickSeven,
    handleLogout
  ] = MyDrawerlogic();
const pathname = usePathname();
// console.log(response.response.data)
  return (
    <div>
      <CssBaseline />
      <Drawer
        variant={variant}
        open={isDrawerOpenSecond}
        onClose={closeDrawerSecond}
        ModalProps={{ keepMounted: false }}
        // onClick={openDrawerSecond}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ...(isDrawerOpenSecond && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!isDrawerOpenSecond && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
          pt: 7,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: 250,
            borderRight: "3px solid black",
            "& .css-1lwhjos-MuiPaper-root-MuiDrawer-paper": {
              borderRight: "3px solid black",
            },
          }}
          role="presentation"
        >
          <DrawerHeader>
            <IconButton
              onClick={openDrawerSecond}
              sx={{ marginRight: "180px" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Avatar
            sx={{
              mx: isDrawerOpenSecond ? "auto" : "3px",
              my: 3,
              width: isDrawerOpenSecond ? 88 : 50,
              height: isDrawerOpenSecond ? 88 : 50,
              border: "2px solid grey",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "22px",
              backgroundColor: "#8B4513",
              color: "White",
            }}
            alt="User Profile"
            src={response?.response?.data?.profileImage?.url || ""}
            onClick={openDrawerSecond}
          >
            {response?.response?.data?.name
              ?.trim()
              ?.split(" ")
              ?.filter((word) => word.length > 0)
              ?.slice(0, 2)
              ?.map((word) => word.charAt(0).toUpperCase())
              ?.join("") ?? "U"}
          </Avatar>
          <Typography
            align="center"
            sx={{
              fontSize: isDrawerOpenSecond ? "17px" : "0px",
              display: isDrawerOpenSecond ? "block" : "none",
            }}
          >
            {response?.response?.data?.name || ""}
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: isDrawerOpenSecond ? "17px" : "0px",
              color: theme.palette.info.main,
              display: isDrawerOpenSecond ? "block" : "none",
            }}
          >
            Admin
          </Typography>
          <Button
            align="center"
            sx={{
              fontSize: isDrawerOpenSecond ? "17px" : "0px",
              color: "#8B4513",
              display: isDrawerOpenSecond ? "block" : "none",
              margin: "5px auto",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#8b45133d",
              },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Divider />
          <List>
            {array1.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => handleItemClick(item.link)} // Update route on click
                  sx={{
                    minHeight: 48,
                    justifyContent: isDrawerOpenSecond ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      pathname === item.link
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isDrawerOpenSecond ? 3 : "auto",
                      justifyContent: "center",
                      color: "#8B4513",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: isDrawerOpenSecond ? 1 : 0,
                      fontWeight: "500",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickSeven}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <PeopleAltIcon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our Users" />
              {ListSevenOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListSevenOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array8.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <CategoryIcon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our Categories" />
              {ListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array2.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickTwo}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <SupervisedUserCircleIcon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our ClientTypes" />
              {ListTwoOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListTwoOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array3.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickThree}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <Diversity3Icon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our Clients" />
              {ListThreeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListThreeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array4.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickFour}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <CardMembershipIcon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our Certificates" />
              {ListFourOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListFourOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array5.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickFive}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <AssignmentIcon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our Blogs" />
              {ListFiveOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListFiveOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array6.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickSex}
              component="nav"
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpenSecond ? "initial" : "center",
                px: 2,
                bgcolor: theme.palette.mode === "dark" ? "#0e0748" : "white",
              }}
            >
              <ListItemIcon>
                <ForestIcon
                  sx={{
                    fontSize: isDrawerOpenSecond ? "24px" : "35px",
                    marginRight: "8px",
                    color: "#8B4513",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Our Products" />
              {ListSexOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ListSexOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {array7.map((item) => (
                  <Link key={item.id} href={item.link} underline="none">
                    <ListItemButton
                      key={item.id}
                      component="nav"
                      to={item.link}
                      sx={{
                        minHeight: 48,
                        justifyContent: isDrawerOpenSecond
                          ? "initial"
                          : "center",
                        // px: 2.5,
                        pl: 4,
                        bgcolor:
                          pathname === item.link
                            ? theme.palette.mode === "dark"
                              ? grey[800]
                              : grey[300]
                            : null,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          opacity: isDrawerOpenSecond ? 1 : 0,
                          fontWeight: "500",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};

export default MyDrawerData;

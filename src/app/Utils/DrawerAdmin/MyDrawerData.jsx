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
  ListItemText
} from "@mui/material";
import { drawerWidth } from "../Roles";
import MyDrawerlogic from "./MyDrawerlogic";
import CategoryIcon from '@mui/icons-material/Category';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import MoneyIcon from '@mui/icons-material/Money';
import {
  BarChartOutlined,
  Commute,
  ContactsOutlined,
  EmojiTransportation,
  ExpandLess,
  ExpandMore,
  GroupOutlined,
  HomeOutlined,
  MapOutlined,
  Payment,
  Payments,
  Subscriptions,
  TimelineOutlined,
  WebAsset,
} from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Link from "next/link";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation"; 
var array1 = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HomeOutlined />,
    link: "/PatientDashboard",
  },
  {
    id: 2,
    name: "Manage Team",
    icon: <GroupOutlined />,
    link: "/PatientDashboard/team",
  },
  {
    id: 3,
    name: "Users Information",
    icon: <ContactsOutlined />,
    link: "/PatientDashboard/AllUsers",
  },
  {
    id: 4,
    name: "Add User",
    icon: <PersonOutlinedIcon />,
    link: "/PatientDashboard/addUser",
  },
];
const MyDrawerData = () => {
  const [
    open,
    setOpen,
    handleDrawerOpen,
    handleDrawerClose,
    variant,
    theme,
    isDrawerOpen,
    closeDrawer,
    openedMixin,
    closedMixin,
    DrawerHeader,
    handleItemClick
  ] = MyDrawerlogic();
const pathname = usePathname();
  return (
    <div>
      <CssBaseline />
      <Drawer
        variant={variant}
        open={isDrawerOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: false }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ...(isDrawerOpen && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!isDrawerOpen && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
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
            <IconButton onClick={closeDrawer} sx={{ marginRight: "50px" }}>
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
              mx: isDrawerOpen ? "auto" : "5px",
              my: 3,
              width: isDrawerOpen ? 88 : 50,
              height: isDrawerOpen ? 88 : 50,
              border: "2px solid grey",
            }}
            alt="Remy Sharp"
            src="https://iili.io/JGbBCox.jpg"
          />
          <Typography
            align="center"
            sx={{
              fontSize: isDrawerOpen ? "17px" : "0px",
              display: isDrawerOpen ? "block" : "none",
            }}
          >
            hassan khaled
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: isDrawerOpen ? "17px" : "0px",
              color: theme.palette.info.main,
              display: isDrawerOpen ? "block" : "none",
            }}
          >
          User
          </Typography>
          <Divider />
                    <List>
            {array1.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => handleItemClick(item.link)} // Update route on click
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
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
                      mr: isDrawerOpen ? 3 : "auto",
                      justifyContent: "center",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: isDrawerOpen ? 1 : 0, fontWeight: "500" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography
            sx={{
              fontSize: isDrawerOpen ? "19px" : "19px",
              color: theme.palette.secondary.main,
              display: isDrawerOpen ? "flex" : "flex",
              marginLeft: "12px",
              my: 2,
              width: "85%",
              fontWeight: "bold",
            }}
          >
            <CategoryIcon sx={{fontSize: isDrawerOpen ? "24px" : "35px",marginRight : "8px"}}/>
            {isDrawerOpen ? "Categories and sub" : ""}
          </Typography>
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "background.paper", display : isDrawerOpen ? "block" : "none" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <List component="div" disablePadding>
              <ListItemButton
                component="Typography"
                // key={item.id}
                // to={item.link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  // px: 2.5,
                  pl: 4,
                  // bgcolor: grey[800],
                }}
              >
                <FormControlLabel label="Child 2" control={<Checkbox />} />
              </ListItemButton>
            </List>
          </List>
          <Divider />
          <Typography
            sx={{
              fontSize: isDrawerOpen ? "19px" : "19px",
              color: theme.palette.secondary.main,
              display: isDrawerOpen ? "flex" : "flex",
              marginLeft: "12px",
              my: 2,
              width: "85%",
              fontWeight: "bold",
            }}
          >
            <BrandingWatermarkIcon sx={{fontSize: isDrawerOpen ? "24px" : "35px",marginRight : "8px"}}/>
            {isDrawerOpen ? "Brands" : ""}
          </Typography>
          <List
            sx={{ width: "93%", maxWidth: 360, bgcolor: "background.paper",display : isDrawerOpen ? "block" : "none" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <List component="div" disablePadding>
              <ListItemButton
                component="Typography"
                // key={item.id}
                // to={item.link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  // px: 2.5,
                  pl: 4,
                  // bgcolor: grey[800],
                }}
              >
                <FormControlLabel label="Child 2" control={<Checkbox />} />
              </ListItemButton>
            </List>
          </List>
          <Divider />
          <Typography
            sx={{
              fontSize: isDrawerOpen ? "19px" : "19px",
              color: theme.palette.secondary.main,
              display: isDrawerOpen ? "block" : "block",
              marginLeft: "12px",
              my: 2,
              width: "85%",
              fontWeight: "bold",
            }}
          >
            <MoneyIcon sx={{fontSize: isDrawerOpen ? "24px" : "35px",marginRight : "8px"}}/>
            {isDrawerOpen ? "Prices" : ""}
            
          </Typography>
          <ListItemButton
            component="Typography"
            // key={item.id}
            // to={item.link}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              // px: 2.5,
              pl: 4,
              // bgcolor: grey[800],
              display : isDrawerOpen ? "flex" : "none",
            }}
          >
            <Typography
              sx={{
                fontSize: isDrawerOpen ? "16px" : "16px",
                color: theme.palette.secondary.main,
                display: isDrawerOpen ? "block" : "block",
                my: 2,
                width: "25%",
                fontWeight: "bold",
              }}
            >
              From :
            </Typography>
            <input
              className="m-2 text-center input"
              type="number"
              style={{
                color: "black",
                width: "110px",
                height: "40px",
                backgroundColor: "transparent",
                fontSize: "22px",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </ListItemButton>
          <ListItemButton
            component="Typography"
            // key={item.id}
            // to={item.link}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              // px: 2.5,
              pl: 4,
              // bgcolor: grey[800],
              display : isDrawerOpen ? "flex" : "none"
            }}
          >
            <Typography
              sx={{
                fontSize: isDrawerOpen ? "16px" : "16px",
                color: theme.palette.secondary.main,
                display: isDrawerOpen ? "block" : "block",
                my: 2,
                width: "18%",
                fontWeight: "bold",
              }}
            >
              To :
            </Typography>
            <input
              className="m-2 text-center input"
              type="number"
              style={{
                color: "black",
                width: "120px",
                height: "40px",
                backgroundColor: "transparent",
                fontSize: "22px",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </ListItemButton>
        </Box>
      </Drawer>
    </div>
  );
};

export default MyDrawerData;

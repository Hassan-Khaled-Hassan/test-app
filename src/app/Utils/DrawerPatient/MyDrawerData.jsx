'use client'
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
import CloseIcon from "@mui/icons-material/Close";
import MyDrawerlogic from "./MyDrawerlogic";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation"; 
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArticleIcon from '@mui/icons-material/Article';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useMediaQuery } from "@mui/material";
var array1 = [
  { id: 1, name: "Home", link: "/", icon: <HomeIcon /> },
  { id: 2, name: "About", link: "/About-Us", icon: <InfoIcon /> },
  { id: 3, name: "Products", link: "/Products", icon: <InventoryIcon /> },
  { id: 4, name: "Success Stories", link: "/Stories", icon: <AutoStoriesIcon /> },
  { id: 5, name: "Blogs", link: "/Blogs", icon: <ArticleIcon /> },
  { id: 6, name: "Contact Us", link: "/Contact-Us", icon: <ContactPageIcon /> },
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
const isMobile = useMediaQuery(theme.breakpoints.down("mmd"));
  return (
    <div>
      <Drawer
        variant="temporary"
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }} // Ensures that the drawer stays mounted when closed for swipe to work
        sx={{
          display: isMobile ? "block" : "none",
          width: "280px",
          flexShrink: 0,
          ...(isDrawerOpen && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!isDrawerOpen && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
          "& .MuiDrawer-paper": {
            width: "280px",
            backgroundColor: theme.palette.background.paper,
            borderLeft: "7px solid #8B4513", // Optional: Removes the left border for right-side drawers
            transition: "transform 0.3s ease",
            zIndex: "1300", // Optional: Smoother transition for opening and closing
          },
        }}
      >
        <Box sx={{ width: "96%", m: "40px auto" }} role="presentation">
          <DrawerHeader>
            <IconButton
              onClick={closeDrawer}
              sx={{
                marginRight: "15px",
                backgroundColor: "#8B4513",
                color: "white",
                ":hover": {
                  backgroundColor: "#8B4513",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: "32px", fontWeight: "bold" }} />
            </IconButton>
          </DrawerHeader>
          <Image
            src="https://res.cloudinary.com/dyunrntg7/image/upload/v1735150770/Logo_v93bay.png"
            width={400}
            height={200}
            style={{
              maxWidth: "225px",
              height: "auto", // for responsive height
              // maxHeight: "100px", // limit the height to your requirement
              margin: "10px 3px",
              mr: "15px",
              verticalAlign: "middle",
            }}
            alt="Description"
          />
          <List>
            {array1.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => handleItemClick(item.link)}
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
                      color: "#4CAF50",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: isDrawerOpen ? 1 : 0,
                      color: "#050430",
                      fontSize: "22px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "transparent", // Sets the background color to red on hover
                        color: "#8B4513",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MyDrawerData;

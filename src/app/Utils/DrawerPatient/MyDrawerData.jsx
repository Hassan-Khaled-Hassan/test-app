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
  ListItemText,
  Button
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
  { 
    id: 3,
    name: "Products",
    // link: "/Products",
    link: "#",
    icon: <InventoryIcon /> 
  },
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
    handleItemClick,
    openDrawerSecond
  ] = MyDrawerlogic();
const pathname = usePathname();
// console.log(pathname)
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
            backgroundColor: "#4C6444",
            borderLeft: "7px solid #F1E8D8", // Optional: Removes the left border for right-side drawers
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
                backgroundColor: "#F1E8D8",
                color: "#4C6444",
                ":hover": {
                  backgroundColor: "#F1E8D8",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: "32px", fontWeight: "bold" }} />
            </IconButton>
          </DrawerHeader>
          <Image
            src="https://res.cloudinary.com/dsccvadus/image/upload/v1739444892/i0tx8doibxcus7cjkujx.png"
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
                    fontSize: "32px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isDrawerOpen ? 3 : "auto",
                      justifyContent: "center",
                      color: pathname === item.link ? "#F1E8D8" : "white",
                      fontSize: "32px",
                      "&:hover": {
                        backgroundColor: "transparent", // Sets the background color to red on hover
                        color: "#F1E8D8",
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: isDrawerOpen ? 1 : 0,
                      color: pathname === item.link ? "#F1E8D8" : "white",
                      fontSize: "32px",
                      fontWeight: "bold",
                      "& .MuiTypography-root": {
                        backgroundColor: "transparent", // Sets the background color to red on hover
                        fontSize: "20px",
                      },
                      "&:hover": {
                        backgroundColor: "transparent", // Sets the background color to red on hover
                        color: "#F1E8D8",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: {
                xs: pathname.includes("/AdminDashboard/admin")
                  ? "flex"
                  : "none",
                md: "none",
              },
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "15px",
                p: ["10px 22px", "10px 30px"], // Responsive padding values for mobile and larger screens
                background: "#F1E8D8",
                color: "#4C6444",
                fontWeight: "bold",
                "&:hover": {
                  boxShadow:
                    "6px -2px 30px 1px rgb(45, 88, 15), -13px 7px 50px 1px rgb(251, 251, 251)",
                },
                // boxShadow:
                //   "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
                width: { xs: "200px", sm: "300px" },
                textTransform: "capitalize",
              }}
              // type="submit"
              onClick={openDrawerSecond}
            >
              Open Admin Panal
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default MyDrawerData;

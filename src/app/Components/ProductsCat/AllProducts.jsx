"use client";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/system";
import {
  Box,
  Container,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Avatar,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import './main.css';
import MyPaginate from "@/app/Utils/MyPaginate";


const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: "Remy Sharp",
    occupation: "Senior Engineer",
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: "Travis Howard",
    occupation: "Lead Product Designer",
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: "Cindy Baker",
    occupation: "CTO",
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: "Julia Stewart",
    occupation: "Senior Engineer",
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: "John Smith",
    occupation: "Product Designer",
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: "Daniel Wolf",
    occupation: "CDO",
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },

];
export default function AllProducts() {
  const theme = useTheme();

  // Hardcoded lists data
  const [lists, setLists] = React.useState([
    {
      id: 1,
      name: "Category 1",
      items: [
        { id: 101, name: "Item 1", link: "/link1" },
        { id: 102, name: "Item 2", link: "/link2" },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      items: [
        { id: 201, name: "Item A", link: "/linkA" },
        { id: 202, name: "Item B", link: "/linkB" },
        { id: 203, name: "Item C", link: "/linkC" },
      ],
    },
    {
      id: 3,
      name: "Category 3",
      items: [
        { id: 301, name: "Item X", link: "/linkX" },
        { id: 302, name: "Item Y", link: "/linkY" },
      ],
    },
    {
      id: 4,
      name: "Category 4",
      items: [
        { id: 401, name: "Item Alpha", link: "/linkAlpha" },
        { id: 402, name: "Item Beta", link: "/linkBeta" },
      ],
    },
    {
      id: 5,
      name: "Category 5",
      items: [
        { id: 501, name: "Item Omega", link: "/linkOmega" },
        { id: 502, name: "Item Delta", link: "/linkDelta" },
      ],
    },
  ]);

  // Initialize open states for each list
  const [openStates, setOpenStates] = React.useState(
    lists.reduce((acc, list) => {
      acc[list.id] = false;
      return acc;
    }, {})
  );

  // Toggle collapse for a specific list
  const handleToggle = (id) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Grid container spacing={2} columns={12} sx={{ width: "100%" , flexDirection : {xs : "column-reverse",md : "row"} }}>
        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              maxWidth: "100%",
              justifyContent: "flex-start",
              width: { xs: "100%", md: "100%" },
              mt: { xs: 4, md: "auto" },
              mb: { xs: 3, md: "auto" },
              backgroundColor: "#F5F5DC",
              p: "12px",
              borderRadius: "25px",
              // height : "100%",
            }}
          >
            {lists.map((list) => (
              <List
                key={list.id} // Added unique key here
                sx={{
                  width: "100%",
                  bgcolor: "#F5F5DC",
                  // m: "auto",
                }}
                id={list.id}
                component="nav"
                aria-labelledby={`nested-list-${list.id}`}
              >
                <ListItemButton
                  onClick={() => handleToggle(list.id)}
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    px: 2.5,
                    fontWeight: "bold",
                    fontSize: "32px",
                  }}
                >
                  <ListItemText
                    primary={list.name}
                    sx={{ fontWeight: "bold", fontSize: "32px !important" }}
                  />
                  {openStates[list.id] ? (
                    <ExpandLess
                      sx={{ fontWeight: "bold", fontSize: "32px !important" }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{ fontWeight: "bold", fontSize: "32px !important" }}
                    />
                  )}
                </ListItemButton>
                <Collapse in={openStates[list.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {list.items.map((item) => (
                      <ListItem
                        key={item.id} // Added unique key here
                        sx={{ pl: 4, borderBottom: "3px solid #8B4513" }}
                      >
                        <Link href={item.link} underline="none">
                          <ListItemText
                            primary={item.name}
                            sx={{
                              color: "black",
                              fontSize: "32px !important",
                              fontWeight: "bold",
                            }}
                          />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </List>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 9 }}>
          <Grid container spacing={2}>
            {userTestimonials.map((testimonial, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    maxWidth: { xs: "100%", sm: 345 },
                    borderRadius: "30px",
                    boxShadow: "none",
                  }}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        width: "90%",
                        backgroundColor: "transparent",
                        borderRadius: "15px",
                        p: "34px 10px",
                        m: "auto",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://res.cloudinary.com/dyunrntg7/image/upload/v1735150709/Product_vl69rm.png"
                        alt="green iguana"
                        sx={{
                          width: "100%",
                          margin: " auto",
                          objectFit: "cover",
                          height: "242px",
                          // width : "253px",
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
                          WebkitLineClamp: 1, // Limit to one line
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis", // Add ellipsis for overflow
                          fontSize: "16px",
                          textAlign: "center",
                          color: "#050430",
                        }}
                      >
                        MIXED PICKLES GREEK STYLE GIARDINERA
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <MyPaginate/>
        </Grid>
      </Grid>
    </Container>
  );
}

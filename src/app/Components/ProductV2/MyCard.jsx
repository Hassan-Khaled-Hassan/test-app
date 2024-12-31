import { Box, Paper, Typography,Button } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
const MyCard = () => {
  return (
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
                      height: "354px",
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
  );
}

export default MyCard
import {
  Box,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, slug, coverPhoto }) => {
  const style = {
    borderRadius: 1,
    color: "#ffc11e",
    borderColor: "#ffc11e",
    "&:hover": {
      color: "#448c74",
      borderColor: "#448c74",
      cursor: "pointer",
    },
  };

  return (
    <Card
      sx={{
        background: "transparent",
        margin: "0 5px",
        height: "490px",
        borderRadius: "10px",
        boxShadow: "none",
      }}>
      <Card
        sx={{
          backgroundColor: "#181b1e",
          transition: "all 0.50s linear",
          boxShadow: "none",
        }}>
        <CardHeader
          avatar={
            <span
              style={{
                borderRadius: "80px",
                background: "rgba(237, 80, 80, 0.1)",
                color: "#ed5050",
                fontSize: "12px",
                padding: "4px 6px",
                position: "absolute",
              }}>
              Sale
            </span>
          }
        />

        <CardMedia
          component="img"
          image={coverPhoto.url}
          alt="img"
          sx={{ width: "fit-content", margin: "0 auto 20px", height: "330px" }}
        />
      </Card>

      <CardContent
        sx={{
          opacity: 0.7,
          margin: "25px 0 0",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Typography
          variant="h6"
          fontWeight="500"
          marginTop="10px"
          sx={{ color: "#fff" }}>
          {title}
        </Typography>

        <Box component="div">
          <Link
            to={`/products/${slug}`}
            style={{ textDecoration: "none", width: "100%" }}>
            <CardActions>
              <Button variant="outlined" size="samll" sx={style}>
                DETAILS
              </Button>
            </CardActions>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

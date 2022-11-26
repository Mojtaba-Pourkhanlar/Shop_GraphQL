import { useEffect } from "react";
import sanitizeHtml from "sanitize-html";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Container, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_POST_INFE } from "../../graphQL/queries";
import { Spinner } from "../../helper/Spinner/Spinner";
import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data, errors } = useQuery(GET_POST_INFE, {
    variables: { slug },
  });

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#121519",
          textAlign: "center",
          paddingTop: "250px",
        }}>
        <Spinner />
      </div>
    );
  if (errors) return <h1>Errors...</h1>;

  const { title, coverPhoto, content, price } = data.post;

  return (
    <div
      style={{
        backgroundColor: "#121519",
        minHeight: "100vh ",
        transition: "all 0.50s linear",
      }}>
      <Container maxWidth="xl">
        <Box component="div">
          <KeyboardBackspaceIcon
            onClick={() => navigate(-1)}
            style={{
              cursor: "pointer",
              margin: "60px 0",
              color: "#fcc21b",
              fontSize: "40px",
            }}
          />
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              src={coverPhoto.url}
              width="75%"
              height="600px"
              alt="PageBlog"
              style={{
                backgroundColor: "#121519",
                transition: "all 0.50s linear",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              sx={{
                mt: {
                  xs: "0",
                  md: "12rem",
                },
              }}
              fontWeight={600}
              color="#ffffff">
              {title}
            </Typography>

            <Typography variant="h5" color="#ffffff">
              <div
                style={{
                  marginTop: "1rem",
                  color: "#ffffff",
                }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(content.html),
                }}></div>
            </Typography>

            <Typography
              variant="h5"
              marginTop="3rem"
              fontWeight={600}
              color="#ffffff">
              {price}
            </Typography>
          </Grid>
        </Grid>

        <Box component="div" xs={12} sx={{ marginTop: "150px" }}>
          <CommentForm slug={slug} />
        </Box>
        <Box
          component="div"
          xs={12}
          sx={{
            padding: "60px 0",
          }}>
          <Comment slug={slug} />
        </Box>
      </Container>
    </div>
  );
};

export default ProductDetail;

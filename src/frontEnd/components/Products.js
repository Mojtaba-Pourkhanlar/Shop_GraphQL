import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
// GraphQL
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFE } from "../graphQL/queries";
// Components
import { Spinner } from "../helper/Spinner/Spinner";
import { ProductCard } from "./Product/ProductCard";

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data, error } = useQuery(GET_BLOGS_INFE);

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
  if (error) return <h1>Errors...</h1>;

  return (
    <div
      style={{
        backgroundColor: "#121519",
        transition: "all 0.50s linear",
        minHeight: "100vh",
        paddingTop: "50px",
      }}>
      <Container maxWidth="xl">
        <Grid container>
          {data.posts.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <ProductCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

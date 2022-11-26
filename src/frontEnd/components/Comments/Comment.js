import { Avatar, Box, Grid, Typography } from "@mui/material";
// GraphQL
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../../graphQL/queries";


const Comment = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_POST_COMMENT, {
    variables: { slug },
  });

  if (loading) return <h1>Loading...</h1>;
  if (errors) return <h1>Errors...</h1>;

  return (
    <Grid container>
      <Typography
        variant="h5"
        fontWeight={700}
        color="#dbdbdb"
        m={2}>
       Comments
      </Typography>

      {data.comments.map((comment) => (
        <Grid
          item
          xs={12}
          key={comment.id}
          m={2}
          p={2}
          border="1px #616161 solid">
          <Box component="div" display="flex" alignItems="center" mb={3}>
            <Avatar>{comment.name[0]}</Avatar>
            <Typography
              variant="p"
              fontWeight={700}
              mx={2}
              color="#074631">
              {comment.name}
            </Typography>
          </Box>
          <Typography variant="p"
           color="#ccc"
          >
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comment;

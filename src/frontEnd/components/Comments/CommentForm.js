import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
// GraphQL
import { SEND_COMMENT } from "../../graphQL/mutations";
import { notify } from "../../helper/Toast/toast";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const sendHandler = (data) => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      notify("Fill in all the fields.😒", "error");
    }
  };

    if (data && pressed) {
      notify("Submitted and awaiting confirmation 😊", "success");
      setPressed(false);
    }
  

  const CssTextField = {
    "& label": {
      color: "#0f6b45",
    },
    "& input": {
      color: "#dbdbdb",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
    },
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
      }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={600} color="#dbdbdb">
          Form send Comment
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="UserName"
          sx={CssTextField}
          style={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Email"
          sx={CssTextField}
          style={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Descrebtion"
          sx={CssTextField}
          style={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button
            variant="outlined"
            disabled
            sx={{ color: "#fcc21b", borderColor: "#fcc21b" }}>
            Sending ...
          </Button>
        ) : (
          <Button
            onClick={sendHandler}
            variant="outlined"
            sx={{ color: "#fcc21b", borderColor: "#fcc21b" }}>
            Send
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default CommentForm;

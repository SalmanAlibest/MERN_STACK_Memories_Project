import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./style";
import { sendMemory, updateMemory } from "../../../utils/functions";
const Form = () => {
  const { updateData, status } = useSelector((state) => state.updatePost);
  const [dataStatus, setStatus] = useState(status);
  const [postData, setPostData] = useState(
    status !== "ok"
      ? {
          creator: "",
          title: "",
          message: "",
          tags: "",
          selectedFile: "",
        }
      : {
          creator: updateData.creator,
          title: updateData.title,
          message: updateData.message,
          tags: updateData.tags,
          selectedFile: updateData.selectedFile,
          _id: updateData?._id,
        }
  );
  useEffect(() => {
  }, []);
  const classes = useStyles();
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setStatus("loading");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dataStatus === undefined || dataStatus === "loading"
      ? sendMemory(postData)
      : updateMemory(postData);
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Add Your Memory</Typography>
        <TextField
          name="creator"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {dataStatus === undefined || dataStatus === "loading"
            ? "Submit"
            : "Update"}
        </Button>
        <Button
          className={classes.buttonClear}
          variant="contained"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

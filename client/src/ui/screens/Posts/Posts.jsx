import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";

import { fetchPostThunk } from "../../../data/fetchposts/fetchpostthunk";
import { useSelector, useDispatch } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.fetchPost);
  useEffect(() => {
    dispatch(fetchPostThunk());
  }, []);

  return data?.data?.length === undefined ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {data?.data.map((post) => (
        <Grid key={post?._id} item xs={12} sm={6} md={6}>
          <Post data={post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;

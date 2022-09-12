import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BlogCard = (props) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${props.id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:4000/api/blog/${props.id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  console.log(props.userName, props.isUser);

  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        {props.isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {props.userName.charAt(0)}
            </Avatar>
          }
          title={props.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={props.imageUrl}
          alt="Paella dish"
        />
        <CardContent>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            <b> {props.userName}</b>
            {":"} {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default BlogCard;

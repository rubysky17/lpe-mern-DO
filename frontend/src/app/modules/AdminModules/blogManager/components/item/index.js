import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BlogItem({ item }) {
  return (
    <Card sx={{ maxHeight: 756 }}>
      <CardMedia
        component="img"
        height="200"
        alt={item.cover}
        image={item.cover}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" color="secondary">
          Chỉnh sửa
        </Button>
        <Button size="small" variant="contained" color="error">
          Xóa
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogItem;

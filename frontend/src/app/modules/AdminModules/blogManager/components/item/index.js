import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

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
          <Link to={`/admin/sua-bai/${item._id}`} className="text-white">
            Chỉnh sửa
          </Link>
        </Button>

        <Button size="small" variant="contained" color="error">
          Xóa
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogItem;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { formateDate } from '../utils/dateTime';

function Blog({ post, onSelect }) {
  return (
    <Card sx={{ maxWidth: '100%', height: '220px', border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => {onSelect(post)}}>
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="h4" component="div"  sx={{ textTransform: 'capitalize', fontWeight: '600'}}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {formateDate(post.createdAt)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Blog

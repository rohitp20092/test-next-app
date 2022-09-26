import React from 'react';
import { formateDate } from '../utils/dateTime';
import {
  IconButton,
  Divider,
  Box,
  Paper,
  Avatar,
  Typography,
  Grid,
  CardHeader,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function BlogDetails({ post, goBack }) {
  const handleBackClick = () => {
    goBack();
  }
  return (
    <>
      <IconButton onClick={handleBackClick}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" component="div" style={{textTransform: "capitalize" }} fontWeight={600}>
          {post.title}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="subtitle1" color="textSecondary">
          {formateDate(post.createdAt)}
        </Typography>
      </Box>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              '& > :not(style)': {
                height: 50,
              },
            }}
          >
            {post.authors.map((author: { name: string; avatar: string | undefined; }) => (
              <>
              <CardHeader
                avatar={
                  <Avatar
                    alt={author.name }
                    src={author.avatar}
                  />
                }
                title={author.name}
              />
              </>
            ))}  
          </Box>
        </Grid>
        <Grid item xs={12} spacing={4} style={{padding: '0 30px 30px'}}>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </Grid>
      </Grid>
      
      <Typography variant='h4' component="div" style={{padding: '0 30px', fontWeight: '600'}}>Comments</Typography>
      {post.comments.map((comment: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; createdAt: string | number | Date; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <Paper
          elevation={12}
          style={{
            padding: 15,
            margin: 30,
          }}
          variant="elevation"
          square
        >
          <Typography variant="h6" component="div">
            {comment.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {formateDate(comment.createdAt)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comment.description}
          </Typography>
        </Paper>
      ))}
    </>
  )
}

export default BlogDetails;

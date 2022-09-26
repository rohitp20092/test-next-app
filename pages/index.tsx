import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Blog from '../components/blog'
import BlogDetails from '../components/blog-details'
import { Pagination, Grid, Box, Paper } from '@mui/material';

const Home: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [post, setPost] = useState({});
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (posts.length)
      setPaginatedPosts(posts.slice((page - 1) * 5, (page * 5)));
  }, [page, posts]);

  useEffect(() => {
    fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')
      .then((response) => response.json())
      .then((data) => data ? setPosts(data) : console.log(data));
  }, []);

  const handleSelect = (selectPost: React.SetStateAction<{}>) => {
    setPost(selectPost);
  }

  if (!posts.length) {
    return <span>Loading....</span>;
  }

  if (post?.id) {
    return <BlogDetails post={post} goBack={handleSelect} />
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ minHeight: 'auto'}}>
        <h1 className={styles.title} style={{margin: '25px 0'}}>
          Blogs
        </h1>
        <Grid container spacing={2}>

          {paginatedPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} sx={{height:'100%'}}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Blog post={post} onSelect={handleSelect} />
              </Box>
            </Grid>
          ))}

        </Grid>
        <Pagination count={Math.ceil(posts.length / 5)} page={page} onChange={handleChange} sx={{marginTop: '15px'}} />
      </main>
    </div>
  )
}

export default Home

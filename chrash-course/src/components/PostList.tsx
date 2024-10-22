import classes from './Post.module.css';
import Post from './Post.tsx';
import NewPost from '../routes/NewPost.tsx';
import Modal from './Modal.tsx';
import { useState } from 'react';

function PostList({}) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts(post => [postData, ...post]);
  }

  return (
    <>
      <ul className={classes.post}>
        {posts.map(post => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;

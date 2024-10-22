import PostList from '../components/PostList.tsx';
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <PostList />
    </>
  );
}

export default Posts;

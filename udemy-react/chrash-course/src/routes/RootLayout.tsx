import MainHeader from '../components/MainHeader.tsx';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;

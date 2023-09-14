import Header from './Header';
import { Outlet } from 'react-router-dom';
function AppLayout() {
  return (
    <div className='relative h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-50'>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;

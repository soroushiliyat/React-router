import { Link, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
      <h2>داشبورد</h2>
      <nav>
        <Link to="profile">پروفایل</Link> | <Link to="settings">تنظیمات</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
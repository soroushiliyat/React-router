# React Router Demo

This is a practical demo project built with **React**, **Vite**, and **TypeScript** to showcase core routing concepts using `react-router-dom`. It demonstrates how a junior React developer can implement navigation, dynamic routes, and nested layouts in a clean and scalable way.

##Live Demo:
https://react-router-phi-one-74.vercel.app/



## 🔧 Technologies Used

- React 18
- Vite + TypeScript
- React Router v6

## 📚 What This Project Demonstrates

- `useNavigate`: Programmatic navigation between pages
- `useParams`: Reading dynamic route parameters from the URL
- `Outlet`: Rendering nested routes inside a shared layout (e.g. dashboard)

## 🧩 Project Structure

src/ ├── App.tsx ├── main.tsx ├── pages/ │   ├── Home.tsx │   ├── Products.tsx │   ├── ProductDetail.tsx │   ├── DashboardLayout.tsx │   ├── Profile.tsx │   └── Settings.tsx


## 🗺️ Routes Overview

| Path                  | Description                          |
|-----------------------|--------------------------------------|
| `/`                   | Home page with navigation buttons    |
| `/products`           | Product list with links              |
| `/products/:id`       | Product detail page using `useParams`|
| `/dashboard`          | Dashboard layout with nested routes  |
| `/dashboard/profile`  | Profile page inside dashboard        |
| `/dashboard/settings` | Settings page inside dashboard       |

✅ Why This Project Matters
This project is intentionally simple and honest. It doesn’t use advanced libraries or animations. Instead, it focuses on clarity, correct usage of React Router, and real-world structure. It’s ideal for junior developers who want to prove they understand routing fundamentals in React.

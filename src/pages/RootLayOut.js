import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <main className="new_Page">
      <Outlet />
    </main>
  )
}

export default RootLayout;

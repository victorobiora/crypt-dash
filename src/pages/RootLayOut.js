import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <main className="new_Page">
      <Outlet />
      <div>hi I'm here</div>
    </main>
  )
}

export default RootLayout;

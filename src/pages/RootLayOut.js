import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RootLayout = (props) => {
  const modeIsDay = useSelector((state) => state.mode.modeIsDay);

  const modeClass = modeIsDay ? `dayBackground` : `nightBackground`;

  return (
    <main className="new_Page" id={modeClass}>
      <Outlet />
    </main>
  );
};

export default RootLayout;

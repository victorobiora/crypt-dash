import SideNav from "./SideNav";
import MainDashboard from "./MainDashboard/MainDashboard";

const HomeComponent = (props) => {
  return (
    <section className="new_Page" style={{display: 'flex', flexDirection: 'row'}}>
      <SideNav />
      <MainDashboard/>
    </section>
  );
};

export default HomeComponent;

import SideNav from "./SideNav";
import MainDashboard from "./MainDashboard/MainDashboard";
import PortfolioComponent from "./Portfolio/PortfolioComponent";

const HomeComponent = (props) => {
  return (
    <section className="new_Page" style={{display: 'flex', flexDirection: 'row'}}>
      <SideNav />
      <MainDashboard/>
      <PortfolioComponent/>
    </section>
  );
};

export default HomeComponent;

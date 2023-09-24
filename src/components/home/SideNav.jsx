import styles from "./SideNav.module.css";
import { svgObject } from "../../svg";
import { Link } from "react-router-dom";


const SideNav = (props) => {
  
  return (
    <section className={styles.sideNav}>
      <div className={styles.sideNav_homeLink}>
        <Link to="">
        {svgObject.homeLink}
        </Link>
      </div>
      <ul className={styles.sideNav_links}>
        <li>
          <Link to="">
            {svgObject.homeIcon}
          </Link>
        </li>
        <li>
          <Link to="">
            {svgObject.profile}
          </Link>
        </li>
        <li>
          <Link to="">
            {svgObject.chat}
          </Link>
        </li>
        <li>
          <Link to="">
            {svgObject.settings}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideNav;

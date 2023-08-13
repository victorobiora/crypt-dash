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
/*
<svg
width="800px"
height="800px"
viewBox="0 0 1024 1024"
xmlns="http://www.w3.org/2000/svg"
fill="#000000"
>
<g id="SVGRepo_bgCarrier" strokeWidth="0" />

<g
  id="SVGRepo_tracerCarrier"
  strokeLinecap="round"
  strokeLinejoin="round"
/>

<g id="SVGRepo_iconCarrier">
  {" "}
  <circle cx="512" cy="512" r="512" style={{ fill: "#002967" }} />
  <path
    d="M714.2 628.8 512 745.5 309.8 628.8V395.3L512 278.5l202.2 116.8v233.5zM512 256 290.3 384v256L512 768l221.7-128V384L512 256zm86.9 110.5H424.7l-20.2 88.8h215.4l-21-88.8zM455.6 577.6v-59L404 485.8l-58.4 43.4 79.6 138.4H457l37.6-35V615l-39-37.4zm113-108.9H455.8l19 49.6L469 574h43l43.4-.2-5.4-55.4 18.6-49.7zm51.6 16.7-51 33.2v59l-39 37.4v17.6l37.6 34.6h31.4l79.2-138-58.2-43.8z"
    style={{
      fill: "#fff",
    }}
  />
</g>
</svg>*/

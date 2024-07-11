import logo from "../Assets/dylan-estate-logo.png";
import navBarImg from "../Assets/navBarImg.png";
import "../styles/header.css"


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img classname="logo"src={logo} alt="dylan estate" />
            </div>
      
         <div className="nav-items">
            <ul>
                <li>PROPERTIES</li>
                <li>MY DASHBOARD/ACTIVITY</li>
                <li>LIST YOUR PROPERTY</li>
                <li>CONTACT US</li>
                <li>MORE</li>
                <li>|</li>
                <li ><img className="nav-img" src={navBarImg} alt="" /></li>
            </ul>
         </div>

        </div>
);
};
export default Header;
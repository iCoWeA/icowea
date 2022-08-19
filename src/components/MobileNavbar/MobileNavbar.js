import './MobileNavbar.css';

import Utils from "../../services/utils/Utils";

import MobileNavbarLinks from "./MobileNavbarLinks";
import MobileNavbarSocials from "./MobileNavbarSocials";

const MobileNavbar = props => {
    const mainClass = 'mobile-navbar';
    const classes = Utils.joinClassesToString(mainClass, props.classes);

    return (
        <div className={classes}>
            <MobileNavbarLinks/>
            <hr className='mobile-navbar__hr'/>
            <MobileNavbarSocials/>
        </div>
    );
};

export default MobileNavbar;
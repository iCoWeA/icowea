import './MobileNavbarItem.css';

import Utils from "../../services/utils/Utils";

const MobileNavbarItem = props => {
    const mainClass = 'mobile-navbar-item';
    const classes = Utils.joinClassesToString(mainClass, props.classes);
    const path = props.path;
    const pathName = props.children;

    return (
        <li className={classes}>
            <a className='mobile-navbar-item__link' href={path}>{pathName}</a>
        </li>
    );
};

export default MobileNavbarItem;
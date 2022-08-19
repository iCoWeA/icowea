import './MobileNavbarLinks.css';

import Utils from "../../services/utils/Utils";

import MobileNavbarItem from "./MobileNavbarItem";

/* DUMMY FETCHED JSON !!! */
const DUMMY_CONST_EN = [
    {
        "id": 0,
        "path": "home",
        "pathName": "Home"
    },
    {
        "id": 1,
        "path": "about",
        "pathName": "About"
    },
    {
        "id": 2,
        "path": "work",
        "pathName": "Work"
    }
];

const MobileNavbarLinks = props => {
    /* FETCH !!! */
    const links = DUMMY_CONST_EN.map((link) => <MobileNavbarItem key={link.id}
                                                                 path={link.path}>{link.pathName}</MobileNavbarItem>);

    const mainClass = 'mobile-navbar-list';
    const classes = Utils.joinClassesToString(mainClass, props.classes);

    return (
        <ul className={classes}>
            {links}
        </ul>
    );
};

export default MobileNavbarLinks;
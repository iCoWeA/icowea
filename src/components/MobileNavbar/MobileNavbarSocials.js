import './MobileNavbarSocials.css';

import Utils from '../../services/utils/Utils';

const MobileNavbarSocials = props => {
    const mainClass = 'mobile-navbar-socials';
    const classes = Utils.joinClassesToString(mainClass, props.classes);

    return (
        <ul className={classes}>
            <li className='mobile-navbar-socials__item'><a className='mobile-navbar-socials__link'
                                                           href='https://www.instagram.com/' target='_blank'
                                                           rel='noreferrer'>
                <div className='mobile-navbar-socials__icon mobile-navbar-socials__icon--instagram'></div>
            </a></li>
            <li className='mobile-navbar-socials__item'><a className='mobile-navbar-socials__link'
                                                           href='https://sk.linkedin.com/' target='_blank'
                                                           rel='noreferrer'>
                <div className='mobile-navbar-socials__icon mobile-navbar-socials__icon--linkedin'></div>
            </a></li>
            <li className='mobile-navbar-socials__item'><a className='mobile-navbar-socials__link'
                                                           href='mailto: icowea@gmail.com' target='_blank'
                                                           rel='noreferrer'>
                <div className='mobile-navbar-socials__icon mobile-navbar-socials__icon--email'></div>
            </a></li>
            <li className='mobile-navbar-socials__item'><a className='mobile-navbar-socials__link'
                                                           href='https://twitter.com/' target='_blank' rel='noreferrer'>
                <div className='mobile-navbar-socials__icon mobile-navbar-socials__icon--twitter'></div>
            </a></li>
            <li className='mobile-navbar-socials__item'><a className='mobile-navbar-socials__link'
                                                           href='https://www.facebook.com/' rel='noreferrer'>
                <div className='mobile-navbar-socials__icon mobile-navbar-socials__icon--facebook'></div>
            </a></li>
        </ul>
    );
};

export default MobileNavbarSocials;
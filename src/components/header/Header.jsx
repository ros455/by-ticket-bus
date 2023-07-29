import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/header.scss'
import { MdDirectionsBus } from 'react-icons/md';
import { BiSolidBusiness } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { useTheme } from '../../hooks/use-thems';
import ChangeColor from './ChangeColor';
import CurencyRate from './CurencyRate';
import CurentLang from './CurentLang';
import { useSelector } from 'react-redux';

const Header = () => {
    const isAuthUser = useSelector((state) => state.authUser.isAuthUser);
    return (
        <div className='header_wrapper'>
            <div className='content_wrap'>
            <div className='logo_wrap'>
                <Link to={'/'} ><p style={{fontSize: '48px'}}>BUS LOGO</p> </Link>
                <div className='routs_var'>
                    <div className='routs_item_header local_routs'>
                        <MdDirectionsBus
                        className='icon '/>
                        <p className='p-header'>local</p>
                    </div>
                    <div className='routs_item_header place_routs'>
                        <BiSolidBusiness
                        className='icon '/>
                        <p className='p-header'>place</p>
                    </div>
                </div>
            </div>
            <div className='custom_profile'>
                <CurentLang/>
                <CurencyRate/>
                <ChangeColor/>
                {isAuthUser 
                ?
                <Link to='/user-profile'><button className='btn_prime btn_sing-in'>My profile</button></Link>
                :
                <Link to='/login'><button className='btn_prime btn_sing-in'>Sing In</button></Link>
                }
                
            </div>
            </div>
        </div>
    );
};

export default Header;
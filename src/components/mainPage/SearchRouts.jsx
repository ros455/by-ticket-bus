import React, { useEffect, useState } from 'react';
import '../../style/searchRouts.scss'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSwap } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { Icon } from '@iconify/react';
import location28Regular from '@iconify/icons-fluent/location-28-regular';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { setBookingData } from '../../store/bookingData';
import { useTranslation } from "react-i18next";
import BookingDerect from '../booking/BookingDerect';
import { Link } from 'react-router-dom';


const SearchRouts = () => {
    const [isFromTo, setIsFromTo] = useState(true)
    const [cityFrom, setCityFrom] = useState('')
    const [cityTo, setCityTo] = useState('')
    const [curentPasanger, setCurentPasanger] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {RDX_cityFrom, RDX_cityTo, RDX_curentPasanger, RDX_startDate, RDX_endDate} = useSelector((state) => state.booking);

    useEffect (() => {
        setCityFrom(RDX_cityFrom)
        setCityTo(RDX_cityTo)
    }, [])


    const hendlerChangeInputFrom = (e) => {
        setCityFrom(e)
    }
    const hendlerChangeInputTo = (e) => {
        setCityTo(e)
    }

    const hendlerChangePasangerPlus = () => {
        try {
            if (curentPasanger >= 0) {
                setCurentPasanger(curentPasanger + 1)
            }
        } catch (err) {
            console.log(err);
        }
    }
    const hendlerChangePasangerMin = () => {
        try {
            if (curentPasanger >= 2) {
                setCurentPasanger(curentPasanger - 1)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSendBookingData = () => {
        try {
            const serializedStartDate = startDate.toString();
            const serializedEndDate = endDate.toString();

            dispatch(setBookingData({cityFrom, cityTo, curentPasanger, startDate: serializedStartDate, endDate: serializedEndDate}));
        } catch(e) {
            console.log(e);
        }
    } 


    return (
        <div className='serch_routs_wraper'>
            <div className='serch_routs_items'>
                {isFromTo ? 
                <>
                <div className='serch_routs-item loation_from'>
                    <p className='serch_routs-item_title'>{t('From')}</p>
                    <div className='serch_routs-item-input'>
                        <FaLocationDot className='icon-search' />
                        <input type="text" placeholder='City' value={cityFrom} onChange={(e) => hendlerChangeInputFrom(e.target.value)} />
                    </div>
                </div>
                <AiOutlineSwap className='icon-search icon-swap'
                onClick={() => setIsFromTo(!isFromTo)}
                />
                <div className='serch_routs-item loation_to'>
                    <p className='serch_routs-item_title'>{t('To')}</p>
                    <div className='serch_routs-item-input'>
                        <FaLocationDot className='icon-search' />
                        <input type="text" placeholder='City' value={cityTo} onChange={(e) => hendlerChangeInputTo(e.target.value)} />
                    </div>
                    
                </div> 
                </>
                :
                <>
                <div className='serch_routs-item loation_to'>
                    <p className='serch_routs-item_title'>{t('To')}</p>
                    <div className='serch_routs-item-input'>
                        <FaLocationDot className='icon-search' />
                        <input type="text" placeholder='City' value={cityTo} onChange={(e) => hendlerChangeInputTo(e.target.value)} />
                    </div>
                    
                </div> 
                <AiOutlineSwap className='icon-search icon-swap'
                onClick={() => setIsFromTo(!isFromTo)}
                 />
                <div className='serch_routs-item loation_from'>
                    <p className='serch_routs-item_title'>{t('From')}</p>
                    <div className='serch_routs-item-input'>
                        <FaLocationDot className='icon-search' />
                        <input type="text" placeholder='City' value={cityFrom} onChange={(e) => hendlerChangeInputFrom(e.target.value)} />
                    </div>
                </div>
                </>

                }
                <div className='serch_routs-item item-date date_start' >
                    <p className='serch_routs-item_title' >{t('Date')}</p>
                    <div className='date_change'>
                    <BsFillCalendarCheckFill className='icon-search'/>
                    <DatePicker className='data-piker-wrap' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className='serch_routs-item item-date date_end'>
                    <p className='serch_routs-item_title'>{t('Return date')}</p>
                    <div className='date_change'>
                    <BsFillCalendarCheckFill className='icon-search'/>
                    <DatePicker className='data-piker-wrap' selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                </div>
                <div className='serch_routs-item date_seats'>
                    <p className='serch_routs-item_title'>{t('Seats')}</p>
                    <div className='seat_counter'>
                    <p className='couner_btn' onClick={hendlerChangePasangerMin}>-</p>
                    <p className='curent_pasanger'>{curentPasanger}{t('passenger')}</p>
                    <p className='couner_btn' onClick={hendlerChangePasangerPlus}>+</p>
                    </div>
                </div>
            </div>
            <Link
            to='/trip-list'
            style={{height:'100%'}}>
                <button className='search-btn' onClick={handleSendBookingData}> 
                <BsSearch className='search-btn-icon'/>
                {t('Search')}
                </button>
            </Link>
        </div>
    );
};

export default SearchRouts;
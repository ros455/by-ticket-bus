import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateCurentSeats } from "../../../store/busSeatsSlice";
import BookingInfoClient from "../BookingInfoClient";
import { Link } from "react-router-dom";
import "../../../style/bus.scss";


const BusSeats35 = ({seats}) => {
  const [active, setActive] = useState("");
  const curentSeats = useSelector(state => state.busSeats.curentSeats);
  const [curentSeatsArr, setCurentSeatsArr] = useState([]);
  const dispatch = useDispatch();

  console.log('curentSeatsArr',curentSeatsArr);

  const hendler = (e) => {
    try {
      if (curentSeatsArr.includes(e.target.id)) {
        const updatedSeats = curentSeatsArr.filter((seat) => seat !== e.target.id);
        setCurentSeatsArr(updatedSeats); 
        dispatch(updateCurentSeats(updatedSeats)); 
  
      } else {
        setCurentSeatsArr([...curentSeatsArr, e.target.id]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect (() => {
    dispatch(updateCurentSeats(curentSeatsArr));
  }, [curentSeatsArr]);

  console.log("number", curentSeats);
  return (
    <div className="bus_wraper">

    
    <svg
      className="bus_svg_wrap"
      width="802"
      height="1796"
      viewBox="0 0 802 1796"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_198_422)">
        <rect x="15" y="9" width="772" height="1766" rx="20" fill="white" />
        <rect
          className="bg-bus stroke-bus"
          x="15.5"
          y="9.5"
          width="771"
          height="1765"
          rx="19.5"
          stroke="black"
        />
      </g>
      <rect
        className="bg-bus stroke-bus"
        x="36"
        y="24"
        width="730"
        height="1736"
        rx="11"
        fill="white"
        stroke="black"
      />
      <rect
        className="bg-bus"
        x="729"
        y="908"
        width="47"
        height="163"
        fill="white"
      />
      <rect
        className="bg-bus"
        x="729"
        y="58"
        width="47"
        height="163"
        fill="white"
      />
      <path
        className="non-active-numb"
        d="M661.523 1005V975.909H679.08V979.034H665.045V988.864H678.17V991.989H665.045V1001.88H679.307V1005H661.523ZM687.134 975.909L694.634 988.011H694.861L702.361 975.909H706.509L697.361 990.455L706.509 1005H702.361L694.861 993.125H694.634L687.134 1005H682.986L692.361 990.455L682.986 975.909H687.134ZM714.616 975.909V1005H711.093V975.909H714.616ZM720.088 979.034V975.909H741.906V979.034H732.759V1005H729.236V979.034H720.088Z"
        fill="black"
      />
      <path
        className="non-active-numb"
        d="M646.523 155V125.909H664.08V129.034H650.045V138.864H663.17V141.989H650.045V151.875H664.307V155H646.523ZM672.134 125.909L679.634 138.011H679.861L687.361 125.909H691.509L682.361 140.455L691.509 155H687.361L679.861 143.125H679.634L672.134 155H667.986L677.361 140.455L667.986 125.909H672.134ZM699.616 125.909V155H696.093V125.909H699.616ZM705.088 129.034V125.909H726.906V129.034H717.759V155H714.236V129.034H705.088Z"
        fill="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("1") ? "active" : "non-active"}
        id="1"
        x="86.5"
        y="246.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("1") ? "active" : "non-active"}
        x="92.5"
        y="366.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("2") ? "active" : "non-active"}
        id="2"
        x="216.5"
        y="246.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("2") ? "active" : "non-active"}
        x="222.5"
        y="366.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("3") ? "active" : "non-active"}
        id="3"
        x="473.5"
        y="246.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("3") ? "active" : "non-active"}
        x="479.5"
        y="366.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("4") ? "active" : "non-active"}
        id="4"
        x="603.5"
        y="246.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("4") ? "active" : "non-active"}
        x="609.5"
        y="366.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("5") ? "active" : "non-active"}
        id="5"
        x="86.5"
        y="414.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("5") ? "active" : "non-active"}
        x="92.5"
        y="534.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("6") ? "active" : "non-active"}
        id="6"
        x="216.5"
        y="414.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("6") ? "active" : "non-active"}
        x="222.5"
        y="534.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("7") ? "active" : "non-active"}
        id="7"
        x="473.5"
        y="414.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("7") ? "active" : "non-active"}
        x="479.5"
        y="534.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("8") ? "active" : "non-active"}
        id="8"
        x="603.5"
        y="414.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("8") ? "active" : "non-active"}
        x="609.5"
        y="534.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("11") ? "active" : "non-active"}
        id="11"
        x="473.5"
        y="582.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("11") ? "active" : "non-active"}
        x="479.5"
        y="702.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("12") ? "active" : "non-active"}
        id="12"
        x="603.5"
        y="582.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("12") ? "active" : "non-active"}
        x="609.5"
        y="702.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("9") ? "active" : "non-active"}
        id="9"
        x="86.5"
        y="582.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("9") ? "active" : "non-active"}
        x="92.5"
        y="702.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("10") ? "active" : "non-active"}
        id="10"
        x="216.5"
        y="582.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("10") ? "active" : "non-active"}
        x="222.5"
        y="702.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("15") ? "active" : "non-active"}
        id="15"
        x="473.5"
        y="750.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("15") ? "active" : "non-active"}
        x="479.5"
        y="870.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("16") ? "active" : "non-active"}
        id="16"
        x="603.5"
        y="750.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("16") ? "active" : "non-active"}
        x="609.5"
        y="870.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("13") ? "active" : "non-active"}
        id="13"
        x="86.5"
        y="750.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("13") ? "active" : "non-active"}
        x="92.5"
        y="870.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("14") ? "active" : "non-active"}
        id="14"
        x="216.5"
        y="750.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("14") ? "active" : "non-active"}
        x="222.5"
        y="870.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("17") ? "active" : "non-active"}
        id="17"
        x="86.5"
        y="918.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("17") ? "active" : "non-active"}
        x="92.5"
        y="1038.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("18") ? "active" : "non-active"}
        id="18"
        x="216.5"
        y="918.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("18") ? "active" : "non-active"}
        x="222.5"
        y="1038.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("19") ? "active" : "non-active"}
        id="19"
        x="86.5"
        y="1086.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("19") ? "active" : "non-active"}
        x="92.5"
        y="1206.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("20") ? "active" : "non-active"}
        id="20"
        x="216.5"
        y="1086.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("20") ? "active" : "non-active"}
        x="222.5"
        y="1206.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("21") ? "active" : "non-active"}
        id="21"
        x="473.5"
        y="1086.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("21") ? "active" : "non-active"}
        x="479.5"
        y="1206.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("22") ? "active" : "non-active"}
        id="22"
        x="603.5"
        y="1086.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("22") ? "active" : "non-active"}
        x="609.5"
        y="1206.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("23") ? "active" : "non-active"}
        id="23"
        x="86.5"
        y="1254.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("23") ? "active" : "non-active"}
        x="92.5"
        y="1374.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("24") ? "active" : "non-active"}
        id="24"
        x="216.5"
        y="1254.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("24") ? "active" : "non-active"}
        x="222.5"
        y="1374.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("25") ? "active" : "non-active"}
        id="25"
        x="473.5"
        y="1254.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("25") ? "active" : "non-active"}
        x="479.5"
        y="1374.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("26") ? "active" : "non-active"}
        id="26"
        x="603.5"
        y="1254.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("26") ? "active" : "non-active"}
        x="609.5"
        y="1374.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("27") ? "active" : "non-active"}
        id="27"
        x="86.5"
        y="1422.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("27") ? "active" : "non-active"}
        x="92.5"
        y="1542.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("28") ? "active" : "non-active"}
        id="28"
        x="216.5"
        y="1422.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("28") ? "active" : "non-active"}
        x="222.5"
        y="1542.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("29") ? "active" : "non-active"}
        id="29"
        x="473.5"
        y="1422.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("29") ? "active" : "non-active"}
        x="479.5"
        y="1542.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("30") ? "active" : "non-active"}
        id="30"
        x="603.5"
        y="1422.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("30") ? "active" : "non-active"}
        x="609.5"
        y="1542.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("33") ? "active" : "non-active"}
        id="33"
        x="343.5"
        y="1590.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("33") ? "active" : "non-active"}
        x="349.5"
        y="1710.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("31") ? "active" : "non-active"}
        id="31"
        x="86.5"
        y="1590.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("31") ? "active" : "non-active"}
        x="92.5"
        y="1710.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("32") ? "active" : "non-active"}
        id="32"
        x="216.5"
        y="1590.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("32") ? "active" : "non-active"}
        x="222.5"
        y="1710.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("34") ? "active" : "non-active"}
        id="34"
        x="473.5"
        y="1590.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("34") ? "active" : "non-active"}
        x="479.5"
        y="1710.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        onClick={(e) => hendler(e)}
        className={curentSeatsArr.includes("35") ? "active" : "non-active"}
        id="35"
        x="603.5"
        y="1590.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={curentSeatsArr.includes("35") ? "active" : "non-active"}
        x="609.5"
        y="1710.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={"non-active"}
        x="88.5"
        y="78.5"
        width="109"
        height="123"
        rx="21.5"
        fill="#EF395A"
        stroke="black"
      />
      <rect
        className={"non-active"}
        x="94.5"
        y="198.5"
        width="98"
        height="17"
        rx="3.5"
        fill="#EF395A"
        stroke="black"
      />
      <g clip-path="url(#clip0_198_422)">
        <path
          className="whell"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M143 49.8333C161.87 49.8333 177.167 65.1297 177.167 84C177.167 102.87 161.87 118.167 143 118.167C124.13 118.167 108.833 102.87 108.833 84C108.833 65.1297 124.13 49.8333 143 49.8333ZM116.367 90.1841C117.563 95.3173 120.215 99.996 124.006 103.658C127.796 107.32 132.564 109.81 137.735 110.828C137.076 101.859 134.127 96.4776 130.403 93.5017C126.836 90.6488 121.998 89.5452 116.367 90.1807V90.1841ZM155.597 93.4983C151.873 96.4811 148.925 101.859 148.265 110.828C153.437 109.809 158.205 107.319 161.995 103.657C165.786 99.9939 168.438 95.3145 169.633 90.1807C164.002 89.5452 159.164 90.6488 155.597 93.5017V93.4983ZM143 56.6666C136.632 56.6675 130.464 58.891 125.56 62.9535C120.656 67.016 117.324 72.6627 116.138 78.9194L115.991 79.7667L123.542 78.2566C125.531 77.8602 127.42 76.8113 129.532 75.3866L131.161 74.2522C133.884 72.3184 137.92 70.3333 143 70.3333C147.742 70.3333 151.573 72.0621 154.275 73.8661L156.469 75.3866C158.314 76.6336 159.995 77.5903 161.717 78.0789L162.458 78.2566L170.009 79.7667C168.998 73.3295 165.722 67.4648 160.77 63.2295C155.818 58.9942 149.516 56.6668 143 56.6666Z"
          fill="black"
        />
      </g>
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("1") ? "active-numb" : "non-active-numb"
        }
        id="1"
        d="M140.88 329V307.08L136.72 307.8V304.16L145.2 302.84V329H140.88Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("2") ? "active-numb" : "non-active-numb"
        }
        id="2"
        d="M262.72 329V326.84C263.413 325.213 264.373 323.747 265.6 322.44C266.853 321.133 268.187 319.867 269.6 318.64C270.667 317.707 271.547 316.92 272.24 316.28C272.96 315.613 273.52 315.013 273.92 314.48C274.32 313.947 274.6 313.4 274.76 312.84C274.92 312.253 275 311.573 275 310.8C275 309.413 274.6 308.36 273.8 307.64C273 306.92 271.667 306.56 269.8 306.56C268.787 306.56 267.747 306.667 266.68 306.88C265.64 307.093 264.64 307.387 263.68 307.76V303.92C264.613 303.6 265.72 303.347 267 303.16C268.28 302.947 269.493 302.84 270.64 302.84C273.52 302.84 275.693 303.547 277.16 304.96C278.627 306.373 279.36 308.307 279.36 310.76C279.36 311.987 279.147 313.08 278.72 314.04C278.293 314.973 277.707 315.867 276.96 316.72C276.213 317.547 275.347 318.4 274.36 319.28C273.133 320.347 271.973 321.387 270.88 322.4C269.813 323.387 268.947 324.467 268.28 325.64H279.64V329H262.72Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("3") ? "active-numb" : "non-active-numb"
        }
        id="3"
        d="M526.04 329.4C525.267 329.4 524.413 329.347 523.48 329.24C522.547 329.16 521.653 329.027 520.8 328.84C519.973 328.653 519.28 328.453 518.72 328.24V324.44C519.787 324.867 520.88 325.187 522 325.4C523.147 325.587 524.293 325.68 525.44 325.68C527.52 325.68 529.067 325.373 530.08 324.76C531.093 324.147 531.6 323.067 531.6 321.52C531.6 320.133 531.133 319.133 530.2 318.52C529.293 317.907 527.987 317.6 526.28 317.6H522.4L522.76 314.36H526C529.387 314.36 531.08 313.027 531.08 310.36C531.08 309.053 530.627 308.093 529.72 307.48C528.84 306.867 527.413 306.56 525.44 306.56C524.347 306.56 523.24 306.667 522.12 306.88C521.027 307.093 520.053 307.387 519.2 307.76V304.04C520 303.72 521.04 303.44 522.32 303.2C523.6 302.96 524.867 302.84 526.12 302.84C529.267 302.84 531.6 303.507 533.12 304.84C534.667 306.173 535.44 307.88 535.44 309.96C535.44 311.24 535.12 312.44 534.48 313.56C533.867 314.68 532.893 315.48 531.56 315.96C533.107 316.36 534.227 317.08 534.92 318.12C535.64 319.16 536 320.387 536 321.8C536 324.387 535.093 326.307 533.28 327.56C531.467 328.787 529.053 329.4 526.04 329.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("4") ? "active-numb" : "non-active-numb"
        }
        id="4"
        d="M664.8 329V323.36H651.92V320.28L665.32 303.24H669.12V319.84H671.76V323.36H669.12V329H664.8ZM656.16 319.96H665.48V308.2L656.16 319.96Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("5") ? "active-numb" : "non-active-numb"
        }
        id="5"
        d="M140 497.4C138.853 497.4 137.6 497.307 136.24 497.12C134.88 496.933 133.747 496.64 132.84 496.24V492.44C133.773 492.84 134.84 493.147 136.04 493.36C137.24 493.573 138.373 493.68 139.44 493.68C141.493 493.68 143 493.333 143.96 492.64C144.947 491.92 145.44 490.747 145.44 489.12C145.44 487.627 145.093 486.52 144.4 485.8C143.707 485.08 142.347 484.72 140.32 484.72H132.72V482.08L133.4 471.24H148.04L147.68 474.6H137.08L136.64 481.36H141C144.067 481.36 146.307 482.013 147.72 483.32C149.133 484.627 149.84 486.587 149.84 489.2C149.84 491.733 149.013 493.733 147.36 495.2C145.707 496.667 143.253 497.4 140 497.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("6") ? "active-numb" : "non-active-numb"
        }
        id="6"
        d="M271.48 497.4C268.253 497.4 265.813 496.6 264.16 495C262.533 493.4 261.72 490.88 261.72 487.44V481.64C261.72 479.507 262.16 477.627 263.04 476C263.92 474.373 265.173 473.107 266.8 472.2C268.427 471.293 270.36 470.84 272.6 470.84C273.907 470.84 275.04 470.92 276 471.08C276.987 471.24 277.893 471.467 278.72 471.76V475.48C277.893 475.187 277 474.96 276.04 474.8C275.107 474.64 274.053 474.56 272.88 474.56C270.48 474.56 268.707 475.133 267.56 476.28C266.413 477.4 265.84 478.907 265.84 480.8V482.4C266.773 481.707 267.84 481.2 269.04 480.88C270.267 480.533 271.373 480.36 272.36 480.36C275.373 480.36 277.6 481.093 279.04 482.56C280.48 484.027 281.2 486.107 281.2 488.8C281.2 491.36 280.413 493.44 278.84 495.04C277.267 496.613 274.813 497.4 271.48 497.4ZM271.52 494.12C273.44 494.12 274.88 493.653 275.84 492.72C276.8 491.787 277.28 490.533 277.28 488.96C277.28 487.307 276.88 486.027 276.08 485.12C275.307 484.187 273.853 483.72 271.72 483.72C270.653 483.72 269.6 483.907 268.56 484.28C267.547 484.627 266.64 485.093 265.84 485.68V488.44C265.84 492.227 267.733 494.12 271.52 494.12Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("7") ? "active-numb" : "non-active-numb"
        }
        id="7"
        d="M522.4 497L531.88 474.6H519.32V471.24H536.56V474.04L526.84 497H522.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("8") ? "active-numb" : "non-active-numb"
        }
        id="8"
        d="M657.8 497.4C651.08 497.4 647.72 494.947 647.72 490.04C647.72 488.573 648.107 487.267 648.88 486.12C649.68 484.973 650.813 484.16 652.28 483.68C650.947 483.173 649.973 482.427 649.36 481.44C648.747 480.427 648.44 479.347 648.44 478.2C648.44 475.987 649.2 474.213 650.72 472.88C652.267 471.52 654.627 470.84 657.8 470.84C661.053 470.84 663.427 471.52 664.92 472.88C666.413 474.213 667.16 475.987 667.16 478.2C667.16 479.427 666.853 480.573 666.24 481.64C665.653 482.68 664.613 483.48 663.12 484.04C664.773 484.52 665.973 485.267 666.72 486.28C667.467 487.267 667.84 488.52 667.84 490.04C667.84 494.947 664.493 497.4 657.8 497.4ZM658.88 482.68C660.347 482.307 661.413 481.8 662.08 481.16C662.773 480.52 663.12 479.56 663.12 478.28C663.12 475.613 661.347 474.28 657.8 474.28C656.067 474.28 654.747 474.6 653.84 475.24C652.933 475.88 652.48 476.893 652.48 478.28C652.48 480.387 653.667 481.667 656.04 482.12L658.88 482.68ZM657.8 494C659.8 494 661.293 493.68 662.28 493.04C663.293 492.373 663.8 491.347 663.8 489.96C663.8 488.707 663.44 487.8 662.72 487.24C662.027 486.653 660.947 486.213 659.48 485.92L656.2 485.24C654.84 485.533 653.76 486.027 652.96 486.72C652.16 487.387 651.76 488.44 651.76 489.88C651.76 491.32 652.267 492.373 653.28 493.04C654.32 493.68 655.827 494 657.8 494Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("9") ? "active-numb" : "non-active-numb"
        }
        id="9"
        d="M140.32 665.4C139.013 665.4 137.88 665.32 136.92 665.16C135.96 665 135.053 664.787 134.2 664.52V660.76C135.027 661.08 135.907 661.32 136.84 661.48C137.8 661.64 138.867 661.72 140.04 661.72C142.44 661.72 144.213 661.147 145.36 660C146.507 658.853 147.08 657.333 147.08 655.44V653.84C146.147 654.507 145.08 655.013 143.88 655.36C142.68 655.707 141.573 655.88 140.56 655.88C137.573 655.88 135.347 655.147 133.88 653.68C132.44 652.213 131.72 650.133 131.72 647.44C131.72 644.907 132.507 642.84 134.08 641.24C135.653 639.64 138.107 638.84 141.44 638.84C144.667 638.84 147.093 639.653 148.72 641.28C150.373 642.88 151.2 645.387 151.2 648.8V654.6C151.2 656.733 150.76 658.613 149.88 660.24C149 661.867 147.747 663.133 146.12 664.04C144.493 664.947 142.56 665.4 140.32 665.4ZM141.2 652.56C142.293 652.56 143.347 652.373 144.36 652C145.373 651.627 146.28 651.16 147.08 650.6V647.8C147.08 644.04 145.187 642.16 141.4 642.16C139.48 642.16 138.04 642.627 137.08 643.56C136.12 644.493 135.64 645.747 135.64 647.32C135.64 648.947 136.027 650.227 136.8 651.16C137.6 652.093 139.067 652.56 141.2 652.56Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("10") ? "active-numb" : "non-active-numb"
        }
        id="10"
        d="M257.88 665V643.08L253.72 643.8V640.16L262.2 638.84V665H257.88ZM277.813 665.72C275.093 665.72 272.907 665.2 271.253 664.16C269.6 663.093 268.387 661.573 267.613 659.6C266.867 657.6 266.493 655.213 266.493 652.44C266.493 649.56 266.853 647.107 267.573 645.08C268.32 643.053 269.52 641.507 271.173 640.44C272.827 639.373 275.04 638.84 277.813 638.84C280.587 638.84 282.787 639.373 284.413 640.44C286.067 641.507 287.253 643.053 287.973 645.08C288.72 647.107 289.093 649.56 289.093 652.44C289.093 655.213 288.72 657.6 287.973 659.6C287.227 661.573 286.027 663.093 284.373 664.16C282.72 665.2 280.533 665.72 277.813 665.72ZM277.813 662C280.373 662 282.16 661.16 283.173 659.48C284.187 657.773 284.693 655.427 284.693 652.44C284.693 649.267 284.2 646.827 283.213 645.12C282.227 643.413 280.427 642.56 277.813 642.56C275.2 642.56 273.387 643.413 272.373 645.12C271.387 646.827 270.893 649.267 270.893 652.44C270.893 655.427 271.4 657.773 272.413 659.48C273.427 661.16 275.227 662 277.813 662Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("11") ? "active-numb" : "non-active-numb"
        }
        id="11"
        d="M520.88 665V643.08L516.72 643.8V640.16L525.2 638.84V665H520.88ZM533.653 665V643.08L529.493 643.8V640.16L537.973 638.84V665H533.653Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("12") ? "active-numb" : "non-active-numb"
        }
        id="12"
        d="M650.88 665V643.08L646.72 643.8V640.16L655.2 638.84V665H650.88ZM659.493 665V662.84C660.187 661.213 661.147 659.747 662.373 658.44C663.627 657.133 664.96 655.867 666.373 654.64C667.44 653.707 668.32 652.92 669.013 652.28C669.733 651.613 670.293 651.013 670.693 650.48C671.093 649.947 671.373 649.4 671.533 648.84C671.693 648.253 671.773 647.573 671.773 646.8C671.773 645.413 671.373 644.36 670.573 643.64C669.773 642.92 668.44 642.56 666.573 642.56C665.56 642.56 664.52 642.667 663.453 642.88C662.413 643.093 661.413 643.387 660.453 643.76V639.92C661.387 639.6 662.493 639.347 663.773 639.16C665.053 638.947 666.267 638.84 667.413 638.84C670.293 638.84 672.467 639.547 673.933 640.96C675.4 642.373 676.133 644.307 676.133 646.76C676.133 647.987 675.92 649.08 675.493 650.04C675.067 650.973 674.48 651.867 673.733 652.72C672.987 653.547 672.12 654.4 671.133 655.28C669.907 656.347 668.747 657.387 667.653 658.4C666.587 659.387 665.72 660.467 665.053 661.64H676.413V665H659.493Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("13") ? "active-numb" : "non-active-numb"
        }
        id="13"
        d="M129.88 826V804.08L125.72 804.8V801.16L134.2 799.84V826H129.88ZM145.813 826.4C145.04 826.4 144.187 826.347 143.253 826.24C142.32 826.16 141.427 826.027 140.573 825.84C139.747 825.653 139.053 825.453 138.493 825.24V821.44C139.56 821.867 140.653 822.187 141.773 822.4C142.92 822.587 144.067 822.68 145.213 822.68C147.293 822.68 148.84 822.373 149.853 821.76C150.867 821.147 151.373 820.067 151.373 818.52C151.373 817.133 150.907 816.133 149.973 815.52C149.067 814.907 147.76 814.6 146.053 814.6H142.173L142.533 811.36H145.773C149.16 811.36 150.853 810.027 150.853 807.36C150.853 806.053 150.4 805.093 149.493 804.48C148.613 803.867 147.187 803.56 145.213 803.56C144.12 803.56 143.013 803.667 141.893 803.88C140.8 804.093 139.827 804.387 138.973 804.76V801.04C139.773 800.72 140.813 800.44 142.093 800.2C143.373 799.96 144.64 799.84 145.893 799.84C149.04 799.84 151.373 800.507 152.893 801.84C154.44 803.173 155.213 804.88 155.213 806.96C155.213 808.24 154.893 809.44 154.253 810.56C153.64 811.68 152.667 812.48 151.333 812.96C152.88 813.36 154 814.08 154.693 815.12C155.413 816.16 155.773 817.387 155.773 818.8C155.773 821.387 154.867 823.307 153.053 824.56C151.24 825.787 148.827 826.4 145.813 826.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("14") ? "active-numb" : "non-active-numb"
        }
        id="14"
        d="M259.88 833V811.08L255.72 811.8V808.16L264.2 806.84V833H259.88ZM280.573 833V827.36H267.693V824.28L281.093 807.24H284.893V823.84H287.533V827.36H284.893V833H280.573ZM271.933 823.96H281.253V812.2L271.933 823.96Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("15") ? "active-numb" : "non-active-numb"
        }
        id="15"
        d="M516.88 833V811.08L512.72 811.8V808.16L521.2 806.84V833H516.88ZM532.773 833.4C531.627 833.4 530.373 833.307 529.013 833.12C527.653 832.933 526.52 832.64 525.613 832.24V828.44C526.547 828.84 527.613 829.147 528.813 829.36C530.013 829.573 531.147 829.68 532.213 829.68C534.267 829.68 535.773 829.333 536.733 828.64C537.72 827.92 538.213 826.747 538.213 825.12C538.213 823.627 537.867 822.52 537.173 821.8C536.48 821.08 535.12 820.72 533.093 820.72H525.493V818.08L526.173 807.24H540.813L540.453 810.6H529.853L529.413 817.36H533.773C536.84 817.36 539.08 818.013 540.493 819.32C541.907 820.627 542.613 822.587 542.613 825.2C542.613 827.733 541.787 829.733 540.133 831.2C538.48 832.667 536.027 833.4 532.773 833.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("16") ? "active-numb" : "non-active-numb"
        }
        id="16"
        d="M645.88 833V811.08L641.72 811.8V808.16L650.2 806.84V833H645.88ZM664.253 833.4C661.027 833.4 658.587 832.6 656.933 831C655.307 829.4 654.493 826.88 654.493 823.44V817.64C654.493 815.507 654.933 813.627 655.813 812C656.693 810.373 657.947 809.107 659.573 808.2C661.2 807.293 663.133 806.84 665.373 806.84C666.68 806.84 667.813 806.92 668.773 807.08C669.76 807.24 670.667 807.467 671.493 807.76V811.48C670.667 811.187 669.773 810.96 668.813 810.8C667.88 810.64 666.827 810.56 665.653 810.56C663.253 810.56 661.48 811.133 660.333 812.28C659.187 813.4 658.613 814.907 658.613 816.8V818.4C659.547 817.707 660.613 817.2 661.813 816.88C663.04 816.533 664.147 816.36 665.133 816.36C668.147 816.36 670.373 817.093 671.813 818.56C673.253 820.027 673.973 822.107 673.973 824.8C673.973 827.36 673.187 829.44 671.613 831.04C670.04 832.613 667.587 833.4 664.253 833.4ZM664.293 830.12C666.213 830.12 667.653 829.653 668.613 828.72C669.573 827.787 670.053 826.533 670.053 824.96C670.053 823.307 669.653 822.027 668.853 821.12C668.08 820.187 666.627 819.72 664.493 819.72C663.427 819.72 662.373 819.907 661.333 820.28C660.32 820.627 659.413 821.093 658.613 821.68V824.44C658.613 828.227 660.507 830.12 664.293 830.12Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("17") ? "active-numb" : "non-active-numb"
        }
        id="17"
        d="M130.88 994V972.08L126.72 972.8V969.16L135.2 967.84V994H130.88ZM142.173 994L151.653 971.6H139.093V968.24H156.333V971.04L146.613 994H142.173Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("18") ? "active-numb" : "non-active-numb"
        }
        id="18"
        d="M261.88 994V972.08L257.72 972.8V969.16L266.2 967.84V994H261.88ZM280.573 994.4C273.853 994.4 270.493 991.947 270.493 987.04C270.493 985.573 270.88 984.267 271.653 983.12C272.453 981.973 273.587 981.16 275.053 980.68C273.72 980.173 272.747 979.427 272.133 978.44C271.52 977.427 271.213 976.347 271.213 975.2C271.213 972.987 271.973 971.213 273.493 969.88C275.04 968.52 277.4 967.84 280.573 967.84C283.827 967.84 286.2 968.52 287.693 969.88C289.187 971.213 289.933 972.987 289.933 975.2C289.933 976.427 289.627 977.573 289.013 978.64C288.427 979.68 287.387 980.48 285.893 981.04C287.547 981.52 288.747 982.267 289.493 983.28C290.24 984.267 290.613 985.52 290.613 987.04C290.613 991.947 287.267 994.4 280.573 994.4ZM281.653 979.68C283.12 979.307 284.187 978.8 284.853 978.16C285.547 977.52 285.893 976.56 285.893 975.28C285.893 972.613 284.12 971.28 280.573 971.28C278.84 971.28 277.52 971.6 276.613 972.24C275.707 972.88 275.253 973.893 275.253 975.28C275.253 977.387 276.44 978.667 278.813 979.12L281.653 979.68ZM280.573 991C282.573 991 284.067 990.68 285.053 990.04C286.067 989.373 286.573 988.347 286.573 986.96C286.573 985.707 286.213 984.8 285.493 984.24C284.8 983.653 283.72 983.213 282.253 982.92L278.973 982.24C277.613 982.533 276.533 983.027 275.733 983.72C274.933 984.387 274.533 985.44 274.533 986.88C274.533 988.32 275.04 989.373 276.053 990.04C277.093 990.68 278.6 991 280.573 991Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("19") ? "active-numb" : "non-active-numb"
        }
        id="19"
        d="M128.88 1169V1147.08L124.72 1147.8V1144.16L133.2 1142.84V1169H128.88ZM146.093 1169.4C144.787 1169.4 143.653 1169.32 142.693 1169.16C141.733 1169 140.827 1168.79 139.973 1168.52V1164.76C140.8 1165.08 141.68 1165.32 142.613 1165.48C143.573 1165.64 144.64 1165.72 145.813 1165.72C148.213 1165.72 149.987 1165.15 151.133 1164C152.28 1162.85 152.853 1161.33 152.853 1159.44V1157.84C151.92 1158.51 150.853 1159.01 149.653 1159.36C148.453 1159.71 147.347 1159.88 146.333 1159.88C143.347 1159.88 141.12 1159.15 139.653 1157.68C138.213 1156.21 137.493 1154.13 137.493 1151.44C137.493 1148.91 138.28 1146.84 139.853 1145.24C141.427 1143.64 143.88 1142.84 147.213 1142.84C150.44 1142.84 152.867 1143.65 154.493 1145.28C156.147 1146.88 156.973 1149.39 156.973 1152.8V1158.6C156.973 1160.73 156.533 1162.61 155.653 1164.24C154.773 1165.87 153.52 1167.13 151.893 1168.04C150.267 1168.95 148.333 1169.4 146.093 1169.4ZM146.973 1156.56C148.067 1156.56 149.12 1156.37 150.133 1156C151.147 1155.63 152.053 1155.16 152.853 1154.6V1151.8C152.853 1148.04 150.96 1146.16 147.173 1146.16C145.253 1146.16 143.813 1146.63 142.853 1147.56C141.893 1148.49 141.413 1149.75 141.413 1151.32C141.413 1152.95 141.8 1154.23 142.573 1155.16C143.373 1156.09 144.84 1156.56 146.973 1156.56Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("20") ? "active-numb" : "non-active-numb"
        }
        id="20"
        d="M249.72 1169V1166.84C250.413 1165.21 251.373 1163.75 252.6 1162.44C253.853 1161.13 255.187 1159.87 256.6 1158.64C257.667 1157.71 258.547 1156.92 259.24 1156.28C259.96 1155.61 260.52 1155.01 260.92 1154.48C261.32 1153.95 261.6 1153.4 261.76 1152.84C261.92 1152.25 262 1151.57 262 1150.8C262 1149.41 261.6 1148.36 260.8 1147.64C260 1146.92 258.667 1146.56 256.8 1146.56C255.787 1146.56 254.747 1146.67 253.68 1146.88C252.64 1147.09 251.64 1147.39 250.68 1147.76V1143.92C251.613 1143.6 252.72 1143.35 254 1143.16C255.28 1142.95 256.493 1142.84 257.64 1142.84C260.52 1142.84 262.693 1143.55 264.16 1144.96C265.627 1146.37 266.36 1148.31 266.36 1150.76C266.36 1151.99 266.147 1153.08 265.72 1154.04C265.293 1154.97 264.707 1155.87 263.96 1156.72C263.213 1157.55 262.347 1158.4 261.36 1159.28C260.133 1160.35 258.973 1161.39 257.88 1162.4C256.813 1163.39 255.947 1164.47 255.28 1165.64H266.64V1169H249.72ZM281.392 1169.72C278.672 1169.72 276.485 1169.2 274.832 1168.16C273.178 1167.09 271.965 1165.57 271.192 1163.6C270.445 1161.6 270.072 1159.21 270.072 1156.44C270.072 1153.56 270.432 1151.11 271.152 1149.08C271.898 1147.05 273.098 1145.51 274.752 1144.44C276.405 1143.37 278.618 1142.84 281.392 1142.84C284.165 1142.84 286.365 1143.37 287.992 1144.44C289.645 1145.51 290.832 1147.05 291.552 1149.08C292.298 1151.11 292.672 1153.56 292.672 1156.44C292.672 1159.21 292.298 1161.6 291.552 1163.6C290.805 1165.57 289.605 1167.09 287.952 1168.16C286.298 1169.2 284.112 1169.72 281.392 1169.72ZM281.392 1166C283.952 1166 285.738 1165.16 286.752 1163.48C287.765 1161.77 288.272 1159.43 288.272 1156.44C288.272 1153.27 287.778 1150.83 286.792 1149.12C285.805 1147.41 284.005 1146.56 281.392 1146.56C278.778 1146.56 276.965 1147.41 275.952 1149.12C274.965 1150.83 274.472 1153.27 274.472 1156.44C274.472 1159.43 274.978 1161.77 275.992 1163.48C277.005 1165.16 278.805 1166 281.392 1166Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("21") ? "active-numb" : "non-active-numb"
        }
        id="21"
        d="M512.72 1169V1166.84C513.413 1165.21 514.373 1163.75 515.6 1162.44C516.853 1161.13 518.187 1159.87 519.6 1158.64C520.667 1157.71 521.547 1156.92 522.24 1156.28C522.96 1155.61 523.52 1155.01 523.92 1154.48C524.32 1153.95 524.6 1153.4 524.76 1152.84C524.92 1152.25 525 1151.57 525 1150.8C525 1149.41 524.6 1148.36 523.8 1147.64C523 1146.92 521.667 1146.56 519.8 1146.56C518.787 1146.56 517.747 1146.67 516.68 1146.88C515.64 1147.09 514.64 1147.39 513.68 1147.76V1143.92C514.613 1143.6 515.72 1143.35 517 1143.16C518.28 1142.95 519.493 1142.84 520.64 1142.84C523.52 1142.84 525.693 1143.55 527.16 1144.96C528.627 1146.37 529.36 1148.31 529.36 1150.76C529.36 1151.99 529.147 1153.08 528.72 1154.04C528.293 1154.97 527.707 1155.87 526.96 1156.72C526.213 1157.55 525.347 1158.4 524.36 1159.28C523.133 1160.35 521.973 1161.39 520.88 1162.4C519.813 1163.39 518.947 1164.47 518.28 1165.64H529.64V1169H512.72ZM537.232 1169V1147.08L533.072 1147.8V1144.16L541.552 1142.84V1169H537.232Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("22") ? "active-numb" : "non-active-numb"
        }
        id="22"
        d="M642.72 1169V1166.84C643.413 1165.21 644.373 1163.75 645.6 1162.44C646.853 1161.13 648.187 1159.87 649.6 1158.64C650.667 1157.71 651.547 1156.92 652.24 1156.28C652.96 1155.61 653.52 1155.01 653.92 1154.48C654.32 1153.95 654.6 1153.4 654.76 1152.84C654.92 1152.25 655 1151.57 655 1150.8C655 1149.41 654.6 1148.36 653.8 1147.64C653 1146.92 651.667 1146.56 649.8 1146.56C648.787 1146.56 647.747 1146.67 646.68 1146.88C645.64 1147.09 644.64 1147.39 643.68 1147.76V1143.92C644.613 1143.6 645.72 1143.35 647 1143.16C648.28 1142.95 649.493 1142.84 650.64 1142.84C653.52 1142.84 655.693 1143.55 657.16 1144.96C658.627 1146.37 659.36 1148.31 659.36 1150.76C659.36 1151.99 659.147 1153.08 658.72 1154.04C658.293 1154.97 657.707 1155.87 656.96 1156.72C656.213 1157.55 655.347 1158.4 654.36 1159.28C653.133 1160.35 651.973 1161.39 650.88 1162.4C649.813 1163.39 648.947 1164.47 648.28 1165.64H659.64V1169H642.72ZM663.072 1169V1166.84C663.765 1165.21 664.725 1163.75 665.952 1162.44C667.205 1161.13 668.538 1159.87 669.952 1158.64C671.018 1157.71 671.898 1156.92 672.592 1156.28C673.312 1155.61 673.872 1155.01 674.272 1154.48C674.672 1153.95 674.952 1153.4 675.112 1152.84C675.272 1152.25 675.352 1151.57 675.352 1150.8C675.352 1149.41 674.952 1148.36 674.152 1147.64C673.352 1146.92 672.018 1146.56 670.152 1146.56C669.138 1146.56 668.098 1146.67 667.032 1146.88C665.992 1147.09 664.992 1147.39 664.032 1147.76V1143.92C664.965 1143.6 666.072 1143.35 667.352 1143.16C668.632 1142.95 669.845 1142.84 670.992 1142.84C673.872 1142.84 676.045 1143.55 677.512 1144.96C678.978 1146.37 679.712 1148.31 679.712 1150.76C679.712 1151.99 679.498 1153.08 679.072 1154.04C678.645 1154.97 678.058 1155.87 677.312 1156.72C676.565 1157.55 675.698 1158.4 674.712 1159.28C673.485 1160.35 672.325 1161.39 671.232 1162.4C670.165 1163.39 669.298 1164.47 668.632 1165.64H679.992V1169H663.072Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("23") ? "active-numb" : "non-active-numb"
        }
        id="23"
        d="M122.72 1337V1334.84C123.413 1333.21 124.373 1331.75 125.6 1330.44C126.853 1329.13 128.187 1327.87 129.6 1326.64C130.667 1325.71 131.547 1324.92 132.24 1324.28C132.96 1323.61 133.52 1323.01 133.92 1322.48C134.32 1321.95 134.6 1321.4 134.76 1320.84C134.92 1320.25 135 1319.57 135 1318.8C135 1317.41 134.6 1316.36 133.8 1315.64C133 1314.92 131.667 1314.56 129.8 1314.56C128.787 1314.56 127.747 1314.67 126.68 1314.88C125.64 1315.09 124.64 1315.39 123.68 1315.76V1311.92C124.613 1311.6 125.72 1311.35 127 1311.16C128.28 1310.95 129.493 1310.84 130.64 1310.84C133.52 1310.84 135.693 1311.55 137.16 1312.96C138.627 1314.37 139.36 1316.31 139.36 1318.76C139.36 1319.99 139.147 1321.08 138.72 1322.04C138.293 1322.97 137.707 1323.87 136.96 1324.72C136.213 1325.55 135.347 1326.4 134.36 1327.28C133.133 1328.35 131.973 1329.39 130.88 1330.4C129.813 1331.39 128.947 1332.47 128.28 1333.64H139.64V1337H122.72ZM150.392 1337.4C149.618 1337.4 148.765 1337.35 147.832 1337.24C146.898 1337.16 146.005 1337.03 145.152 1336.84C144.325 1336.65 143.632 1336.45 143.072 1336.24V1332.44C144.138 1332.87 145.232 1333.19 146.352 1333.4C147.498 1333.59 148.645 1333.68 149.792 1333.68C151.872 1333.68 153.418 1333.37 154.432 1332.76C155.445 1332.15 155.952 1331.07 155.952 1329.52C155.952 1328.13 155.485 1327.13 154.552 1326.52C153.645 1325.91 152.338 1325.6 150.632 1325.6H146.752L147.112 1322.36H150.352C153.738 1322.36 155.432 1321.03 155.432 1318.36C155.432 1317.05 154.978 1316.09 154.072 1315.48C153.192 1314.87 151.765 1314.56 149.792 1314.56C148.698 1314.56 147.592 1314.67 146.472 1314.88C145.378 1315.09 144.405 1315.39 143.552 1315.76V1312.04C144.352 1311.72 145.392 1311.44 146.672 1311.2C147.952 1310.96 149.218 1310.84 150.472 1310.84C153.618 1310.84 155.952 1311.51 157.472 1312.84C159.018 1314.17 159.792 1315.88 159.792 1317.96C159.792 1319.24 159.472 1320.44 158.832 1321.56C158.218 1322.68 157.245 1323.48 155.912 1323.96C157.458 1324.36 158.578 1325.08 159.272 1326.12C159.992 1327.16 160.352 1328.39 160.352 1329.8C160.352 1332.39 159.445 1334.31 157.632 1335.56C155.818 1336.79 153.405 1337.4 150.392 1337.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("24") ? "active-numb" : "non-active-numb"
        }
        id="24"
        d="M251.72 1337V1334.84C252.413 1333.21 253.373 1331.75 254.6 1330.44C255.853 1329.13 257.187 1327.87 258.6 1326.64C259.667 1325.71 260.547 1324.92 261.24 1324.28C261.96 1323.61 262.52 1323.01 262.92 1322.48C263.32 1321.95 263.6 1321.4 263.76 1320.84C263.92 1320.25 264 1319.57 264 1318.8C264 1317.41 263.6 1316.36 262.8 1315.64C262 1314.92 260.667 1314.56 258.8 1314.56C257.787 1314.56 256.747 1314.67 255.68 1314.88C254.64 1315.09 253.64 1315.39 252.68 1315.76V1311.92C253.613 1311.6 254.72 1311.35 256 1311.16C257.28 1310.95 258.493 1310.84 259.64 1310.84C262.52 1310.84 264.693 1311.55 266.16 1312.96C267.627 1314.37 268.36 1316.31 268.36 1318.76C268.36 1319.99 268.147 1321.08 267.72 1322.04C267.293 1322.97 266.707 1323.87 265.96 1324.72C265.213 1325.55 264.347 1326.4 263.36 1327.28C262.133 1328.35 260.973 1329.39 259.88 1330.4C258.813 1331.39 257.947 1332.47 257.28 1333.64H268.64V1337H251.72ZM284.152 1337V1331.36H271.272V1328.28L284.672 1311.24H288.472V1327.84H291.112V1331.36H288.472V1337H284.152ZM275.512 1327.96H284.832V1316.2L275.512 1327.96Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("25") ? "active-numb" : "non-active-numb"
        }
        id="25"
        d="M509.72 1337V1334.84C510.413 1333.21 511.373 1331.75 512.6 1330.44C513.853 1329.13 515.187 1327.87 516.6 1326.64C517.667 1325.71 518.547 1324.92 519.24 1324.28C519.96 1323.61 520.52 1323.01 520.92 1322.48C521.32 1321.95 521.6 1321.4 521.76 1320.84C521.92 1320.25 522 1319.57 522 1318.8C522 1317.41 521.6 1316.36 520.8 1315.64C520 1314.92 518.667 1314.56 516.8 1314.56C515.787 1314.56 514.747 1314.67 513.68 1314.88C512.64 1315.09 511.64 1315.39 510.68 1315.76V1311.92C511.613 1311.6 512.72 1311.35 514 1311.16C515.28 1310.95 516.493 1310.84 517.64 1310.84C520.52 1310.84 522.693 1311.55 524.16 1312.96C525.627 1314.37 526.36 1316.31 526.36 1318.76C526.36 1319.99 526.147 1321.08 525.72 1322.04C525.293 1322.97 524.707 1323.87 523.96 1324.72C523.213 1325.55 522.347 1326.4 521.36 1327.28C520.133 1328.35 518.973 1329.39 517.88 1330.4C516.813 1331.39 515.947 1332.47 515.28 1333.64H526.64V1337H509.72ZM537.352 1337.4C536.205 1337.4 534.952 1337.31 533.592 1337.12C532.232 1336.93 531.098 1336.64 530.192 1336.24V1332.44C531.125 1332.84 532.192 1333.15 533.392 1333.36C534.592 1333.57 535.725 1333.68 536.792 1333.68C538.845 1333.68 540.352 1333.33 541.312 1332.64C542.298 1331.92 542.792 1330.75 542.792 1329.12C542.792 1327.63 542.445 1326.52 541.752 1325.8C541.058 1325.08 539.698 1324.72 537.672 1324.72H530.072V1322.08L530.752 1311.24H545.392L545.032 1314.6H534.432L533.992 1321.36H538.352C541.418 1321.36 543.658 1322.01 545.072 1323.32C546.485 1324.63 547.192 1326.59 547.192 1329.2C547.192 1331.73 546.365 1333.73 544.712 1335.2C543.058 1336.67 540.605 1337.4 537.352 1337.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("26") ? "active-numb" : "non-active-numb"
        }
        id="26"
        d="M637.72 1337V1334.84C638.413 1333.21 639.373 1331.75 640.6 1330.44C641.853 1329.13 643.187 1327.87 644.6 1326.64C645.667 1325.71 646.547 1324.92 647.24 1324.28C647.96 1323.61 648.52 1323.01 648.92 1322.48C649.32 1321.95 649.6 1321.4 649.76 1320.84C649.92 1320.25 650 1319.57 650 1318.8C650 1317.41 649.6 1316.36 648.8 1315.64C648 1314.92 646.667 1314.56 644.8 1314.56C643.787 1314.56 642.747 1314.67 641.68 1314.88C640.64 1315.09 639.64 1315.39 638.68 1315.76V1311.92C639.613 1311.6 640.72 1311.35 642 1311.16C643.28 1310.95 644.493 1310.84 645.64 1310.84C648.52 1310.84 650.693 1311.55 652.16 1312.96C653.627 1314.37 654.36 1316.31 654.36 1318.76C654.36 1319.99 654.147 1321.08 653.72 1322.04C653.293 1322.97 652.707 1323.87 651.96 1324.72C651.213 1325.55 650.347 1326.4 649.36 1327.28C648.133 1328.35 646.973 1329.39 645.88 1330.4C644.813 1331.39 643.947 1332.47 643.28 1333.64H654.64V1337H637.72ZM667.832 1337.4C664.605 1337.4 662.165 1336.6 660.512 1335C658.885 1333.4 658.072 1330.88 658.072 1327.44V1321.64C658.072 1319.51 658.512 1317.63 659.392 1316C660.272 1314.37 661.525 1313.11 663.152 1312.2C664.778 1311.29 666.712 1310.84 668.952 1310.84C670.258 1310.84 671.392 1310.92 672.352 1311.08C673.338 1311.24 674.245 1311.47 675.072 1311.76V1315.48C674.245 1315.19 673.352 1314.96 672.392 1314.8C671.458 1314.64 670.405 1314.56 669.232 1314.56C666.832 1314.56 665.058 1315.13 663.912 1316.28C662.765 1317.4 662.192 1318.91 662.192 1320.8V1322.4C663.125 1321.71 664.192 1321.2 665.392 1320.88C666.618 1320.53 667.725 1320.36 668.712 1320.36C671.725 1320.36 673.952 1321.09 675.392 1322.56C676.832 1324.03 677.552 1326.11 677.552 1328.8C677.552 1331.36 676.765 1333.44 675.192 1335.04C673.618 1336.61 671.165 1337.4 667.832 1337.4ZM667.872 1334.12C669.792 1334.12 671.232 1333.65 672.192 1332.72C673.152 1331.79 673.632 1330.53 673.632 1328.96C673.632 1327.31 673.232 1326.03 672.432 1325.12C671.658 1324.19 670.205 1323.72 668.072 1323.72C667.005 1323.72 665.952 1323.91 664.912 1324.28C663.898 1324.63 662.992 1325.09 662.192 1325.68V1328.44C662.192 1332.23 664.085 1334.12 667.872 1334.12Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("27") ? "active-numb" : "non-active-numb"
        }
        id="27"
        d="M120.72 1505V1502.84C121.413 1501.21 122.373 1499.75 123.6 1498.44C124.853 1497.13 126.187 1495.87 127.6 1494.64C128.667 1493.71 129.547 1492.92 130.24 1492.28C130.96 1491.61 131.52 1491.01 131.92 1490.48C132.32 1489.95 132.6 1489.4 132.76 1488.84C132.92 1488.25 133 1487.57 133 1486.8C133 1485.41 132.6 1484.36 131.8 1483.64C131 1482.92 129.667 1482.56 127.8 1482.56C126.787 1482.56 125.747 1482.67 124.68 1482.88C123.64 1483.09 122.64 1483.39 121.68 1483.76V1479.92C122.613 1479.6 123.72 1479.35 125 1479.16C126.28 1478.95 127.493 1478.84 128.64 1478.84C131.52 1478.84 133.693 1479.55 135.16 1480.96C136.627 1482.37 137.36 1484.31 137.36 1486.76C137.36 1487.99 137.147 1489.08 136.72 1490.04C136.293 1490.97 135.707 1491.87 134.96 1492.72C134.213 1493.55 133.347 1494.4 132.36 1495.28C131.133 1496.35 129.973 1497.39 128.88 1498.4C127.813 1499.39 126.947 1500.47 126.28 1501.64H137.64V1505H120.72ZM143.752 1505L153.232 1482.6H140.672V1479.24H157.912V1482.04L148.192 1505H143.752Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("28") ? "active-numb" : "non-active-numb"
        }
        id="28"
        d="M250.72 1505V1502.84C251.413 1501.21 252.373 1499.75 253.6 1498.44C254.853 1497.13 256.187 1495.87 257.6 1494.64C258.667 1493.71 259.547 1492.92 260.24 1492.28C260.96 1491.61 261.52 1491.01 261.92 1490.48C262.32 1489.95 262.6 1489.4 262.76 1488.84C262.92 1488.25 263 1487.57 263 1486.8C263 1485.41 262.6 1484.36 261.8 1483.64C261 1482.92 259.667 1482.56 257.8 1482.56C256.787 1482.56 255.747 1482.67 254.68 1482.88C253.64 1483.09 252.64 1483.39 251.68 1483.76V1479.92C252.613 1479.6 253.72 1479.35 255 1479.16C256.28 1478.95 257.493 1478.84 258.64 1478.84C261.52 1478.84 263.693 1479.55 265.16 1480.96C266.627 1482.37 267.36 1484.31 267.36 1486.76C267.36 1487.99 267.147 1489.08 266.72 1490.04C266.293 1490.97 265.707 1491.87 264.96 1492.72C264.213 1493.55 263.347 1494.4 262.36 1495.28C261.133 1496.35 259.973 1497.39 258.88 1498.4C257.813 1499.39 256.947 1500.47 256.28 1501.64H267.64V1505H250.72ZM281.152 1505.4C274.432 1505.4 271.072 1502.95 271.072 1498.04C271.072 1496.57 271.458 1495.27 272.232 1494.12C273.032 1492.97 274.165 1492.16 275.632 1491.68C274.298 1491.17 273.325 1490.43 272.712 1489.44C272.098 1488.43 271.792 1487.35 271.792 1486.2C271.792 1483.99 272.552 1482.21 274.072 1480.88C275.618 1479.52 277.978 1478.84 281.152 1478.84C284.405 1478.84 286.778 1479.52 288.272 1480.88C289.765 1482.21 290.512 1483.99 290.512 1486.2C290.512 1487.43 290.205 1488.57 289.592 1489.64C289.005 1490.68 287.965 1491.48 286.472 1492.04C288.125 1492.52 289.325 1493.27 290.072 1494.28C290.818 1495.27 291.192 1496.52 291.192 1498.04C291.192 1502.95 287.845 1505.4 281.152 1505.4ZM282.232 1490.68C283.698 1490.31 284.765 1489.8 285.432 1489.16C286.125 1488.52 286.472 1487.56 286.472 1486.28C286.472 1483.61 284.698 1482.28 281.152 1482.28C279.418 1482.28 278.098 1482.6 277.192 1483.24C276.285 1483.88 275.832 1484.89 275.832 1486.28C275.832 1488.39 277.018 1489.67 279.392 1490.12L282.232 1490.68ZM281.152 1502C283.152 1502 284.645 1501.68 285.632 1501.04C286.645 1500.37 287.152 1499.35 287.152 1497.96C287.152 1496.71 286.792 1495.8 286.072 1495.24C285.378 1494.65 284.298 1494.21 282.832 1493.92L279.552 1493.24C278.192 1493.53 277.112 1494.03 276.312 1494.72C275.512 1495.39 275.112 1496.44 275.112 1497.88C275.112 1499.32 275.618 1500.37 276.632 1501.04C277.672 1501.68 279.178 1502 281.152 1502Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("29") ? "active-numb" : "non-active-numb"
        }
        id="29"
        d="M507.72 1505V1502.84C508.413 1501.21 509.373 1499.75 510.6 1498.44C511.853 1497.13 513.187 1495.87 514.6 1494.64C515.667 1493.71 516.547 1492.92 517.24 1492.28C517.96 1491.61 518.52 1491.01 518.92 1490.48C519.32 1489.95 519.6 1489.4 519.76 1488.84C519.92 1488.25 520 1487.57 520 1486.8C520 1485.41 519.6 1484.36 518.8 1483.64C518 1482.92 516.667 1482.56 514.8 1482.56C513.787 1482.56 512.747 1482.67 511.68 1482.88C510.64 1483.09 509.64 1483.39 508.68 1483.76V1479.92C509.613 1479.6 510.72 1479.35 512 1479.16C513.28 1478.95 514.493 1478.84 515.64 1478.84C518.52 1478.84 520.693 1479.55 522.16 1480.96C523.627 1482.37 524.36 1484.31 524.36 1486.76C524.36 1487.99 524.147 1489.08 523.72 1490.04C523.293 1490.97 522.707 1491.87 521.96 1492.72C521.213 1493.55 520.347 1494.4 519.36 1495.28C518.133 1496.35 516.973 1497.39 515.88 1498.4C514.813 1499.39 513.947 1500.47 513.28 1501.64H524.64V1505H507.72ZM536.672 1505.4C535.365 1505.4 534.232 1505.32 533.272 1505.16C532.312 1505 531.405 1504.79 530.552 1504.52V1500.76C531.378 1501.08 532.258 1501.32 533.192 1501.48C534.152 1501.64 535.218 1501.72 536.392 1501.72C538.792 1501.72 540.565 1501.15 541.712 1500C542.858 1498.85 543.432 1497.33 543.432 1495.44V1493.84C542.498 1494.51 541.432 1495.01 540.232 1495.36C539.032 1495.71 537.925 1495.88 536.912 1495.88C533.925 1495.88 531.698 1495.15 530.232 1493.68C528.792 1492.21 528.072 1490.13 528.072 1487.44C528.072 1484.91 528.858 1482.84 530.432 1481.24C532.005 1479.64 534.458 1478.84 537.792 1478.84C541.018 1478.84 543.445 1479.65 545.072 1481.28C546.725 1482.88 547.552 1485.39 547.552 1488.8V1494.6C547.552 1496.73 547.112 1498.61 546.232 1500.24C545.352 1501.87 544.098 1503.13 542.472 1504.04C540.845 1504.95 538.912 1505.4 536.672 1505.4ZM537.552 1492.56C538.645 1492.56 539.698 1492.37 540.712 1492C541.725 1491.63 542.632 1491.16 543.432 1490.6V1487.8C543.432 1484.04 541.538 1482.16 537.752 1482.16C535.832 1482.16 534.392 1482.63 533.432 1483.56C532.472 1484.49 531.992 1485.75 531.992 1487.32C531.992 1488.95 532.378 1490.23 533.152 1491.16C533.952 1492.09 535.418 1492.56 537.552 1492.56Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("30") ? "active-numb" : "non-active-numb"
        }
        id="30"
        d="M645.04 1505.4C644.267 1505.4 643.413 1505.35 642.48 1505.24C641.547 1505.16 640.653 1505.03 639.8 1504.84C638.973 1504.65 638.28 1504.45 637.72 1504.24V1500.44C638.787 1500.87 639.88 1501.19 641 1501.4C642.147 1501.59 643.293 1501.68 644.44 1501.68C646.52 1501.68 648.067 1501.37 649.08 1500.76C650.093 1500.15 650.6 1499.07 650.6 1497.52C650.6 1496.13 650.133 1495.13 649.2 1494.52C648.293 1493.91 646.987 1493.6 645.28 1493.6H641.4L641.76 1490.36H645C648.387 1490.36 650.08 1489.03 650.08 1486.36C650.08 1485.05 649.627 1484.09 648.72 1483.48C647.84 1482.87 646.413 1482.56 644.44 1482.56C643.347 1482.56 642.24 1482.67 641.12 1482.88C640.027 1483.09 639.053 1483.39 638.2 1483.76V1480.04C639 1479.72 640.04 1479.44 641.32 1479.2C642.6 1478.96 643.867 1478.84 645.12 1478.84C648.267 1478.84 650.6 1479.51 652.12 1480.84C653.667 1482.17 654.44 1483.88 654.44 1485.96C654.44 1487.24 654.12 1488.44 653.48 1489.56C652.867 1490.68 651.893 1491.48 650.56 1491.96C652.107 1492.36 653.227 1493.08 653.92 1494.12C654.64 1495.16 655 1496.39 655 1497.8C655 1500.39 654.093 1502.31 652.28 1503.56C650.467 1504.79 648.053 1505.4 645.04 1505.4ZM669.782 1505.72C667.062 1505.72 664.876 1505.2 663.222 1504.16C661.569 1503.09 660.356 1501.57 659.582 1499.6C658.836 1497.6 658.462 1495.21 658.462 1492.44C658.462 1489.56 658.822 1487.11 659.542 1485.08C660.289 1483.05 661.489 1481.51 663.142 1480.44C664.796 1479.37 667.009 1478.84 669.782 1478.84C672.556 1478.84 674.756 1479.37 676.382 1480.44C678.036 1481.51 679.222 1483.05 679.942 1485.08C680.689 1487.11 681.062 1489.56 681.062 1492.44C681.062 1495.21 680.689 1497.6 679.942 1499.6C679.196 1501.57 677.996 1503.09 676.342 1504.16C674.689 1505.2 672.502 1505.72 669.782 1505.72ZM669.782 1502C672.342 1502 674.129 1501.16 675.142 1499.48C676.156 1497.77 676.662 1495.43 676.662 1492.44C676.662 1489.27 676.169 1486.83 675.182 1485.12C674.196 1483.41 672.396 1482.56 669.782 1482.56C667.169 1482.56 665.356 1483.41 664.342 1485.12C663.356 1486.83 662.862 1489.27 662.862 1492.44C662.862 1495.43 663.369 1497.77 664.382 1499.48C665.396 1501.16 667.196 1502 669.782 1502Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("31") ? "active-numb" : "non-active-numb"
        }
        id="31"
        d="M133.04 1673.4C132.267 1673.4 131.413 1673.35 130.48 1673.24C129.547 1673.16 128.653 1673.03 127.8 1672.84C126.973 1672.65 126.28 1672.45 125.72 1672.24V1668.44C126.787 1668.87 127.88 1669.19 129 1669.4C130.147 1669.59 131.293 1669.68 132.44 1669.68C134.52 1669.68 136.067 1669.37 137.08 1668.76C138.093 1668.15 138.6 1667.07 138.6 1665.52C138.6 1664.13 138.133 1663.13 137.2 1662.52C136.293 1661.91 134.987 1661.6 133.28 1661.6H129.4L129.76 1658.36H133C136.387 1658.36 138.08 1657.03 138.08 1654.36C138.08 1653.05 137.627 1652.09 136.72 1651.48C135.84 1650.87 134.413 1650.56 132.44 1650.56C131.347 1650.56 130.24 1650.67 129.12 1650.88C128.027 1651.09 127.053 1651.39 126.2 1651.76V1648.04C127 1647.72 128.04 1647.44 129.32 1647.2C130.6 1646.96 131.867 1646.84 133.12 1646.84C136.267 1646.84 138.6 1647.51 140.12 1648.84C141.667 1650.17 142.44 1651.88 142.44 1653.96C142.44 1655.24 142.12 1656.44 141.48 1657.56C140.867 1658.68 139.893 1659.48 138.56 1659.96C140.107 1660.36 141.227 1661.08 141.92 1662.12C142.64 1663.16 143 1664.39 143 1665.8C143 1668.39 142.093 1670.31 140.28 1671.56C138.467 1672.79 136.053 1673.4 133.04 1673.4ZM150.622 1673V1651.08L146.462 1651.8V1648.16L154.942 1646.84V1673H150.622Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("32") ? "active-numb" : "non-active-numb"
        }
        id="32"
        d="M259.04 1673.4C258.267 1673.4 257.413 1673.35 256.48 1673.24C255.547 1673.16 254.653 1673.03 253.8 1672.84C252.973 1672.65 252.28 1672.45 251.72 1672.24V1668.44C252.787 1668.87 253.88 1669.19 255 1669.4C256.147 1669.59 257.293 1669.68 258.44 1669.68C260.52 1669.68 262.067 1669.37 263.08 1668.76C264.093 1668.15 264.6 1667.07 264.6 1665.52C264.6 1664.13 264.133 1663.13 263.2 1662.52C262.293 1661.91 260.987 1661.6 259.28 1661.6H255.4L255.76 1658.36H259C262.387 1658.36 264.08 1657.03 264.08 1654.36C264.08 1653.05 263.627 1652.09 262.72 1651.48C261.84 1650.87 260.413 1650.56 258.44 1650.56C257.347 1650.56 256.24 1650.67 255.12 1650.88C254.027 1651.09 253.053 1651.39 252.2 1651.76V1648.04C253 1647.72 254.04 1647.44 255.32 1647.2C256.6 1646.96 257.867 1646.84 259.12 1646.84C262.267 1646.84 264.6 1647.51 266.12 1648.84C267.667 1650.17 268.44 1651.88 268.44 1653.96C268.44 1655.24 268.12 1656.44 267.48 1657.56C266.867 1658.68 265.893 1659.48 264.56 1659.96C266.107 1660.36 267.227 1661.08 267.92 1662.12C268.64 1663.16 269 1664.39 269 1665.8C269 1668.39 268.093 1670.31 266.28 1671.56C264.467 1672.79 262.053 1673.4 259.04 1673.4ZM272.462 1673V1670.84C273.156 1669.21 274.116 1667.75 275.342 1666.44C276.596 1665.13 277.929 1663.87 279.342 1662.64C280.409 1661.71 281.289 1660.92 281.982 1660.28C282.702 1659.61 283.262 1659.01 283.662 1658.48C284.062 1657.95 284.342 1657.4 284.502 1656.84C284.662 1656.25 284.742 1655.57 284.742 1654.8C284.742 1653.41 284.342 1652.36 283.542 1651.64C282.742 1650.92 281.409 1650.56 279.542 1650.56C278.529 1650.56 277.489 1650.67 276.422 1650.88C275.382 1651.09 274.382 1651.39 273.422 1651.76V1647.92C274.356 1647.6 275.462 1647.35 276.742 1647.16C278.022 1646.95 279.236 1646.84 280.382 1646.84C283.262 1646.84 285.436 1647.55 286.902 1648.96C288.369 1650.37 289.102 1652.31 289.102 1654.76C289.102 1655.99 288.889 1657.08 288.462 1658.04C288.036 1658.97 287.449 1659.87 286.702 1660.72C285.956 1661.55 285.089 1662.4 284.102 1663.28C282.876 1664.35 281.716 1665.39 280.622 1666.4C279.556 1667.39 278.689 1668.47 278.022 1669.64H289.382V1673H272.462Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("33") ? "active-numb" : "non-active-numb"
        }
        id="33"
        d="M386.04 1673.4C385.267 1673.4 384.413 1673.35 383.48 1673.24C382.547 1673.16 381.653 1673.03 380.8 1672.84C379.973 1672.65 379.28 1672.45 378.72 1672.24V1668.44C379.787 1668.87 380.88 1669.19 382 1669.4C383.147 1669.59 384.293 1669.68 385.44 1669.68C387.52 1669.68 389.067 1669.37 390.08 1668.76C391.093 1668.15 391.6 1667.07 391.6 1665.52C391.6 1664.13 391.133 1663.13 390.2 1662.52C389.293 1661.91 387.987 1661.6 386.28 1661.6H382.4L382.76 1658.36H386C389.387 1658.36 391.08 1657.03 391.08 1654.36C391.08 1653.05 390.627 1652.09 389.72 1651.48C388.84 1650.87 387.413 1650.56 385.44 1650.56C384.347 1650.56 383.24 1650.67 382.12 1650.88C381.027 1651.09 380.053 1651.39 379.2 1651.76V1648.04C380 1647.72 381.04 1647.44 382.32 1647.2C383.6 1646.96 384.867 1646.84 386.12 1646.84C389.267 1646.84 391.6 1647.51 393.12 1648.84C394.667 1650.17 395.44 1651.88 395.44 1653.96C395.44 1655.24 395.12 1656.44 394.48 1657.56C393.867 1658.68 392.893 1659.48 391.56 1659.96C393.107 1660.36 394.227 1661.08 394.92 1662.12C395.64 1663.16 396 1664.39 396 1665.8C396 1668.39 395.093 1670.31 393.28 1671.56C391.467 1672.79 389.053 1673.4 386.04 1673.4ZM406.782 1673.4C406.009 1673.4 405.156 1673.35 404.222 1673.24C403.289 1673.16 402.396 1673.03 401.542 1672.84C400.716 1672.65 400.022 1672.45 399.462 1672.24V1668.44C400.529 1668.87 401.622 1669.19 402.742 1669.4C403.889 1669.59 405.036 1669.68 406.182 1669.68C408.262 1669.68 409.809 1669.37 410.822 1668.76C411.836 1668.15 412.342 1667.07 412.342 1665.52C412.342 1664.13 411.876 1663.13 410.942 1662.52C410.036 1661.91 408.729 1661.6 407.022 1661.6H403.142L403.502 1658.36H406.742C410.129 1658.36 411.822 1657.03 411.822 1654.36C411.822 1653.05 411.369 1652.09 410.462 1651.48C409.582 1650.87 408.156 1650.56 406.182 1650.56C405.089 1650.56 403.982 1650.67 402.862 1650.88C401.769 1651.09 400.796 1651.39 399.942 1651.76V1648.04C400.742 1647.72 401.782 1647.44 403.062 1647.2C404.342 1646.96 405.609 1646.84 406.862 1646.84C410.009 1646.84 412.342 1647.51 413.862 1648.84C415.409 1650.17 416.182 1651.88 416.182 1653.96C416.182 1655.24 415.862 1656.44 415.222 1657.56C414.609 1658.68 413.636 1659.48 412.302 1659.96C413.849 1660.36 414.969 1661.08 415.662 1662.12C416.382 1663.16 416.742 1664.39 416.742 1665.8C416.742 1668.39 415.836 1670.31 414.022 1671.56C412.209 1672.79 409.796 1673.4 406.782 1673.4Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("34") ? "active-numb" : "non-active-numb"
        }
        id="34"
        d="M516.04 1673.4C515.267 1673.4 514.413 1673.35 513.48 1673.24C512.547 1673.16 511.653 1673.03 510.8 1672.84C509.973 1672.65 509.28 1672.45 508.72 1672.24V1668.44C509.787 1668.87 510.88 1669.19 512 1669.4C513.147 1669.59 514.293 1669.68 515.44 1669.68C517.52 1669.68 519.067 1669.37 520.08 1668.76C521.093 1668.15 521.6 1667.07 521.6 1665.52C521.6 1664.13 521.133 1663.13 520.2 1662.52C519.293 1661.91 517.987 1661.6 516.28 1661.6H512.4L512.76 1658.36H516C519.387 1658.36 521.08 1657.03 521.08 1654.36C521.08 1653.05 520.627 1652.09 519.72 1651.48C518.84 1650.87 517.413 1650.56 515.44 1650.56C514.347 1650.56 513.24 1650.67 512.12 1650.88C511.027 1651.09 510.053 1651.39 509.2 1651.76V1648.04C510 1647.72 511.04 1647.44 512.32 1647.2C513.6 1646.96 514.867 1646.84 516.12 1646.84C519.267 1646.84 521.6 1647.51 523.12 1648.84C524.667 1650.17 525.44 1651.88 525.44 1653.96C525.44 1655.24 525.12 1656.44 524.48 1657.56C523.867 1658.68 522.893 1659.48 521.56 1659.96C523.107 1660.36 524.227 1661.08 524.92 1662.12C525.64 1663.16 526 1664.39 526 1665.8C526 1668.39 525.093 1670.31 523.28 1671.56C521.467 1672.79 519.053 1673.4 516.04 1673.4ZM541.542 1673V1667.36H528.662V1664.28L542.062 1647.24H545.862V1663.84H548.502V1667.36H545.862V1673H541.542ZM532.902 1663.96H542.222V1652.2L532.902 1663.96Z"
        fill="black"
      />
      <path
        onClick={(e) => hendler(e)}
        className={
          curentSeatsArr.includes("35") ? "active-numb" : "non-active-numb"
        }
        id="35"
        d="M646.04 1673.4C645.267 1673.4 644.413 1673.35 643.48 1673.24C642.547 1673.16 641.653 1673.03 640.8 1672.84C639.973 1672.65 639.28 1672.45 638.72 1672.24V1668.44C639.787 1668.87 640.88 1669.19 642 1669.4C643.147 1669.59 644.293 1669.68 645.44 1669.68C647.52 1669.68 649.067 1669.37 650.08 1668.76C651.093 1668.15 651.6 1667.07 651.6 1665.52C651.6 1664.13 651.133 1663.13 650.2 1662.52C649.293 1661.91 647.987 1661.6 646.28 1661.6H642.4L642.76 1658.36H646C649.387 1658.36 651.08 1657.03 651.08 1654.36C651.08 1653.05 650.627 1652.09 649.72 1651.48C648.84 1650.87 647.413 1650.56 645.44 1650.56C644.347 1650.56 643.24 1650.67 642.12 1650.88C641.027 1651.09 640.053 1651.39 639.2 1651.76V1648.04C640 1647.72 641.04 1647.44 642.32 1647.2C643.6 1646.96 644.867 1646.84 646.12 1646.84C649.267 1646.84 651.6 1647.51 653.12 1648.84C654.667 1650.17 655.44 1651.88 655.44 1653.96C655.44 1655.24 655.12 1656.44 654.48 1657.56C653.867 1658.68 652.893 1659.48 651.56 1659.96C653.107 1660.36 654.227 1661.08 654.92 1662.12C655.64 1663.16 656 1664.39 656 1665.8C656 1668.39 655.093 1670.31 653.28 1671.56C651.467 1672.79 649.053 1673.4 646.04 1673.4ZM666.742 1673.4C665.596 1673.4 664.342 1673.31 662.982 1673.12C661.622 1672.93 660.489 1672.64 659.582 1672.24V1668.44C660.516 1668.84 661.582 1669.15 662.782 1669.36C663.982 1669.57 665.116 1669.68 666.182 1669.68C668.236 1669.68 669.742 1669.33 670.702 1668.64C671.689 1667.92 672.182 1666.75 672.182 1665.12C672.182 1663.63 671.836 1662.52 671.142 1661.8C670.449 1661.08 669.089 1660.72 667.062 1660.72H659.462V1658.08L660.142 1647.24H674.782L674.422 1650.6H663.822L663.382 1657.36H667.742C670.809 1657.36 673.049 1658.01 674.462 1659.32C675.876 1660.63 676.582 1662.59 676.582 1665.2C676.582 1667.73 675.756 1669.73 674.102 1671.2C672.449 1672.67 669.996 1673.4 666.742 1673.4Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_198_422"
          x="0"
          y="0"
          width="802"
          height="1796"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_198_422"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="8.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.77 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_198_422"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_198_422"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_198_422">
          <rect
            width="82"
            height="82"
            fill="white"
            transform="translate(102 43)"
          />
        </clipPath>
      </defs>
    </svg>
    <Link to='/booking-info-pas'>
    <button className="btn_prime">Save</button>

    </Link>
    </div>
  );
};

export default BusSeats35;

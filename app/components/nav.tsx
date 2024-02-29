import React, { useEffect, useState } from "react";

import { Form, Link, useMatch, useRouteLoaderData } from "@remix-run/react";
import { Modal } from "antd";
import fb from '~/../public/assets/ivoyant1.png'
import twitter from '~/../public/assets/ivoyant1.png'
import linkedin from '~/../public/assets/ivoyant1.png'
import yt from '~/../public/assets/ivoyant1.png'
import ivurl from '../../public/assets/ivurl.svg';
import defaultsvg from '../../public/assets/ivoyant1.png';
import { success,errorMessage } from "~/utils/notifications";
import Sidebar from "./sidebar";
const Nav = () => {
  const Blogmatched = useMatch("/resources/blog/:id");
  const isBlogRoute = Blogmatched !== null;
  const CaseStudymatched = useMatch("/resources/case-study/:id");
  const CaseStudyRoute = CaseStudymatched !== null;
  const navdata = useRouteLoaderData("root") as any;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState<string>("");
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index:number) =>{
    (index === clicked) ? setClicked(-1) : setClicked(index)
  }
  const handleClick = () => {
    setToggleNav(!toggleNav);
    setTimeout(() => {
      setToggleNav(false);
    }, 100);
  };

  
 
  const handleHamburgerClick = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     
      <nav className="fixed top-0 z-50 w-full bg-nav-dark pt-2 pb-1 lg:block hidden">
        <div className="flex flex-row items-center justify-around">
          <Link to="/">
            {" "}
            <div className="flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
                <img
                  src={ivurl}
                  alt="iVoyant Logo"
                  className="aspect-video h-16 object-contain"
                />
            </div>
          </Link>
          
          <div className="flex flex-row gap-6 " >
          <Link to="/contact-us">
            <div>
              <button name="contactus" className="hue-btn" ><span>CONTACT US</span></button>
            </div>
            </Link>
            <div
              className="hamburger justify-center items-center"
              onClick={handleHamburgerClick}
            >
              <svg className="w-6 h-6"></svg>
              {sidebarOpen && <Sidebar />}
            </div>
          </div>
        </div>
        {isBlogRoute || CaseStudyRoute ? (
        <div className="progress-container pt-2">
          <div
            className="progress-bar"
            id="myBar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>):(<div></div>)}
      </nav>
      <nav className="fixed lg:hidden top-0 z-50 w-full bg-nav-dark pt-2 pb-1 h-16 flex px-4">
        <Link to="/" prefetch="intent" className=" mr-auto flex">
              <div className="flex flex-row justify-center items-center object-contain">
                  <img
                    src={ivurl}
                    alt="iVoyant Logo"
                    className="aspect-video h-14 object-contain"
                  />
              </div>
          </Link>
          <div className="flex relative">
            <button onClick={handleHamburgerClick}>
              {sidebarOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="url(#paint0_linear_7960_52353)"/>
                <defs>
                <linearGradient id="paint0_linear_7960_52353" x1="6" y1="6" x2="18.3047" y2="7.28271" gradientUnits="userSpaceOnUse">
                <stop offset="0.00621719" stop-color="#B9C1EC"/>
                <stop offset="1" stop-color="#A3B1FF"/>
                </linearGradient>
                </defs>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4.5H3V6h18V4.5Z" fill="url(#a)"/>
                  <path d="M21 18H3v1.5h18V18Z" fill="url(#b)"/>
                  <path d="M21 9H3v1.5h18V9Z" fill="url(#c)"/>
                  <path d="M21 13.5H3V15h18v-1.5Z" fill="url(#d)"/>
                  <defs>
                    <linearGradient id="a" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                    <linearGradient id="b" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                    <linearGradient id="c" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                    <linearGradient id="d" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </button>
          </div>
          <div className={`absolute w-full ${(sidebarOpen)? 'flex':'hidden'} lg:hidden flex-col justify-between left-0  bg-haiti h-fit gap-10 screen-height text-gray-200 p-4 z-[999]`}>
            <div className="flex ">
              <div className="flex flex-col w-fit gap-5">
                <div className="w-fit mx-auto gap-8 grid">
                 <h1>hello here category</h1>
                  <Link onClick={handleHamburgerClick}  to={'/contact-us'} className='capitalize text-left font-montserrat text-xl font-semibold text-gray-200' >Contact Us</Link>
                </div>
              </div>
              <div className="h-full w-fit text-white sm:ml-10 ml-6 max-h-80 overflow-y-scroll transition-opacity mr-auto">
               <h1>categrory 2</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-6">
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={yt} className="w-8 h-8" />
                </a>
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={linkedin} className="w-8 h-8" />
                </a>
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={fb} className="w-8 h-8" />
                </a>
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={twitter} className="w-8 h-8" />
                </a>
              </div>
              <small className="capitalize font-poppins pt-2 text-gray-200 font-light leading-4">&#169; 2023 iVoyant All Rights Reserved</small>
            </div>
          </div>
      </nav>
    </>
  );
};
export default Nav;

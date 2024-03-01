import React, { useEffect, useState } from "react";

import { Form, Link, useMatch, useRouteLoaderData } from "@remix-run/react";
import { Modal } from "antd";

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
     
      <nav className="fixed top-0 z-50 w-full bg-nav-dark pt-2 pb-1 ">
        <div className="flex flex-row items-center justify-between">
          <Link to="/">
            {" "}
            <div className="ml-8 flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
                <img
                  src={ivurl}
                  alt="iVoyant Logo"
                  className="aspect-video h-16 object-contain"
                />
            </div>
          </Link>
          
          <div className="flex flex-row gap-6 " >
          <Link to="/">
            <div className="mr-8">
              <button name="contactus" className="hue-btn" ><span>CONTACT US</span></button>
            </div>
            </Link>
          
          </div>
        </div>
       
      </nav>
      
    </>
  );
};
export default Nav;

import React from "react";
import herologourl from '../../public/assets/procurecon-logo.png';
import tenyears from '../../public/assets/tenyears.png';
import logo from '../../public/assets/ivoyant_logo.png';
import procuretext from '../../public/assets/ProcureCon_text.png';

import sectionbg from '../../public/assets/section-bg.png';
function LeftSectionProcure() {
  return (
    <section className="flex flex-col items-center pt-[2rem] px-4 text-center relative text-white " style={{
        backgroundImage: `url(${sectionbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100%'
      }} >
     <ImageWithAlt src={logo} alt="Company logo" class_name={" image-ivoyant-logo ml-[1rem] mt-[1.06rem] absolute left-0 top-0"}/>
     
      <ImageWithAlt src={tenyears} alt="10years" class_name={"  mt-[2.81rem] image-procure"}/>
      <HeaderText title="ProcureCon" classname={" header-text font-notosans font-medium "}  />     
      <HeaderText title="IT Sourcing" classname={" header-subtext"}  />     
      <Header title="Get in touch with us" />
      <TextBlock text="We are an IT services and solutions provider for all your digital needs" />
      <SubText text="Visit for more" />
      <TextBlockLink text="www.ivoyant.com" />
    </section>
  );
}

function ImageWithAlt({ src, alt, class_name }:{src:any,alt:any,class_name:any}) {
    return (
      <img loading="eager" src={src} alt={alt} className={class_name} />

    );
  }

function Header({ title }:{title:any}) {
  return (
    <h2 className=" header">{title}</h2>
  );
}
function HeaderText({ title, classname }:{title:any,classname:any}) {
  return (
    <h2 className={classname}>{title}</h2>
  );
}

function TextBlock({ text }:{text:any}) {
  return (
    <p className="  max-w-[434px] max-md:max-w-full text-block">{text}</p>
  );
}
function TextBlockLink({ text }:{text:any}) {
  return (
    <a href="https://ivoyant-website-ui-dev.azurewebsites.net/" className=" w-[434px] max-md:max-w-full text-block-link">{text}</a>
  );
}

function SubText({ text }:{text:any}) {
  return (
    <small className="  max-md:mt-10 max-md:max-w-full subtext">{text}</small>
  );
}

export default LeftSectionProcure;


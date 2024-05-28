import React from "react";
import herologourl from '../../public/assets/procurecon-logo.png';
import meetuptag from '../../public/assets/procuretag.png';

import sectionbg from '../../public/assets/procure-bg.png';
function LeftSection() {
  return (
    <section className="flex flex-col items-center pt-[2rem] text-center text-white " >
      <ImageWithAlt src={herologourl} alt="Company logo" />
      <Header title="Get in touch with us" />
      <TextBlock text="We are an IT services and solutions provider for all your needs" />
      <SubText text="Visit for more" />
      <TextBlockLink text="www.ivoyant.com" />
      <BottomImageWithAlt src={meetuptag} alt="Visualization of services offered" />
    </section>
  );
}

function ImageWithAlt({ src, alt }:{src:any,alt:any}) {
    return (
      // <img loading="eager" src={src} alt={alt} className=" max-w-full aspect-[4.17]  image-fintech" />
      <img loading="eager" src={src} alt={alt} className=" max-w-full  image-fintech" />

    );
  }

function BottomImageWithAlt({ src, alt }:{src:any,alt:any}) {
  return (
    <img loading="eager" src={src} alt={alt} className="mt-2.5  w-full" />
  );
}

function Header({ title }:{title:any}) {
  return (
    <h2 className="mt-[5.81rem]  max-md:mt-10 max-md:max-w-full header">{title}</h2>
  );
}

function TextBlock({ text }:{text:any}) {
  return (
    <p className="mt-4  w-[434px] max-md:max-w-full text-block">{text}</p>
  );
}
function TextBlockLink({ text }:{text:any}) {
  return (
    <a href="https://www.ivoyant.com/" className="mt-[0.38rem]  w-[434px] max-md:max-w-full text-block-link">{text}</a>
  );
}

function SubText({ text }:{text:any}) {
  return (
    <small className="mt-14  max-md:mt-10 max-md:max-w-full subtext">{text}</small>
  );
}

export default LeftSection;


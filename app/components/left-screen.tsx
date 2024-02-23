import React from "react";

function ContactSection() {
  return (
    <section className="flex flex-col items-center pt-12 text-base font-medium text-center text-white bg-green-900 w-[45%] ">
      <ImageWithAlt src="https://cdn.builder.io/api/v1/image/assets/TEMP/2381f6ccd12a72a205e53cb22840e56c08bb4f057e490d47b5eab4f338bae324?apiKey=9e16588387084fb2a9a51a1b99489136&" alt="Company logo" />
      <Header title="Get in touch with us" />
      <TextBlock text="We are an IT services and solutions provider for all your Fintech needs" />
      <SubText text="Visit for more" />
      <TextBlock text="www.ivoyant.com" />
      <BottomImageWithAlt src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0cd2b0fa7ed8b81ab533956f64f347bf9d453ad9e4b96b3e6f16860fac2130?apiKey=9e16588387084fb2a9a51a1b99489136&" alt="Visualization of services offered" />
    </section>
  );
}

function ImageWithAlt({ src, alt }:{src:any,alt:any}) {
    return (
      <img loading="lazy" src={src} alt={alt} className="mt-2.5 max-w-full aspect-[4.17] w-[376px]" />
    );
  }

function BottomImageWithAlt({ src, alt }:{src:any,alt:any}) {
  return (
    <img loading="lazy" src={src} alt={alt} className="mt-2.5 max-w-full  w-[376px]" />
  );
}

function Header({ title }:{title:any}) {
  return (
    <h2 className="mt-24 text-3xl max-md:mt-10 max-md:max-w-full">{title}</h2>
  );
}

function TextBlock({ text }:{text:any}) {
  return (
    <p className="mt-4 leading-7 w-[434px] max-md:max-w-full">{text}</p>
  );
}

function SubText({ text }:{text:any}) {
  return (
    <small className="mt-14 text-sm text-yellow-100 max-md:mt-10 max-md:max-w-full">{text}</small>
  );
}

export default ContactSection;
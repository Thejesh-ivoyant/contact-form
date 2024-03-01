import React from "react";
import videourl from "../../public/assets/success.mp4";
import ivurl from '../../public/assets/logo.svg';
import { Link } from "@remix-run/react";

const MainTitle = ({ title }:{title:any}) => (
  <h1 className="self-center  main-title">
    {title}
  </h1>
);

const Subtitle = ({ children }:{children:any}) => (
  <p className="mt-4  subtitle">{children}</p>
);

const ActionLink = ({ children }:{children:any}) => (
  <p className="mt-[4rem] ">
    {children}
  </p>
);

const Image = ({ src, alt }:{src:any,alt:any}) => (
  <img loading="eager" src={src} alt={alt} className=" mt-18 w-full aspect-[4] fill-indigo-50" />
);


function Success() {
  return (
    <section className="flex justify-between flex-col items-center h-full">
      <div className="items-center  text-center max-w-[34.68875rem]  form-container ">
      <div className="flex flex-row mt-[3.5rem]  justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit h-fit">
                    <img
                      src={ivurl}
                      alt="iVoyant Logo"
                      className="flex  w-[10.38888rem] object-contain"
                    />
      
                </div>  
       <video
          preload="true"
          muted
          loop
          playsInline
          src={videourl}
          autoPlay
          className="aspect-square w-[9.8125rem] mt-[37px] "
        />

      <article className="flex flex-col px-16 max-w-full w-full">
        <MainTitle title="Thank you for sharing your details" />
        <Subtitle>our team will reach out to you soon!</Subtitle>
      </article>
      <ActionLink>
        <span className="redirect-msg">To know how we are revolutionising the FinTech Industry{" "}</span>
       <Link to={'/fintech'}><div className="link">Click here</div></Link> 
      </ActionLink>

        </div>
        <div className="flex w-full">
        <Image 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0373624fac0571538fed738a2431e00b0eb26f8c5b7ba1d667a70e231aabdf4?apiKey=9e16588387084fb2a9a51a1b99489136&" 
        alt="Fintech revolution illustration"
      />
        </div>
      
    </section>
  );
}

export default Success;
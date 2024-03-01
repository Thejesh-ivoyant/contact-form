import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { servicesList } from "../contents/content";
const Section4 = () => {
  const loaderData = useLoaderData() as any;
  const [openServices, setOpenServices] = useState<number[]>([]);
  const [toggleState, setToggleState] = useState(1);
  const [currState, setCurrState] = useState<number>(-1);
  const servicesData = JSON.parse(servicesList);
  const toggleExpansion = (clickedId: number) => {
    setCurrState((prevState) => (prevState === clickedId ? -1 : clickedId));
  };
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData.section4Image}) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <section className="relative flex justify-center flex-col lg:flex-row lg:h-[600px] w-full">
      <div
        className="flex flex-1 items-center text-center flex-col h-full min-h-[16rem] text-white "
        style={gradientStyle}
      >
        <div className="px-4 flex flex-col gap-4 px-4">
          <h2 className="flex float-left text-2xl lg:text-3xl font-montserrat w-full font-medium p-4 s4-title ">
          FinTech Use cases - AI enabling FinTech
          </h2>
          <p className="flex p-4">
          FinTech is in the forefront of the digital transformation with AI adoption
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col h-full font-montserrat justify-center">
        <div className="overflow-y-auto">
          {servicesData.servicesList?.map((service: any) => (
            <div
              key={service.id}
              className="flex flex-col items-center gap-1 w-full p-4"
            >
              <div
                onClick={() => toggleExpansion(service.id)}
                className="flex justify-start bg-slate items-start cursor-pointer font-medium text-xl w-full service-title p-4"
              >
                <span>{service.name}</span>
                <img
                  src={
                    !(service.id === currState)
                      ? `../assets/down-arrow.svg`
                      : `../assets/up-arrow-Dbg.svg`
                  }
                  className="ml-auto my-auto block"
                  alt="vector"
                />
              </div>
              <div
                className={`service-description ${
                  service.id === currState ? "open" : ""
                } font-poppins px-4`}
              >
                <p className="s4-desc">{service.description}</p>
                {service.bullets.map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </div>
              <ul></ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Section4;

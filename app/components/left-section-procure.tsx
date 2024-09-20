import tenyears from '../../public/assets/nmsdc-logo.svg';

import sectionbg from '../../public/assets/section-bg-nmsdc.png';
function LeftSectionProcure() {
  return (
    <section className="flex flex-col items-center  px-4 text-center relative  text-white " style={{
        backgroundImage: `url(${sectionbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100%'
      }} >
     <div className='holder-procure'> 
      <ImageWithAlt src={tenyears} alt="nmsdc" class_name={"   image-procure"}/>
      {/* <HeaderText title="ProcureCon" classname={" header-text font-notosans font-medium "}  />     
      <HeaderText title="IT Sourcing" classname={"header-subtext"}  />      */}
      
      <div className="border-line"></div>

<Header title="Get in touch with us" />
      <TextBlock text="We are an IT services and solutions provider for all your digital needs" />
      <SubText text="Visit for more" />
      <TextBlockLink text="www.ivoyant.com" />
      </div>
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
    <p className="   text-block">{text}</p>
  );
}
function TextBlockLink({ text }:{text:any}) {
  return (
    <a href="https://www.ivoyant.com/" className="  text-block-link">{text}</a>
  );
}

function SubText({ text }:{text:any}) {
  return (
    <small className=" subtext">{text}</small>
  );
}

export default LeftSectionProcure;


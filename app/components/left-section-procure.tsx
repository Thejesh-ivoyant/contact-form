import tenyears from '../../public/assets/head.svg';
import top from '../../public/assets/top.png';
import sectionbg from '../../public/assets/bgimagenmsdc.png';
function LeftSectionProcure() {
  return (
    //  style={{
    //     backgroundImage: `url(${sectionbg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height:'100%'
    //   }} 
    <section className="flex flex-col items-center  px-4 text-center relative  text-white h-full " >
            <ImageWithAlt src={top} alt="nmsdc" class_name={"top-left"}/>

     <div className='holder-procure'> 
      <ImageWithAlt src={tenyears} alt="nmsdc" class_name={"   image-procure"}/>
      {/* <HeaderText title="ProcureCon" classname={" header-text font-notosans font-medium "}  />     
      <HeaderText title="IT Sourcing" classname={"header-subtext"}  />      */}
    <section class="event-banner mt-[28px]">
 <span class="event-location">ATLANTA</span>
<span class="event-date">OCTOBER 20-23, 2024</span>
</section>
      <div className="border-line"></div>

<Header title="Get in touch with us" />
      <TextBlock text="We excel in IT Services, Product Development, IT Consulting & Staffing Solutions" />
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


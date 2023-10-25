import LogoSVG from "../assets/logo/48aa3675-b4cb-47a2-8127-0789544698b4.svg"

export default function Logo({label, className, id}) {
    return ( 
    <section className={"logo " + className} id={id}>
      <img src={LogoSVG}/>
    </section> 
    );
  }
  
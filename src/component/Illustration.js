export default function Illustration({url, className, id}) {
    return ( 
    <section className={"illustration " + className} id={id}>
      <div><img src={url}/></div>
    </section> 
    );
  }
  
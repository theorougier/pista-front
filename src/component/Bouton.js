export default function Bouton({label, className, id, variant, handleclick, svg=false, url}) {
  console.log(variant)
  return ( 
  <section className={`bouton-base` + variant&&`${variant}` + className&&`${className}`} id={id}>
    <button onClick={handleclick}>{
      svg? 
        <img src={url}/>
      :
        label
    }</button> 
  </section> 
  );
}

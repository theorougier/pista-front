export default function Bouton({label, className, id, variant, handleclick, svg=false, url, style}) {
  console.log(variant)
  return ( 
  <section className={`bouton-base ` + `${variant} ` + `${className}`} id={id}>
    <button onClick={handleclick} style={style}>{
      svg? 
        <img src={url}/>
      :
        label
    }</button> 
  </section> 
  );
}

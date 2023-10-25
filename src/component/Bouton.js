export default function Bouton({label, className, id, type="primary", handleclick}) {
  return ( 
  <section className={type? "bouton-base primary " + className : "bouton-base secondaire " + className} id={id}>
    <button onClick={handleclick}>{label}</button> 
  </section> 
  );
}

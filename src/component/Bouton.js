export default function Bouton({label, className, id, variant, handleclick}) {
  console.log(variant)
  return ( 
  <section className={`bouton-base ${variant}`} id={id}>
    <button onClick={handleclick}>{label}</button> 
  </section> 
  );
}

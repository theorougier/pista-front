export default function Button({label, className, id}) {
  return ( 
  <section className={...className} id={id}>
    <button>{{label}}</button> 
  </section> 
  );
}

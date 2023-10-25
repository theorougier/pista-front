
export default function Formulaire({children, label, className, id}) {
    return ( 
    <section className={className} id={id}>
      <form>{children}</form> 
    </section> 
    );
  }
  
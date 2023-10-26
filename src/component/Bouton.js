export default function Bouton({ label, className, id, variant, handleclick }) {
  return (
    <section className={`bouton-base ${variant} ${className}`} id={id}>
      <button onClick={handleclick}>{label}</button>
    </section>
  );
}

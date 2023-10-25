
export default function Input({type, placeholder, label, sous_label, className, id}) {

    return ( 
    <div className={"input " + className} id={id}>
      <label>{label}<br/><strong>{sous_label}</strong></label>
      <div>
        <input type={type} placeholder={placeholder}/>
        <button onClick={handleClick}><img src={Icon} /></button>
      </div>
    </div> 
    );
  }
  
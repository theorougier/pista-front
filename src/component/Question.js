import React from 'react';

function Question({ label, sub_label, type, onChange, value }) {
    
  return (
    <div className='flex flex-col'>
      <label>{label}<br/><strong>{sub_label}</strong></label>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

export default Question;
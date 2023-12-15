import '../index.css'

export default function FilterBtn({type, index,name, task,setPageNumber}) {
  return (
    <div className='containerRadioBtn'>
    <label>
      <input onClick={()=>{setPageNumber(1),task(type)}} type="radio" name={name}  value={type} id={`${name}-${index}`}/>{type}
    </label>
  </div>
    
  );
}
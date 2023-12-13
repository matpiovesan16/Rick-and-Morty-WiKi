import React from 'react';
import '../Style/search.css'

export const Search = ({setSearch,setPageNumber}) => {
  return (
    <form action="">
        <input type="text" placeholder='Search for Characters' id='input' onChange={(e)=>{setPageNumber(1);  setSearch(e.target.value)}}/>
        <button onClick={e=>{e.preventDefault(); }} className='btn'>Search</button>
    </form>
  )
}

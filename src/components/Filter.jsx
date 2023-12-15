import React from 'react'
import '../Style/filter.css'
import Gender from './Gender'
import Status from './Status'
import Species from './Species'

export const Filter = ({setStatus,setPageNumber,setGender, setSpecies, clearFilter}) => {
  return (
  <div className='containerFilters'>
    <h3>Filter</h3>
    <button className='btnFilter' onClick={()=>{
      setStatus(clearFilter), setGender(clearFilter), setSpecies(clearFilter), setPageNumber(1), window.location.reload(false)
    }}>Clear Filter</button>
    <div className='containerBtnFilter'>
    <Gender setGender={setGender} setPageNumber={setPageNumber}></Gender>
    <Status setStatus={setStatus} setPageNumber={setPageNumber}></Status>
    <Species setSpecies={setSpecies} setPageNumber={setPageNumber}></Species>
    </div>

  </div>

 )
}

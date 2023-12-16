import React from 'react'
import '../Style/filter.css'
import FilterLocationList from './FilterLocationList'

export const FilterLocation = ({setFilterName, setPageNumber,setNameLocation}) => {
  return (
  <div className='containerFilters'>
    <h3>Filter</h3>
    <button className='btnFilter' onClick={()=>{ setFilterName(''), window.location.reload(false)}}>Clear Filter</button>
    <div className='containerBtnFilter'>
        <FilterLocationList setFilterName={setFilterName} setPageNumber={setPageNumber} setNameLocation={setNameLocation}></FilterLocationList>
    </div>

  </div>

 )
}
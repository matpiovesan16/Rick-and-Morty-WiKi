import React from 'react'
import '../Style/filter.css'
import FilterEpisodesList from './FilterEpisodesList'

export const FilterEpisodes = ({setFilterName, setPageNumber,setNameEpisodes}) => {
  return (
  <div className='containerFilters'>
    <h3>Filter</h3>
    <button className='btnFilter' onClick={()=>{ setFilterName(''), window.location.reload(false)}}>Clear Filter</button>
    <div className='containerBtnFilter'>
        <FilterEpisodesList setFilterName={setFilterName} setPageNumber={setPageNumber} setNameEpisodes={setNameEpisodes}></FilterEpisodesList>
    </div>

  </div>

 )
}
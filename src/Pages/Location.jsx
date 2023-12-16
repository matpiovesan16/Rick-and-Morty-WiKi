import React from 'react'
import { useEffect, useState } from 'react';
import { CardEpisodes } from '../components/CardEpisodes';
import { FilterLocation } from '../components/FilterLocation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Location = () => {
  
  const [dataResults, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setDataResults] = useState([]);
  const [dataInfo, setDataInfo] = useState("");
  const [name, setName] = useState("");
 
  let api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${name}`;
 
  
  useEffect(() => {
      const fetchData = async () => {
      const res = await fetch(api);
      const data = await res.json();

      const dataResults = data.results;
      const dataInfo = data.info;
      setDataInfo(dataInfo);
      setData(dataResults);
      console.log(dataResults);


      let a = await Promise.all(dataResults[0].residents.map((x)=>{
        return fetch(x).then((res) => res.json());
      }))

      console.log(results);

      
      
      setDataResults(a);
    };
    fetchData();
  }, [api]);

  

  return (
    <div>
      {dataResults === null ? (<><h1>No data Found</h1></>):
      (<div>
        <div className='tituloEpisodes'>
        <h1>Location name:<span> {dataResults[0].name}</span> </h1>
        <p>{dataResults[0].dimension}</p>
        <p>{dataResults[0].type}</p>
        </div>
        <div className="containerMain">
          <FilterLocation setFilterName={setName} setPageNumber={setPageNumber} setNameLocation={dataResults}></FilterLocation>
            <Card data={results}></Card>
        </div>

       </div>
      )  }
      
    </div>
  )
}
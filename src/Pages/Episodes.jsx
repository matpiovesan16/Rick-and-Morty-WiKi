import React from 'react'
import { useEffect, useState } from 'react';
import { CardEpisodes } from '../components/CardEpisodes';
import { FilterEpisodes } from '../components/FilterEpisodes';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Episodes = () => {
  
  const [dataResults, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setDataResults] = useState([]);
  const [dataInfo, setDataInfo] = useState("");
  const [name, setName] = useState("");
 
  let api = `https://rickandmortyapi.com/api/episode/?name=${name}`;
 
  
  useEffect(() => {
      const fetchData = async () => {
      const res = await fetch(api);
      const data = await res.json();

      const dataResults = data.results;
      const dataInfo = data.info;
      setDataInfo(dataInfo);
      setData(dataResults);
      console.log(results);


      let a = await Promise.all(dataResults[0].characters.map((x)=>{
        return fetch(x).then((res) => res.json());
      }))

      
      
      setDataResults(a);
    };
    fetchData();
  }, [api]);

  

  return (
    <div>
      {dataResults === null ? (<><h1>No data Found</h1></>):
      (<div>
        <div className='tituloEpisodes'>
        <h1>Episode name:<span> {dataResults[0].name}</span> </h1>
        <p>{dataResults[0].episode}</p>
        <p>{dataResults[0].air_date}</p>
        </div>
        <div className="containerMain">
          <FilterEpisodes setFilterName={setName} setPageNumber={setPageNumber} setNameEpisodes={dataResults}></FilterEpisodes>
            <Card data={results}></Card>
        </div>

       </div>
      )  }
      
    </div>
  )
}

import React from 'react'

export const CardEpisodes = ({data}) => {
    var display;


    if(data){
        display = data.map((item) =>{
            return(<div key={item.id}>
                <h3>{item.name}</h3>
            </div>)
        })

    }else{
        return <h1>No found episode</h1>;
    }

    


  return (
  <div>{display}</div>
    )
}

import "../index.css";
import React from "react";
import classNames from "classnames";

export const Card = ({ data }) => {

  let display;
  let circle;

  if (data) {
    display = data.map((CharacterData) => {
      var dead;
      if(CharacterData.status ==='Alive'){
          circle=true;
      }else{
          if(CharacterData.status=='Dead'){
              dead=true
          }else{
              circle=null
          }
      }

      return (
          <div key={CharacterData.id} className="cardCharacter" id="cardCharacter">
          <div
            className="img"
            id="img"
            style={{ backgroundImage: `url(${CharacterData.image})` }}
          ></div>
          <div className="containerInfo">
            <div className="nameStatus">
              <h1 id="name">{CharacterData.name}</h1>
              <div className="estado">
                <div
                  className={classNames(`status circle`, {
                    alive: circle,
                    dead: dead,
                  })}
                ></div>
                <p id="status">{CharacterData.status} -</p>
                <div className="specie" id="specie">
                  {CharacterData.species}
                </div>
              </div>
            </div>
            <div>
              <h4 className="lastlocation">Last Known location:</h4>
              <p id="location">{CharacterData.location.name}</p>
            </div>
            <div>
              <h4 className="origin">Origin:</h4>
              <p id="origin">{CharacterData.origin.name}</p>
            </div>
          </div>
        </div>
              );
    });
  } else {
    return <p>No found data...</p>;
  }

  return <div className="containerCharacter">{display}</div>;
};

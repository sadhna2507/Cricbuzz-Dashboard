import React from "react";
import { mockDataNews as data } from "../../data/mockData";
import './News.css'


export default function News() {

  return (
    <>
      <div className="container">
        <h1 className="Head">Headlines</h1>
        {data.map((item,index) => {
         return(

            <div key = {index} className="Wrapper">
                <h2 className="Headline">{item.headline}</h2>
                <p className="Intro">Introduction : {item.intro}</p>
               
                
            </div>
         )
          
        })}
      </div>
    </>
  );
}





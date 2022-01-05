import React from 'react';

const CityPage = (props) => {
    return(
        <div id="city-page">
            <h1>{props.city.name}, {props.city.country}</h1>
            <img src={props.city.image} alt={props.city.name} />
            <aside className="pquote">
               <blockquote>
                   <p>{props.city.summary}</p>
               </blockquote>
             </aside>
                 <p>{props.city.content}</p>
        </div>
    )
}

export default CityPage

import React from 'react';

const CityPage = (props) => {
    return(
        <div className="city-page" id={props.city.id}>
            <h1>Hello</h1>
            <h1>{props.name}, {props.city.country}</h1>
            <img src={props.city.image} alt={props.city.name} />
            <aside class="pquote">
               <blockquote>
                   <p>{props.city.summary}</p>
               </blockquote>
             </aside>
                 <p>{props.city.content}</p>
        </div>
    )
}

export default CityPage

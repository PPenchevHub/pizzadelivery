import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({image,name,id, info, glass}) => {
    return (
        <article>
                <img src={image} alt= {name}/>

                <h3>{name}</h3>
                <h3>{glass}</h3>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="btn">Details</Link>
        </article>
    )
}

export default Cocktail
import React from 'react'
import './Card.css';

import {Link} from "react-router-dom"

const API_IMG="https://image.tmdb.org/t/p/w500/";

function Card({ item }) {
  return (
    <Link to={`/detail/${item.title !== undefined ? `movie` : 'tv'}/${item.id}`} className='card' > 
        <div className='card-header'>
            <div className='imdb'>
              { item.vote_average } / 10
            </div>
        </div>
        <img className="card-img" src={`${API_IMG}${item.poster_path}`} alt='#'/>
        <div className='card-bottom'>
          { item.title || item.name }
        </div>
    </Link>
  )
}

export default Card
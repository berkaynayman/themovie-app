import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const api_key = 'd021f910d6838efc9f08afe7b56cb96f';

function DetailPage() {

  const API_IMG="https://image.tmdb.org/t/p/w500/";
  const [detail, setDetail]=useState();
  let { type, id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}`)
    .then((res)=>res.json())
    .then( async (data) => {
      setDetail(data);
    })
  }, [type, id, setDetail])

  useEffect(() => {
    console.log(detail)
  }, [detail])

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  //Child component  
  console.log(type, id);
  console.log(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}`)

  /*
  Sayfada olması gereken içeriklerFilm/Dizi Adı
○ Film/Dizi afişi
○ Film/Dizi Kısa açıklaması (Özet)
○ Film/Dizi Çıkış tarihi
○ Film/Dizi Tür / Türleri
○ Film/Dizi Yapımcı Firma / Firma
○ Film/Dizi Puanı
○ Film/Dizi Kadrosu ( Cast )
  */
  return (
    <div className='detail-page'>
      { 
          detail && (
            <>
              <div className='left'>
                <img className="card-img" src={`${API_IMG}${detail.poster_path}`} alt='#'/>
              </div>
              <div className='right'>
                <h1>{detail.title || detail.name}</h1>
                <span className='date'>{detail.release_date || detail.first_air_date}</span>
                <span className='vote-average'>{detail.vote_average} / 10</span>
                <p>
                  { detail.genres.map(i => <span key={i.id} className='type'> {i.name} </span>) }
                </p>
                <p className='desc'>{detail.overview}</p>
                <p className='collection'>
                  {
                    detail.belongs_to_collection && (
                      <>
                        {
                          detail.belongs_to_collection.name !== 'null' ? detail.belongs_to_collection.name : '--'
                        }
                      </>
                    )
                  }
                </p>
              </div>
            </>) 
      }
    </div>
  )
}

export default DetailPage
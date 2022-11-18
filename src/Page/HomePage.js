import React from 'react'
import List from '../Component/List'

function HomePage({movies, series}) {
  return (
    <div>
        <List listName='Popular Films' listData={movies.slice(0, 4)} />
        <List listName='Popular TV Series' listData={series.slice(0, 4)} />
    </div>
  )
}

export default HomePage
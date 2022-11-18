import React from 'react'
import Card from '../Card'
import './List.css'

function List({listName, listData}) {
  
console.log('LIST', listData)
  return (
    <>
      <h3 className='list-title'>{listName}</h3>
      <div className='list'>
          {
              listData.map((item) => <Card key={item.id} item={item}/>)
          }
      </div>
    </>
  )
}

export default List
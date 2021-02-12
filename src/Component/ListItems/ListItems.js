import React from 'react'

const ListItems = ({listitems,handelDelete}) => {
    return (
        <div className="app">
          <ul >
              {listitems.map((el,i)=>(

                  <li>{el} <button onClick={()=>handelDelete(i)}>Delete</button></li>))}
                          
              </ul>   
        </div>
    )
}

export default ListItems

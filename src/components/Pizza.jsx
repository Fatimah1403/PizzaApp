// import React from 'react'


function Pizza(name, ingredients, price, photoName) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <span>{price}</span>
      <img src={photoName} alt="focaccia" />
    </div>
  )
}

export default Pizza;

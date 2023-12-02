/* eslint-disable react/prop-types */
// import React from 'react'


function Pizza({name, ingredients, price, photoName}) {
  // console.log({"pizza": pizza});
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

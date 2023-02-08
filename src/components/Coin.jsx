import React from 'react'
import millify from 'millify'
import '../Crypto.css'
export default function Coin(props) {
    let price = props.price;
    if(price)
    price = millify(price)
  return (
    <div className="Coin">
     
      <img src={props.icon}/>
      <p ><b>Rank: </b> {props.rank}</p>
      <p className="name"><b>{props.coinName}</b></p>
       
      <p className="section"><b>Change:</b>{props.change}%</p>
      <p className="section"><b>Price:</b> ${price}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin'
import '../Crypto.css'

export default function Cryptocurrencies(props) {
    const [coins,setCoins] = useState([]);
    const makeRequests = async ()=>
    {
        var options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              tiers: '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '50',
              offset: '0'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '91ff79e371mshd656cc93d1e55c5p11fbeejsned7c7aa384de'
            }
          };
          props.setProgress(70);
          const response = await axios(options);
          props.setProgress(100);
          setCoins(response.data.data.coins);
          
    }
    
    useEffect(()=>
    {
        makeRequests();
    },[])

  return (
      <>
      <div className = "cryptobody">
          {
              coins.map((element)=>
              {
                return  <Coin key={element.uuid} coinName={element.name} icon = {element.iconUrl} change={element.change} price={element.price} rank={element.rank}/>
              })
          }
      </div>
      </>
    
  )
}

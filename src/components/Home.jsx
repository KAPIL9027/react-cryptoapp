import React from 'react'
import axios from 'axios';
import '../Home.css'
import { useEffect, useState } from 'react';

import millify from 'millify'

export default function Home(props) {
   
        const [stats,setStats] = useState({});
      
        const getStats = async ()=>
        {
          var options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/stats',
            params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '91ff79e371mshd656cc93d1e55c5p11fbeejsned7c7aa384de'
            }
          };
          props.setProgress(70);
          const response = await axios(options);
          props.setProgress(100);
          console.log(response.data.data);
          let stat = {Total24hVolume: response.data.data.total24hVolume,
                      TotalCoins: response.data.data.totalCoins,
                      TotalExchanges: response.data.data.totalExchanges,
                      TotalMarketCap: millify(response.data.data.totalMarketCap),
                      TotalMarkets: response.data.data.totalMarkets};
              setStats(stat);
             
        }
      
        useEffect(()=>
        {
         getStats();
        },[]);
  return (
    <>
      <div id="stats">
          <h1>Stats of CryptoCurrencies: </h1>
          <div className="stats">
           <p><span className="sub-headings">Total Coins:</span> {stats.TotalCoins}</p>
           <p><span className="sub-headings">Total Markets:</span> {stats.TotalMarkets}</p>
           <p><span className="sub-headings">Total Exchanges:</span> {stats.TotalExchanges}</p>
           <p><span className="sub-headings">Total MarketCap:</span> {stats.TotalMarketCap}</p>
          </div>
      </div>
    </>
  )
}

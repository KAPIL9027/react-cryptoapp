import axios from 'axios';
import '../News.css'
import React, { useEffect, useState } from 'react'

export default function News(props) {
    const [news,setNews] = useState([]);
    props.setProgress(70);
    const getNews = async ()=>
    {
        var options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news/cryptonews.com',
            headers: {
              'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
              'x-rapidapi-key': '91ff79e371mshd656cc93d1e55c5p11fbeejsned7c7aa384de'
            }
          };
      const response = await axios(options);
      props.setProgress(100);
      setNews(response.data);
     
    }
    useEffect(()=>
    {
      getNews();
    },[]);
  return (
    <>
     
     {
        news.map((element)=>{
            return <div className="newsDiv" key={element.title}>
            <p id = "title">{element.title}</p>
            <p id = "source">{element.source}</p>
            </div>
            
        })
     }
    </>
  )
}

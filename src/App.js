
import './App.css';
import {useEffect ,useState} from 'react';

import {News} from './News';

function App() {
  let[articles,setArticles]=useState([]);
  let [category,setCategory]=useState("india");
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-02-13&apiKey=a9803c52fa064cc6b6cb3e7e3b431cc3`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category]);

  return (
    
    <div className="App">
     <header className='heade'>
      <h1>News Feed</h1>
      <input onChange={(event)=>{
        if(event.target.value!=="")
        {
          setCategory(event.target.value);
        }
        else{
          setCategory("india");
        }
        
      }}type="text" placeholder='search news'/>

     </header>

      <section className='news-articles'>
        {
          //here mapping the data coming from articles given to news component

          articles.length!==0?
          articles.map((article)=>{

            return(
              <News article={article}/>
            );
          })
          :
          <h3>No News Found For searched text</h3>
        }
      
      
      </section>
      
    </div>
  );
}

export default App;

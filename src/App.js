import React,{ useEffect,useState }from 'react'
import {Chart,Cards,CountryPicker} from './Components'
import Styles from './App.module.css'
function App() {
   const [data, setdate] = useState([{}]);
  useEffect(()=>{
    async function fetchApi(){
    const response = await fetch("https://covid19.mathdro.id/api")
    const data = await response.json();
    
    setdate(data)
  }
  return fetchApi()}
  
  ,)
  
  return (
    <div className={Styles.container}>
   
    <Chart  />
    <Cards data={data}/>
    <CountryPicker/>
    
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Slider from './components/Slider/Slider';
import axios from 'axios';
import Card from './components/Card/Card'
import './App.css';

import LoadingBar from './components/LoadingBar';

function App() {
  const [budget, setBudget] = useState(1000);
  const [data, setData] = useState([]);
  const [newegg, setNewegg] = useState([]);
  const [microcenter, setMicrocenter] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://127.0.0.1:5000/?price=${budget}`)
    .then((res) => {
      setNewegg(res.data.newegg_build);
      setMicrocenter(res.data.microcenter_build);

      // setData(res.data.parts)
      // let currTotal = 0;
      // for(let i = 0; i < res.data.parts.length; i++) {
      //   currTotal += res.data.parts[i].price
      // }
      setLoading(false);
      // setTotal(currTotal);
    })
    .catch((e) => {
      setLoading(false);
      alert(e)
      console.log(e);
    })
  }, [budget])

  const handleSubmit = (event) => {
    event.preventDefault();
    setBudget(event.target.budget.value);
  }

  console.log(newegg)

  return (
    <div className="App">
      <h1>PC Generator</h1>
      {total !== 0 ? <h3>${total.toFixed(2)}</h3> : ""}
      <form onSubmit={handleSubmit}>
        <div className="slider-container">
          {loading ? <LoadingBar/> : <Slider budget={budget} setBudget={setBudget}/>}
        </div>
      </form>
      <div className="build-container">
        <div className="grid-container left">
          <h2>Microcenter</h2>
          <div className="parts-container">
            {microcenter.length > 0 ? microcenter.map((component, index) => {
              console.log("this is comp", component)
              return (
                <div className="part-container">
                  <Card name={component.name} src={component.image} href={component.href} price={component.price}/>
                </div>
              )
            })
            :
            <p>Please enter a number</p>
            }
          </div>
        </div>
        <div className="grid-container">
          <h2>Newegg</h2>
          <div className="parts-container">
            {newegg.length > 0 ? newegg.map((component, index) => {
              console.log("this is comp", component)
              return (
                <div className="part-container">
                  <Card name={component.name} src={component.image} href={component.href} price={component.price}/>
                </div>
              )
            })
            :
            <p>Please enter a number</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;

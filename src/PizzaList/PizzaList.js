import React, { Fragment, useState,useEffect } from 'react';
import Pizza from '../Pizza/Pizza';
import Header from '../Header/Header';
import './PizzaList.css';
import axios from 'axios';

const renderPizzas = (products) => {
  return products.map(product => {
    return (<Pizza key={product._id} {...product} />)
  })
}

function PizzaList () {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const  getPizzas = () => {
    setIsloading(true)
   axios.get('http://localhost:9999/api/pizza')
     .then(pizzas => {
       setIsloading(false);
      setPizzas(pizzas.data)
     }).catch(e => {
       console.log(e)
       setIsloading(false);
     })
 };

  useEffect(()=>{
    getPizzas();
  },[])

  if(isLoading){
    return <p>Loading....</p>
  }

  
return  <Fragment>
         <Header />
         <div className="container">
           {renderPizzas(pizzas)}
         </div>
       </Fragment>
}

export default PizzaList;

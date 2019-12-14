import React, { useState, useEffect } from "react";
import PizzaForm from "./PizzaForm";
import Axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";

function PizzaContaner(props) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getPizzaById(id) {
    setIsLoading(true);
    Axios.get(`http://localhost:9999/api/pizza/${id}`)
      .then(response => {
          setProduct(response.data[0])
        setIsLoading(false);
      })
      .catch(e => {
        console.error(e);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPizzaById(props.match.params.id);
  }, [props.match.params.id]);

  if(isLoading){
      return (<h1>Loading ...</h1>)
  }

  if(!product){
      return <ErrorPage/>
  }

  return <PizzaForm product={product} />;
}

export default PizzaContaner;

import React from "react";
import Form from "../Form/Form";
import Loading from "../Loading/Loading";
import Card from "../Card/Card"
import { Redirect } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ALL_ARTICLES } from '../../apiCalls';

export default function Marketplace() {
  const {loading, error, data} = useQuery(GET_ALL_ARTICLES)
  console.log(data)
  let info
  if(error) {
    info = <Redirect to="/error" />
  } else if(!loading && data) {
    info = data.map(art => <Card />)
  }
  
  return (
    <>
      <Form />
      {loading ? <Loading /> :
      <div className="market-container">
        {info}
      </div>}
    </>
  )
}
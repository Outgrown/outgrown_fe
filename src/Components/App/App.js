import { useQuery, gql } from '@apollo/client';
import React from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav'
import Form from '../Form/Form';
import Details from '../Details/Details';
import Loading from '../Loading/Loading';
import { GET_ALL_ARTICLES } from '../../apiCalls';
import './App.css';

const App = () => {
  const {loading, error, data} = useQuery(GET_ALL_ARTICLES)

  console.log(data)

  return (
    <div className="App">
      {/* <Home /> */}
      <Nav />
      {/* <Form /> */}
      <Details />
      {/* <Loading /> */}
    </div>
  )
}

export default App;

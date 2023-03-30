import { useQuery, gql } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_ALL_ARTICLES, GET_USER } from '../../apiCalls';
import Loading from '../Loading/Loading';
import './App.css';

function App() {

  const {loading, error, data} = useQuery(GET_ALL_ARTICLES)

  console.log(data)


  return (
    <div className="App">
      {loading && <Loading />}
    </div>
  );
}

export default App;

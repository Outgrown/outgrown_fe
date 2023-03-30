import React from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav'
import Form from '../Form/Form';
import Details from '../Details/Details';
import Loading from '../Loading/Loading';

import { Switch, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_ARTICLES } from '../../apiCalls';
import './App.css';

const App = () => {
  const {loading, error, data} = useQuery(GET_ALL_ARTICLES)

  console.log(data)

  return (
    <div className="App">
      <Nav />
      {loading && <Loading />}
      {!loading && <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/marketplace/:filters" />
        <Route exact path="/profile/:id" />
        <Route exact path="/details/:id" />
        <Route element={<p>Error!</p>} /> 
      </Switch>}
    </div>
  )
}

export default App;

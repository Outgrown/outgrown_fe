import React, { useState } from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav'
import Profile from '../Profile/Profile';
import Details from '../Details/Details';
import Error from '../Error/Error';
import Marketplace from '../Marketplace/Marketplace';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
 const [loggedUser, setLoggedUser] = useState(7)
 const [user, setUserName] = useState('')
  
 return (
    <div className="App">
      <Nav user={user} loggedUser={loggedUser}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/marketplace/" component={Marketplace} />
        <Route exact path="/marketplace/:article/:age/:gender" render={({match}) => {
          const article = match.params.article === 'all' ? '' : match.params.article
          const age = match.params.age === 'all' ? '' : match.params.age
          const gender = match.params.gender === 'all' ? '' : match.params.gender
          return <Marketplace 
            paramArt={article} 
            paramAge={age} 
            paramGender={gender}
          />
        }} />
        <Route exact path="/profile/:id" render={({match}) => (
          <Profile setUserName={setUserName} setCurrentUser={setLoggedUser} id={match.params.id}/>
        )} />
        <Route exact path="/details/:id/:name" render={({match}) => (
          <Details id={match.params.id} name={match.params.name} loggedUser={loggedUser} />
        )}/>
        <Route render={() => <Error message={'404: Page Not Found'}/>} /> 
      </Switch>
    </div>
  )
}

export default App;

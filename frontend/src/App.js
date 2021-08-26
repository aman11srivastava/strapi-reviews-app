import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Category from './pages/Category';
import HomePage from './pages/HomePage';
import ReviewDetails from './pages/ReviewDetails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:id" component={ReviewDetails}/>
          <Route path="/category/:id" component={Category}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

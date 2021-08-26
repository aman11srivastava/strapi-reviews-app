import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Category from './pages/Category';
import HomePage from './pages/HomePage';
import ReviewDetails from './pages/ReviewDetails';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Header/>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/details/:id" component={ReviewDetails}/>
              <Route path="/category/:id" component={Category}/>
            </Switch>
        </div>
        </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;

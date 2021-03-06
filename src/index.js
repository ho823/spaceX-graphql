import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

client
  .query({
    query: gql`
      query GetLaunch {
        launches(limit: 5) {
        launch_date_utc
        launch_success
        rocket {
          rocket_name
        }
        details
        links {
          video_link
          }
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

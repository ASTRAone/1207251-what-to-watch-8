import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,

};

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root'));

import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movieId, setMovideId] = useState();

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component = {MovieList} />
      <Route path='/movies/:userId' render = {props => 
        <Movie {...props} />
      } />
    </div>
  );
};

export default App;

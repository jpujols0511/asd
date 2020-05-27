import React, { useState, useCallback } from 'react';
import List from './List';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

function App() {
  const [repos, setRepos] = React.useState([]);
  const debounceOnChange = React.useCallback(debounce(onChange, 1000), []);

  function onChange(value) {
    fetch(`https://github-trending-api.now.sh/repositories?language=${value}`)
      .then((res) => res.json())
      .then((res) => setRepos(res));
  }

  return (
    <div className='App'>
      <h1>Search Trending Repo, via Language</h1>
      {/* <input
        className='filter-input'
        placeholder='Language: Java, JavaScript, Ruby, Python'
        // onChange={(e) => debounceOnChange(e.target.value.length > 0 && e.target.value)}
      /> */}
      <List trendingRepos={repos} />
    </div>
  );
}

export default App;

import * as React from 'react';
import { render } from 'react-dom';

import Board from './Board';
import { Usage } from './Pieces';

import './styles.css';

function App() {
  return (
    <>
      <Board />
      <Usage />
    </>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);

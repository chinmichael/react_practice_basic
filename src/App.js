import React from 'react';
import './App.css';
import logo from './logo.svg'

function App() {

  let posts = "강남 맛집 : 레드밥스타";
  let posts_style = { color: 'yellow', fontSize: '30px' };
  function post_fun() {
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={{ color: 'yellow', fontSize: '30px' }}>React Blog</div> */}
        <div style={posts_style}>React Blog</div>
        {/* <div>React Blog</div> */}
      </div>
      <h4>{posts}</h4>
      <h4>{post_fun()}</h4>
      <img src={logo} />
    </div >
  );
}

export default App;

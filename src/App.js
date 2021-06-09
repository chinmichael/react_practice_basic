/* eslint-disable */

import React from 'react';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg'

function App() {

  let navClass = "black-nav";

  let posts = "강남 맛집 : 레드밥스타";
  //let posts_style = { color: 'yellow', fontSize: '30px' };
  // function post_fun() {
  //   return 100;
  // }

  let [title1, titleChange1] = useState('남자 코트 추천'); // a : 데이터 b : 관련 함수
  let [titleArr, titleArrChange] = useState(['역삼 우동 맛집', '잠실 고기 맛집', '강남 파스타 맛집']);
  let [like, likeChange] = useState(0);

  function ramenChange() {
    //titleArrChange(titleArr = ['역삼 라면 맛집', '잠실 고기 맛집', '강남 파스타 맛집']); // state변경함수가 데이터를 통째로 변경시키기에 아래로 처리

    let newArray = [...titleArr];
    newArray[0] = "강남 라면 맛집";
    titleArrChange(newArray);
  }

  function abcSort() {
    let newArray = [...titleArr];
    //newArray.sort();
    newArray.sort((a, b) => {
      const upperA = a.toUpperCase();
      const upperB = b.toUpperCase();

      if (upperA > upperB) return 1;
      if (upperA < upperB) return -1;
      if (upperA === upperB) return 0;
    });
    titleArrChange(newArray);
  }

  return (
    <div className="App">
      <div className={navClass}>
        {/* <div style={{ color: 'yellow', fontSize: '30px' }}>React Blog</div> */}
        {/* <div style={posts_style}>React Blog</div> */}
        <div>React Blog</div>
      </div>

      <div className="list">
        <h4>{posts} <span style={{ cursor: 'pointer' }} onClick={() => { console.log('like!'); likeChange(like++) }}>👍</span> {like}</h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{title1}</h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{titleArr[0]} <span style={{ cursor: 'pointer' }} onClick={ramenChange}>👌</span></h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{titleArr[1]}<span style={{ cursor: 'pointer' }} onClick={abcSort}>👏</span></h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{titleArr[2]}</h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>
      {/* <h4>{posts}</h4>
      <h4>{post_fun()}</h4>
      <img src={logo} /> */}
    </div >
  );
}

export default App;

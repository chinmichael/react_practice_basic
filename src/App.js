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
  let [modalState, modalBtn] = useState(false);
  let [menuState, menuBtn] = useState(false);

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

  function forTitle() {
    let htmlArr = [];
    htmlArr.length = titleArr.length;

    for (let i = 0; i < titleArr.length; i++) {
      htmlArr[i] =
        <div className="list">
          <h4 onClick={(x) => { modalBtn(true) }}>{titleArr[i]}</h4>
          <p>6월 9일 발행</p>
          <hr />
        </div>
    }

    return htmlArr;
  }

  return (
    <div className="App">
      <div className={navClass}>
        {/* <div style={{ color: 'yellow', fontSize: '30px' }}>React Blog</div> */}
        {/* <div style={posts_style}>React Blog</div> */}
        <div>React Blog</div>
        <span style={{ flexGrow: '10' }}></span>
        <span onClick={() => {
          // if (menuState) {
          //   menuBtn(false);
          // } else {
          //   menuBtn(true);
          // }
          menuBtn(!menuState)
        }} style={{ cursor: 'pointer' }}>🤍</span>
      </div>
      {
        menuState === true
          ? <Menu />
          : null
      }

      <div className="list">
        <h4>{posts} <span style={{ cursor: 'pointer' }} onClick={() => { console.log('like!'); likeChange(like++) }}>👍</span> {like}</h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>

      {/* <div className="list">
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
        <h4 onClick={() => { modalBtn(true) }}>{titleArr[2]}</h4>
        <p>6월 9일 발행</p>
        <hr />
      </div> */}

      {/* map()을 이용한 유사반복문으로 위 리스트 제목을 기준으로 반복생성 */}

      {
        titleArr.map((title) => {
          return (
            <div className="list">
              <h4 onClick={(x) => { modalBtn(true) }}>{title}</h4>
              <p>6월 9일 발행</p>
              <hr />
            </div>
          )
        })
      }

      {
        forTitle()
      }

      {/* <h4>{posts}</h4>
      <h4>{post_fun()}</h4>
      <img src={logo} /> */}

      {
        modalState === true
          ? <DetailModal></DetailModal>
          : null // 빈 HTML의 관습표현
      }

    </div >
  );
}

function Menu() {
  return (
    <div className="menu">
      <p>About</p>
      <hr />
      <p>Category</p>
      <hr />
      <p>Tags</p>
    </div>
  );
}

function DetailModal() {
  return (
    <div className="detailModal">
      <h2>title</h2>
      <p>date</p>
      <p>content</p>
    </div>
  );
}

export default App;

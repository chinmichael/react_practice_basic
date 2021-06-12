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

  let [modalTitle, titleBtn] = useState('');

  let [postTitle, postTitleChange] = useState('');

  // input 임시 저장 state
  let [inputData, dataChange] = useState('');

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
        <div className="list" key={i}>
          <h4 style={{ cursor: 'pointer' }} onClick={(x) => {
            if (modalState == false || modalTitle != titleArr[i]) {
              modalBtn(true);
            } else {
              modalBtn(false);
            }
            titleBtn(titleArr[i]);
          }
          }>{titleArr[i]}</h4>
          <p>6월 9일 발행</p>
          <hr />
        </div>
    }

    return htmlArr;
  }

  function addTitle() {
    let newTitle = postTitle;
    let newTitleArr = [...titleArr];

    //newTitleArr.push(newTitle);
    newTitleArr.unshift(newTitle); // push가 뒤에 추가한다면 unshift는 앞에 추가함 >> 최신글이 앞에 가야하니까
    // 실전에서는 여기에 Ajax로 서버에 보내서 데이터를 DB에 영구저장하는 과정도 추가
    titleArrChange(newTitleArr);

    postTitleChange('');
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

      {/* {
        titleArr.map((title, i) => {
          return (
            <div className="list">
              <h4 onClick={(x) => { modalBtn(true); modalTitleNumBtn(i); }}>{title}</h4>
              <p>6월 9일 발행</p>
              <hr />
            </div>
          )
        })
      } */}

      {
        forTitle()
      }

      {/* <h4>{posts}</h4>
      <h4>{post_fun()}</h4>
      <img src={logo} /> */}

      {/* <input onChange={(e) => { dataChange(e.target.value) }} /> */}

      {/* <input type="text" value={inputData}></input> */}

      <div className="posting">
        <input type="text" onChange={(e) => { postTitleChange(e.target.value) }} value={postTitle} />
        <button onClick={addTitle}>Save</button>
      </div>

      {
        modalState === true
          ? <DetailModal title={modalTitle}></DetailModal> // 아님 <DetailModal title={modalTitle} titleNum={modalTitleNum}></DetailModal>으로 props를 추가해 해당 state를 추가할 수도 있음
          : null // 빈 HTML의 관습표현
      }

      <Profile></Profile>

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

function DetailModal(props) {
  return (
    <div className="detailModal">
      <h2>{props.title}</h2>
      <p>date</p>
      <p>content</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "kim", age: 29 }
  }

  changeName = () => { this.setState({ name: "chin " }) }

  render() {
    return (
      <div>
        <p>제 이름은 {this.state.name}입니다. 나이는 {this.state.age}입니다.</p>
        <button onClick={this.changeName}>click!</button>
      </div>
    );
  }
}

export default App;

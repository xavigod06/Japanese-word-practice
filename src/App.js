import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let title = "What Is PP.IO?"
let [posttitle, setPostiTitle] = useState(["PP.IO는 프로젝트 관리 및 상황도를 표현하는 웹 페이지입니다.","PP.IO는 React로 만들었습니다.","PP.IO는 지속적인 관심(돈)이 필요합니다!"])
let [like, setLike] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>PP.IO</h4>
      </div>

      <h4 style={{fontSize : "50px"}}>{title}</h4>
      <div className='list'>
        <h4>{ posttitle[0] } <span onClick={ () => { setLike(like++)}}>👍</span> {like} </h4>
        <p>Design by LWS</p>
      </div>
      <div className='list'>
        <h4>{posttitle[1]}</h4>
        <p>JS 필수!</p>
      </div>
      <div className='list'>
        <h4>{posttitle[2]}</h4>
        <p>Toss 1000-6277-1195</p>
      </div>
    </div>
  );
}

export default App;

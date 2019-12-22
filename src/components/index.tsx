import React from "react";
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/new">
            <CreateRoom />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const CreateRoom = () => <div>
  <h2>roomを作成</h2>
  <p>ルームの作成をすすめます。その後参加者の招待を行ってください。</p>

</div>

function Start() {
  return <div>
      <h2>start</h2>
      <b>まずは２つの選択肢があります。</b>
      <p><Link to="/room">誰かのルームに参加する</Link></p>
      <p><Link to="/new">新しくルームを作成し仲間を招待する</Link></p>
    </div>;
}

const About = () => <div>
  <h2>About</h2>
  <p>カードゲーム インサイダー クローンです。スマホで簡単に遊べるので是非試してみてください。</p>
  <p>ゲームは２つのステージに分かれています。</p>
  <p>１つ目はイエス・ノーゲームです。</p>
  <p>２つ目はアジテータ裁判です</p>
  <h3>イエス・ノーゲームステージ</h3>

  <p>通常のイエス・ノーゲームと違う点が一つあります。通常のイエス・ノーゲームはマスターだけがお題を知っています。
    マスターに質問をすることでお題を当てるという内容でした。
  </p>
  <p>今回はルールが少し変わり時間制限が付きます。通常であればこのゲームをクリアするのは難しいはずです。ところがマスターの他に密かに答えを知っている人間がいます
    それが「アジテーター」(扇動者)です。
  </p>
  <p>アジテータは密かに仲間を答えに誘導すべく暗躍し答えに近い質問をしたり、最悪直接答えを言ってしまいます</p>
  <p>この２点。アジテーターの存在と時間制限が通常のイエスノーゲームとの違いです。</p>
  <p>ちなみにここで答えにたどり着かないとアジテーターは-1pとなります。</p>
  <p>正解者は次のステージで任意のユーザーを一人だけアジテーターかどうか調べることが可能となります。</p>

  <h3>アジテーター裁判ステージ</h3>
  <p> 前のステージにて答えにたどり着いたユーザーは任意のユーザ1名限定してアジテータかどうかを調べることができます。
  正解者がいない場合はマスターがアジテーターかどうかを調べることができます。
  ちなみにアジテータはいない可能性もあります。アジテータはいないかどうかを調べることも可能です。
  ちなみにアジテータは自分がアジテーターだと知っているので調べる意味はありませんが。同じ画面が出るように配慮していますので、
  安心して挑んでください。
  調べる際は画面を他の人に見せないように注意してください
  それを踏まえて議論を開始します。議論には時間制限があります。
  先程のイエス・ノーゲームにて正解にたどり着くまでの時間が議論時間となります。</p>
  <p>時間切れになったら投票に移ります</p>
  <p>投票ではアジテータと思う人に投票をしてください。アジテータはいないという選択肢もあります。</p>
  <p>投票の結果アジテータを当てた方は(アジテータがいないという事実を当てた方も)1p獲得します</p>
  <p>投票の結果過半数の表がアジテーターに集まった場合はアジテータの負けとなり、アジテータ以外のユーザが1p獲得します。</p>
  <h3>結果発表</h3>
  あとは結果を楽しんでください。集計結果をいつでも確認可能にしておきます。
  何度もプレー可能です。プレーするとウソを付くのがうまい人間。嘘を見破るのが得意な人間が明確になります。
  その結果見ながら盛り上がりましょう。




</div>

const Rooms = () => <h2>Rooms</h2>;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello React World
//     </Button>
//   );
// }

const render = () => ReactDOM.render(<App />, document.querySelector('#app'));
export default render
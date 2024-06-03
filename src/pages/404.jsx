import Layout from '../components/layout'
import React, { useState, useEffect, useCallback } from 'react';
import Seo from '../components/seo'

// 石取りゲームのコンポーネント
const Game = () => {
  const [stones, setStones] = useState(21);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [message, setMessage] = useState('あなたのターンです。石を1〜3個取ってください.');

  const takeStones = useCallback((num) => {
    setStones(prevStones => {
      if (prevStones - num <= 0) {
        setMessage(playerTurn ? 'あなたの負けです。' : 'あなたの勝ちです！');
        return 0;
      } else {
        return prevStones - num;
      }
    });
  }, []);

  const computerMove = useCallback(() => {
    const num = Math.min(Math.floor(Math.random() * 3) + 1, stones);
    takeStones(num);
    if (stones - num > 0) {
      setPlayerTurn(true);
      setMessage('あなたのターンです。石を1〜3個取ってください.');
    }
  }, [stones, takeStones]);

  useEffect(() => {
    if (!playerTurn && stones > 0) {
      setMessage('コンピュータのターンです...');
      const timer = setTimeout(() => {
        computerMove();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [playerTurn, computerMove, stones]);

  const playerMove = (num) => {
    if (playerTurn && stones > 0) {
      takeStones(num);
      setPlayerTurn(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', width: '50vw', backgroundColor: '#ffe'}}>
      <Seo
        title="404 Not Found"
        description="404 Not Found"
        // image={`http:${post.heroImage.resize.src}`}
      />

      <h3><u>息を抜いて石取りゲーム！！</u></h3>
      <p>残りの石: {stones}</p>
      <p>{message}</p>
      <div>
        <button onClick={() => playerMove(1)} disabled={!playerTurn || stones <= 0}>1個取る</button>
        <button onClick={() => playerMove(2)} disabled={!playerTurn || stones < 2}>2個取る</button>
        <button onClick={() => playerMove(3)} disabled={!playerTurn || stones < 3}>3個取る</button>
      </div>
    </div>
  );
};

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404: Not Found</h1>
      
      <p>
        お客さまがアクセスしたページは、アドレスが変更されたか、削除された可能性があります。<br/>
        お手数ですが上記のヘッダから目的の情報をお探しください.
      </p>

      
      <Game style={{ width: '70vw', backgroundColor: 'lightgreen' }}/>
    </div>
  </Layout>
)

export default NotFoundPage

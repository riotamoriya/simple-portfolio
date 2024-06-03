import React from 'react'
import './addin.css'



const Section = ({ sentence }) => {
  return (
    <div>
      <div className="addin-container">
        <section>
          
            { sentence }

        </section>
      </div>
    </div>
  )
}







const ADDIN = () => {
  return (
    <div>
      <Section sentence={
        <p>
            👋 こんにちは。仙台を拠点に活動するソフトウェアエンジニアの森谷亮太です。<br/>
            ソフトウェアのプログラミング設計を中心に、導入から運用までお手伝いいたします。外部システム導入のお手伝いも可能ですので、ぜひお話聞かせください。<br/>
            <br/>
            ChatGPT・CursorなどのAI・LLM技術についても最新の情報をキャッチアップしており、柔軟なご提案ができることが強みです。また、ローカルネット環境にSynology製のNasを設置しており、TimeMachineアプリで自動バックアップをとっておりますので、ぜひ安心してお仕事と・データをお任せください。
            </p>
      }/>

      
    </div>
  )
}

export default ADDIN


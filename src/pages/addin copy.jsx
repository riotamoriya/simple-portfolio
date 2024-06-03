import React from 'react'
import './addin.css'

const ADDIN = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'AI & Machine Learning', level: 'Intermediate' },
  ];

  const socialLinks = {
    LinkedIn: 'https://www.linkedin.com/in/moriyaryota/',
    Twitter: 'https://twitter.com/moriyaryota',
    GitHub: 'https://github.com/moriyaryota',
  };

  return (
    <div>
    <div className="addin-container">
      <section className="about-me">
        <p>
          👋 こんにちは。仙台を拠点に活動するソフトウェアエンジニアの森谷亮太です。<br/>
          ソフトウェアのプログラミング設計を中心に、導入から運用までお手伝いいたします。外部システム導入のお手伝いも可能ですので、ぜひお話聞かせください。<br/>
          <br/>
          ChatGPT・CursorなどのAI・LLM技術についても最新の情報をキャッチアップしており、柔軟なご提案ができることが強みです。また、ローカルネット環境にSynology製のNasを設置しており、TimeMachineアプリで自動バックアップをとっておりますので、ぜひ安心してお仕事と・データをお任せください。
        </p>
      </section>
      </div>
      
    <div className="addin-container">

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill.name}>
              <strong>{skill.name}:</strong> {skill.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="qualifications">
        <h2>Qualifications</h2>
        <ul>
          <li>情報処理技術者</li>
          <li>TOEIC 900点</li>
          <li>データサイエンティスト認定</li>
        </ul>
      </section>

      <section className="social-links">
        <h2>Connect with Me</h2>
        <ul>
          {Object.entries(socialLinks).map(([name, url]) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>

    
    </div>
  )
}

export default ADDIN


import React, { useState, useRef } from 'react';
import Layout from '../components/layout'
import Recaptcha from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY;
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  reCAPTCHAキーが登録されていません
  `);
}

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormPage = () => {
  const [state, setState] = useState({});
  const recaptchaRef = useRef();
  const [recaptchaStatus, setRecaptchaStatus] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const recaptchaValue = recaptchaRef.current.getValue();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => {
        toast.success("送信が完了しました！", {
          position: "top-center",
          autoClose: 5000,
        });
        form.reset();
        setRecaptchaStatus(false);
        recaptchaRef.current.reset();
      })
      .catch((error) => alert(error));
  };

  const recaptchaSuccess = () => {
    setRecaptchaStatus(true);
  };

  return (
    <Layout>
      <div className="form-container">
      <h1>フォーム</h1>
      <p>ぜひ以下のフォームからご連絡ください！！</p>
        <form
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">お名前</label>
            <input type="text" name="name" id="name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" name="email" id="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">本文</label>
            <textarea name="message" id="message" rows="4" onChange={handleChange} required></textarea>
          </div>
          <div className="recaptcha-container">
            <Recaptcha
              ref={recaptchaRef}
              sitekey={RECAPTCHA_KEY}
              onChange={recaptchaSuccess}
            />
          </div>
          <div className="form-group">
            <button type="submit" disabled={!recaptchaStatus}>送信する</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default FormPage;
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { TextField, Button, Container, Box } from "@material-ui/core";
import { navigate } from "gatsby-link";
import Recaptcha from "react-google-recaptcha"

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  reCAPTCHAキーが登録されていません
  `)
}

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormPage = () => {
  const [state, setState] = useState({});
  const recaptchaRef = React.createRef();
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
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  const recaptchaSuccess = () => {
    setRecaptchaStatus(true);
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box mt={4} mb={4}>
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <label hidden>
              <input name="bot-field" onChange={handleChange} />
            </label>
            <TextField label="お名前" name="name" onChange={handleChange} required />
            <TextField label="メールアドレス" type="email" name="email" onChange={handleChange} required />
            <TextField label="本文" name="message" multiline rows={4} onChange={handleChange} required />
            <div className="center">
              <Recaptcha
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                onChange={recaptchaSuccess}
              />
            </div>
            <Button type="submit" variant="contained" color="primary" disabled={!recaptchaStatus}>
              送信する
            </Button>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export default FormPage
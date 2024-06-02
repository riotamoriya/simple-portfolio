import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TextField, Button, Container, Box } from "@material-ui/core";
import { navigate } from "gatsby-link";
import Recaptcha from "react-google-recaptcha"


const ThanksPage = () => {
  const [state, setState] = useState({});
  const recaptchaRef = React.createRef();
  const [recaptchaStatus, setRecaptchaStatus] = useState(false);

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box mt={4} mb={4}>
          <h1>Thank you!</h1>
          <p>ご連絡いただきありがとうございます😀<br/>内容を確認次第、返信いたします。</p>

        </Box>
      </Container>
    </Layout>
  )
}

export default ThanksPage
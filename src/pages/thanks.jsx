import React from 'react';
import Layout from '../components/Layout';
import { Container, Box } from "@material-ui/core";


const ThanksPage = () => {
 
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
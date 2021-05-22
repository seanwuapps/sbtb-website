import React from 'react';
import { Helmet } from 'react-helmet';

import 'globals/scss/app.scss';
// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stars Behind The Browser</title>
      </Helmet>
      <h1>Stars Behind The Browser</h1>
      <h3>Patience</h3>
      <p>We are working hard on getting this site up and running...</p>
      <p>OK... We are working to get this site up</p>
      <p>...</p>
      <p>OK, OK! I'm typing a few words each week...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>Fine! You got me! I'm a bot, alright?! I'm a bot!!!</p>
    </main>
  );
};

export default IndexPage;

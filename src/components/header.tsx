import * as React from "react"
import { Helmet } from 'react-helmet';

const Header = () => {
 return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>cambrige.com</title>
        <link rel='canonical' href='https://cambrige.com/' />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Helmet>
    </>
  );
};

export default Header;
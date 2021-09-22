import * as React from "react"
import { Helmet } from 'react-helmet';

const Header = () => {
 return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>cambrige.com</title>
        <link rel='canonical' href='https://cambrige.com/' />
      </Helmet>
    </>
  );
};

export default Header;

import * as React from "react"
import { Helmet } from 'react-helmet';

const Header = () => {
 return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Cambridge Solid Mechanics Group</title>
        <link rel='canonical' href='https://cam-solidmech.github.io/'/>
      </Helmet>
    </>
  );
};

export default Header;

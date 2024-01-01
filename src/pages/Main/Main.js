import React from "react";
import { Helmet } from "react-helmet";

import {
  About,
  Achievement,
  Blog,
  Contacts,
  Footer,
  Landing,
  Navbar,
  Projects,
  Services,
  Skills,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Achievement />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;

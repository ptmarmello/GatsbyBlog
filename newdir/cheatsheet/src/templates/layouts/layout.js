import React from "react";
import PropTypes from "prop-types";
import Navbar from '../../components/navbar';

const Layout = (props) => {
  return (
    <div className="App">
      {props.pageTitle !== "Home" &&
          <Navbar/>
      }
      
      <div className="App-Container">
        {props.children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it


import React from 'react';
// import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import "./src/styles/language-tabs.css";
import Code from './src/components/code';

// import Styling from './src/styles/themes.json';
// const Theme = Styling.basic;

// const GlobalStyles = createGlobalStyle`

// `;

const components = {
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        if(props) {
            return <Code {...props} />
        }
        return <pre {...preProps} />     
    },
    wrapper: ({ children }) => <>{children}</>

}


export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components} >
        {/* <ThemeProvider >
            <GlobalStyles /> */}
            {element}
        {/* </ThemeProvider> */}
    </MDXProvider>
)
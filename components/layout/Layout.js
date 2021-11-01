import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../mui/theme.js';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shadi's blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

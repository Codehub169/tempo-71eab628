import '../styles/globals.css'; // Import global styles
import { Fragment } from 'react';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  // This component is the top-level component which will be common across all different pages.
  // You can use this to keep state when navigating pages, or to add global styles.
  return (
    <Fragment>
      {/* Component represents the active page, so whenever you navigate between routes, Component will change to the new page. */}
      {/* pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object. */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
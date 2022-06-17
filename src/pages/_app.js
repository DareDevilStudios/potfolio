import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <title>My Potfolio</title>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
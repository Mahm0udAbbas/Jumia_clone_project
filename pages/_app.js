import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const MyLayout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      {Component.getLayout ? (
        <MyLayout Component={Component} pageProps={pageProps} />
      ) : (
        <>
          <Navbar />
          <MyLayout Component={Component} pageProps={pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import store from "@/redux/store";
// import Footer from "@/components/footer";

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
        <Provider store={store}>
          <MyLayout Component={Component} pageProps={pageProps} />
        </Provider>
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

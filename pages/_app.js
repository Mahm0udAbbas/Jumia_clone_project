import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MyLayout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { defaultLocale, locale } = router;
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.querySelector("body").setAttribute("dir", dir);
  }, [locale]);
  return (
    <>
      {Component.getLayout ? (
        <Provider store={store}>
          <MyLayout Component={Component} pageProps={pageProps} />
        </Provider>
      ) : (
        <>
          {" "}
          <Navbar />
          <MyLayout Component={Component} pageProps={pageProps} />
          <Footer />
        </>
      )}
    </>
  );
};

export default appWithTranslation(App);

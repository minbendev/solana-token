import AppBar from "components/AppBar";
import Footer from "components/Footer";
import Notification from "components/Notification";
import { ContextProvider }  from "contexts/ContextProvider";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({Component, pageProps}) => {
  return(
    <div className="bg-default-900">
      <Head>
        <title>Solana token creator</title>
      </Head>
      <ContextProvider>
        <Notification />
        {/* <AppBar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ContextProvider>




      {/* //SCRIPT  */}
      <script src="assets/libs/preline/preline.js"></script>
      <script src="assets/libs/swiper/swiper-bundle.min.js"></script>
      <script src="assets/libs/gumshoe/gumshoe.polyfills.min.js"></script>
      <script src="assets/libs/lucide/lucide.min.js"></script>
      <script src="assets/libs/aos/aos.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/theme.js"></script>
    </div>
  );
};

export default App;
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <ToastContainer />
  </>
}

export default MyApp

//------------DEFAULTS--------------------
import Script from 'next/script'
import Head from 'next/head'
//----------------------------------------



//------------------REDUX IMPORTS-----------
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
//------------------------------------------



//------------------USER IMPORTS-------------
import Navbar from '@/components/Navbar'            
import '../bootstrap/bootstrap.min.css'            //BOOTSTRAP
import '../bootstrap/bootstrap-icons.css'          //BOOTSTRAP
import '../styles/index.css'                       //CUSTOM CSS
//-------------------------------------------


export default function App({ Component, pageProps }) {

  return(
    <>

        <Provider store ={store}>
          <Head>
            <title>NailsByMariangeles</title>
            <link  rel="icon" type='image/ico' href='favicon.ico'/>
          </Head>
          <Navbar />
          <Component {...pageProps} />

          {/* Here it comes the javascript for bootstrap */}
          <Script
          src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
          crossOrigin="anonymous"
          />
        </Provider>
     
    </>
    )
}



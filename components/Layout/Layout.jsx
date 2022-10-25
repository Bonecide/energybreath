import  Head  from "next/head";
import s from './Layout.module.scss'
import Header from './../../module/Header/Header';
import Footer from './../../module/Footer/Footer';
export default function Layout({children , ...props}) {

    return(
     <>
        <Head>
            <title>
                Energy Breath 
            </title>
        </Head>

        <div {...props}> 
            
                <Header />
                
                <main >
                    {children}
                </main>
              
                <Footer/>
        
        </div>  
      </>
    )
}
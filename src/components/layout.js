import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({children, title= '', description = ''}) {
    return (
        <>
            <Head>
                <title>{` INE CONSULTAS - ${title}`}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
            </Head>
            <Navbar />            
       
                {children}

            <Footer />
        </>
    )
}
import {useEffect, useRef} from 'react';
import styles from "../../app/globals.css";
import Link from 'next/link';

export default function Resume() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/lib',
            licenseKey: 'demo:1690710080924:7c4a03fd03000000001ac38943d84d9fcebab0c86f80f0396316b1350a', // sign up to get a key at https://dev.apryse.com
            initialDoc: '/pdfs/pdfviewnextjs.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent">
         <nav>
  
            <div>
                <img class="logo" src="/assets/Logo.png" />
            </div>


            <div class="list">
                <a class="nav-item" href={`/home`}>Home</a>
                <a class="nav-item-active" href={`/resume`}>Resume</a>
                <a class="nav-item" href={`/blogs`}>Blogs</a>
                {/* <a class="nav-item" href={`/contact`}>Contact</a> */}
                {/* <button>Admin Login</button> */}
            </div>
        </nav>
        <br></br>

        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );
  
}
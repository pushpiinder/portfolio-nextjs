import { useEffect, useState } from "react";
import styles from "../../app/globals.css";
import Link from 'next/link';

const Home = () => {


    const scrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <div>

   <header>
    
     <nav>
  
       <div>
         <img class="logo" src="/assets/Logo.png" />
       </div>

   
       <div class="list">
         <a class="nav-item-active" href={`/home`}>Home</a>
         <a class="nav-item" href={`/resume`}>Resume</a>
         <a class="nav-item" href={`/blogs`}>Blogs</a>
         <a class="nav-item" onClick={scrollToBottom}>Contact</a>
         {/* <button>Admin Login</button> */}
       </div>
     </nav>

     <div class="header-content">
       <div>
         <h1>
           Hi! I'm<br />
           Pushpinder Singh
         </h1>
         <p>
           Building bridges between imagination and reality through 
           <br />
           the art of web development. Check out my resume.
         </p>
         <Link href={`/resume`}><button >Resume</button></Link>
         
       </div>
   
       <div>
         {/* <img class="header-image" src="/assets/server.svg" /> */}
         <img
           class="section-three-image"
           src="/assets/technical support illustration-01.svg"
         />
       </div>
     </div>
   </header>

   <section class="section-two">
     <div class="header-content">

       <div>
         {/* <img class="header-image" src="/assets/testing.svg" /> */}
         <img class="header-image" src="/assets/server.svg" />
       </div>
       <div>
         <h1>Checkout my  <br />weekly blogs...</h1>
         <p>
            I hope you find my blogs informative and helpful. If you have 
           <br />
           any questions or feedback after reading them, feel free to let me know. 
           <br />Happy reading!
         </p>
         <Link href={`/blogs`}><button >Blogs</button></Link>
       </div>
     </div>
   </section>

   <section class="section-four">
     <div>
       <h1>
         here are my Skillsets...
       </h1>
     </div>
     
   </section>

   <section className="section-five">
     <div class="boxes">
       <div class="box-line1">
         <div class="box">
           <div class="box-image">
             <img src="/assets/cloud-hosting.svg" alt="" />
           </div>
           <div class="box-heading">
             <h3>MERN Stack Developer</h3>
           </div>
           <div class="box-description">
             <p>
                Master the MERN (MongoDB, Express,   <br />
                React, Node.js) stack to create feature-rich  <br />
                web applications from front to back.
             </p>
           </div>
         </div>

         <div class="box">
           <div class="box-image">
             <img src="/assets/cloud-hosting.svg" alt="" />
           </div>
           <div class="box-heading">
             <h3>Socket.IO</h3>
           </div>
           <div class="box-description">
             <p>
                Implement real-time communication in web <br />
                apps using Socket.IO for interactive <br />
                features and live updates.
             </p>
           </div>
         </div>

         <div class="box">
           <div class="box-image">
             <img src="/assets/wordpress-hosting.svg" alt="" />
           </div>
           <div class="box-heading">
             <h3>GraphQL Guru</h3>
           </div>
           <div class="box-description">
             <p>
                Design and implement efficient APIs with <br />
                GraphQL, minimizing data over-fetching<br />
                and under-fetching.
             </p>
           </div>
         </div>
       </div>

       <div class="box-line2">
         <div class="box">
           <div class="box-image">
             <img src="/assets/vps.svg" alt="" />
           </div>
           <div class="box-heading">
             <h3>Webpack Wizardry</h3>
           </div>
           <div class="box-description">
             <p>
                Optimize frontend performance using <br />
                Webpack's bundling and asset management <br />
                capabilities.
             </p>
           </div>
         </div>

         <div class="box">
           <div class="box-image">
             <img src="/assets/Domain.svg" alt="" />
           </div>
           <div class="box-heading">
             <h3>Docker for DevOps</h3>
           </div>
           <div class="box-description">
             <p>
                Streamline web app deployment using <br />
                Docker containers for portability  <br />
                and consistency.
             </p>
           </div>
         </div>

         <div class="box">
           <div class="box-image">
             <img src="/assets/builder.svg" alt="" />
           </div>
           <div class="box-heading">
             <h3>JWT and OAuth</h3>
           </div>
           <div class="box-description">
             <p>
                Implement secure authentication and <br />
                authorization with JSON Web Tokens <br />
                (JWT) and OAuth.
             </p>
           </div>
         </div>
       </div>
     </div>
   </section>

   <section class="section-six">
     <div class="section-six-heading">
       <h1>Get in touch with me at :</h1>
     </div>
     <div class="prices">
       <div class="price-box">
         <div class="price-heading">
           <h2>Email</h2>
         </div>
         <div class="price-description">
           {/* <p>Suitable for beginners</p> */}
         </div>
         <div class="price-benefits">
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>pushpinder1997.ps@gmail.com</h4>
             </div>
           </div>
           {/* <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Disk Space 500 MB</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Bandwidth</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Database</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>1 Domain</h4>
             </div>
           </div> */}
         </div>
         <div class="price-lower">
           <div class="price-tag">
             {/* <h2>$29.99<span>/month</span></h2> */}
           </div>
           <div class="price-tag-desc">
             <p>Ping Anytime</p>
           </div>
         </div>

         <button class="price-button-white">Connect</button>
       </div>

       <div class="price-box">
         <div class="price-heading">
           <h2>Github</h2>
         </div>
         <div class="price-description">
           {/* <p>Suitable for company, organization</p> */}
         </div>

         <div class="price-benefits">
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>@pushpiinder</h4>
             </div>
           </div>
           {/* <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Disk Space</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Bandwidth</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited POP3 Email</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Database</h4>
             </div>
           </div> */}
         </div>

         <div class="price-lower">
           <div class="price-tag">
             {/* <h2>$59.99<span>/month</span></h2> */}
           </div>
           <div class="price-tag-desc">
             <p>Ping Anytime</p>
           </div>
         </div>
         <button class="price-button-blue">Connect</button>
       </div>

       <div class="price-box">
         <div class="price-heading">
           <h2>Whatsapp</h2>
         </div>
         <div class="price-description">
           {/* <p>Suitable for business websites</p> */}
         </div>
         <div class="price-benefits">
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>+91 - 999 999 8888</h4>
             </div>
           </div>
           {/* <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Disk Space</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Bandwidth</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited POP3 Email</h4>
             </div>
           </div>
           <div class="price-benefit-point">
             <div class="price-tick-image">
               <img src="/assets/circle-tick-svgrepo-com.svg" alt="" />
             </div>
             <div class="price-advantage">
               <h4>Unlimited Database</h4>
             </div>
           </div> */}
         </div>

         <div class="price-lower">
           <div class="price-tag">
             {/* <h2>$99.99<span>/month</span></h2> */}
           </div>
           <div class="price-tag-desc">
             <p>Ping Anytime</p>
           </div>
         </div>
         <button class="price-button-white">Connect</button>
       </div>
     </div>
 

     </section>  
        </div>
    )
}

export default Home;
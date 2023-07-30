import { useEffect, useState } from "react";
import styles from "../../app/globals.css";
import Link from 'next/link';
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import CommentForm from "@/components/CommentForm";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        // fetch("http://localhost:3000/posts").then((res) => res.json()).then(data => {
        //     setBlogs(data);
        // })
        fetchComments();
    }, [])


    const handleFormSubmit = (formData) => {
        console.log('Form Data:', formData);
        addComment(formData);
      };

    //POST call
    const addComment = async (formData) => {
        try {
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "portfolio"), {
                id: blogs.length + 1,
                email: formData.email,
                name: formData.name,
                comment: formData.comment
            });
            fetchComments();
            console.log("Document written with ID: ", docRef.id);
        } catch(error) {
            console.log(error)
        }
    }

    //GET call
    const fetchComments = async () => {
        try {
                // Add a new document with a generated id.
                const querySnapshot = await getDocs(collection(db, "portfolio"));
                const commentsArray = [];

                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                commentsArray.push({ id: doc.id, ...doc.data() });
            
            });

            commentsArray.sort((a, b) => a.id - b.id);

            setBlogs(commentsArray);
        } catch(error) {
            console.log(error)
        }
    }

    //DELETE call
    const deleteComment = async (docId) => {
        console.log(docId);
        try {
           await deleteDoc(doc(db, "portfolio", docId))
           fetchComments();
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <header>
            <nav>
  
            <div>
                <img class="logo" src="/assets/Logo.png" />
            </div>


            <div class="list">
                <a class="nav-item" href={`/home`}>Home</a>
                <a class="nav-item" href={`/resume`}>Resume</a>
                <a class="nav-item-active" href={`/blogs`}>Blogs</a>
                {/* <a class="nav-item" onClick={scrollToBottom}>Contact</a> */}
                {/* <button>Admin Login</button> */}
            </div>
            </nav>
        <br></br>

    <div className="fullblog">
      <div >
        <h1>Exploring the Power of Next.js: A Frontend Developer's Perspective</h1>
        <h4>Introduction:</h4>

        <p>As a frontend developer, staying on top of the latest trends and technologies is crucial to delivering seamless user experiences. Next.js has emerged as a game-changer in the world of web development, offering a powerful and flexible framework for building modern web applications. In this blog, we'll delve into Next.js, exploring its key features and how it has revolutionized frontend development.</p>

        <h4>What is Next.js?</h4>
        <p>Next.js is a popular open-source framework built on top of React, developed to simplify the process of building server-side rendered (SSR) and static websites. It combines the best of both worlds, providing the ease of use and flexibility of React with the advantages of server-side rendering. This results in faster load times, better SEO, and improved performance.</p>

        <h4>Server-Side Rendering (SSR) and SEO</h4>
        <p>One of the standout features of Next.js is its support for server-side rendering. Unlike traditional client-side rendering, SSR generates HTML on the server and sends it to the client, significantly reducing the time it takes to render pages. This translates to better SEO rankings, as search engines can easily crawl and index the content.</p>

        <h4>Static Site Generation (SSG) for Performance</h4>
        <p>Next.js also supports static site generation, where pages are pre-rendered at build time and served as static HTML files. This approach is perfect for content-heavy websites and blogs, as it eliminates the need for server-side processing on every request, leading to blazing-fast load times.</p>
        {/* <a href="#" class="button">Read More</a> */}
      </div>

        

            
          

                <h3>Comments section :</h3>

                {blogs.map((comment) => (
                    <div>
                        <div key={comment.id} className={styles.commentContainer}>
                            <h4 className={styles.commentContent}><span>User comment : </span>{comment.comment}</h4>
                            <p className={styles.commentContent}> 
                            User details : {comment.name} (ID: {comment.email}):
                            </p>
                            {/* <a href={`/blogs/${tweet.tweetId}`}>Read more</a> */}
                            {/* <button onClick={() => deleteComment("K5yOIrOmCrkhLpu9PH8C")}>Delete</button> */}
                            <br></br>
                        </div>
                    </div>
                )) }
          

             
                    <h3>Post your comment :</h3>
                    <div className="form-comment">
                            <CommentForm onFormSubmit={handleFormSubmit} />
                    </div>
          
                
                    <h2 className="comingsoon">other blogs are coming soon...</h2>
            </div>
        </header>
            
            
        </div>
        
    )
}

export default Blogs;
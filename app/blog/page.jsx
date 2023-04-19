"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

async function blogPosts() {
  const blogPostD = await fetch("http://127.0.0.1:8000/post", {
    next: { revalidate: 1000 },
  });
  if (!blogPostD.ok) {
    throw new Error("Failed to Fetch Data");
  }
  const blogPostData = await blogPostD.json();
  setBlogPost(blogPostData);
  setLoading(false);
  return blogPostData;
}

export default function Page() {
  const [BlogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      blogPosts();
    }, 1000);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center text-white  py-[130px] ">
          <h1>Loading</h1>
        </div>
      ) : (
        BlogPost.map((value, index) => (
          <div className="flex justify-center items-center ">
            <h2>Hello world</h2>
          </div>
        ))
      )}
    </main>
  );
}

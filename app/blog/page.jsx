"use client"

import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"


async function blogPosts(){
    const blogPostD = await fetch("http://127.0.0.1:8000/post", {next : { revalidate: 1000 }});
    if(!blogPostD.ok){
        throw new Error("Failed to Fetch Data")
    }
    const blogPostData = await blogPostD.json()
    setBlogPost(blogPostData)
    setLoading(false)
    return blogPostData

}

 export default function Page(){

	 const [ BlogPost, setBlogPost ] = useState([])
	 const [ loading, setLoading ] = useState(true)

	useEffect(() => {
		setTimeout(() => {blogPosts()}, 1000)
	}, [])

	return (
		<main>
			<div className="grid grid-cols-1 px-[5%] py-5 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-3 " >
				{loading
					?
						<div className="flex justify-center items-center text-white w-[88vw] py-[130px] " >
							<h1>Loading</h1>
						</div>
					:
						BlogPost.map((value, index) => (
							<h2>Hello world</h2>
						))
				}
			</div>
		</main>
	)
}


"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

const router = useRouter()
const [text, settext] = useState("")
const createTree = () => {
  router.push(`/generate?handle=${text}`)
}


  return (
    <main>
      <section className="bg-[#254f1a] min-h-[120vh] grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[5vw] gap-5">
          <p className="font-bold text-yellow-400 text-7xl">Everything you are. In one, simple link in bio.</p>
          <p className="text-white font-bold text-justify">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-4">
            <input value={text} onChange={(e) => settext(e.target.value)} className="bg-white px-2 py-2 focus:outline-[#254f1a] rounded-md" type="text" placeholder="Enter your Handle" />
            <button onClick={() => createTree()} className="bg-pink-200 rounded-full px-3 py-3 font-semibold">Claim your LinkStack</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="home.PNG" alt="" />
        </div>
      </section>
      <section className="bg-red-700 min-h-[100vh]">
        
      </section>
    </main>
  );
}

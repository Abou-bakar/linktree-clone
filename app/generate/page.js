"use client"
import React, {useState, Suspense} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

function GenerateInner() {

  const searchParams = useSearchParams()

  // const [link, setlink] = useState("")
  // const [linktext, setlinktext] = useState("")
  const [links, setlinks] = useState([{link: "", linktext: ""}])
  const [handle, sethandle] = useState(searchParams.get("handle" || ""))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks)=>{
      return initialLinks.map((item, i)=>{
        if(i === index){
          return {link, linktext}
        }
        return item
      })
    })
  }

  const addLink = () => {
    setlinks(links.concat({link: "", linktext: ""}))
  }
  

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });
    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

   const r = await fetch("http://localhost:3000/api/add", requestOptions)
      const result = await r.json()
      if(result.success){
      toast.success(result.message)
      setlinks([])
      setpic("")
      sethandle("")
      }
      else{
        toast.error(result.message)
      }
  }

  return (
    <div className='bg-green-200 min-h-screen'>
      <div className="col1 flex flex-col items-center justify-center h-[120vh]">
        <div className='flex flex-col gap-4 my-6 w-1/2 '>
          <h1 className='font-bold text-3xl text-center'>Create your BitStack</h1>
          <div className="item">
            <h2 className='font-semibold text-xl'>Step 1: Claim your Handle</h2>
            <div className='mx-4'>
              <input value={handle || ""} onChange={(e) => sethandle(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2.5 my-3  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Choose a Handle' />
            </div>
          </div>
          <h2 className='font-semibold text-xl'>Step 2: Add your Links</h2>
          {links && links.map((item, index)=>{
             return <div key={index} className='mx-4'>
            <input value={item.linktext || ""} onChange={(e) => handleChange(index, item.link, e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2.5 my-3 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Enter link text' />
            <input value={item.link || ""} onChange={(e) => handleChange(index, e.target.value, item.linktext)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Enter link URL' />
            </div>
        })}
             <div className="btn flex justify-center">
              <button onClick={() => addLink()} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+ Add Link</button>
          </div>
          <div className="item">
            <h2 className='font-semibold text-xl'>Step 3: Add Profile and Description</h2>
            <div className="mx-4">
              <input value={pic || ""} onChange={(e) => setpic(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2.5 my-3 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Enter link to your picture' />
              <input value={desc || ""} onChange={(e) => setdesc(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2.5 my-3 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Enter description' />
              <div className="btn flex justify-center">
                <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() =>{submitLinks()}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:cursor-not-allowed" >Create your BitStack</button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Generate

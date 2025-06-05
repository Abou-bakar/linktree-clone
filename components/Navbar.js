"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);

  return ( <>{showNavbar && <nav className='bg-white flex justify-between w-[80vw] fixed top-10 right-[10vw] rounded-full p-2 px-4'>
        <div className="logo flex gap-8 items-center">
            <Link href="/"><img loading="lazy" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className="nav-desktop-logo h-6"></img></Link>
            <ul className='flex gap-6'>
              <Link href="/"><li>Products</li></Link>
              <Link href="/"><li>Templates</li></Link>
              <Link href="/"><li>Marketplace</li></Link>
              <Link href="/"><li>Learn</li></Link>
              <Link href="/"><li>Pricing</li></Link>
            </ul>
        </div>

        <div className='flex gap-4 items-center'>
          <button className="login bg-[#eff0ec] p-2 rounded-md font-semibold">Log in</button>
          <button className="Signup bg-[#1e2330] text-white p-2 rounded-full font-semibold">Sign up free</button>
        </div>
    </nav>}
  </>
  )
}

export default Navbar

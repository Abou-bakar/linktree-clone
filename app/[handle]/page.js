import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const handle = params.handle.replace(/-/g, " ")

    const client = await clientPromise
    const db = client.db("linkstack")
    const collection = db.collection("links")

    // Check if the handle already exists
    const item = await collection.findOne({ handle: handle })
    console.log(item)
    if (!item) {
        return notFound()
    }
    const item2 = {
        "_id": {
            "$oid": "682df27e5a3446c44717a72f"
        },
        "links": [
            {
                "link": "https://www.facebook.com/",
                "linktext": "Facebook"
            },
            {
                "link": "https://www.instagram.com/",
                "linktext": "Instagram"
            },
            {
                "link": "https://github.com/",
                "linktext": "GitHub"
            }
        ],
        "handle": "abubakar",
        "pic": "data:image/jpeg;base64,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"
    }
    return <div className="flex min-h-screen bg-green-200 justify-center items-start py-10">
        {item && <div className="image flex justify-center flex-col items-center gap-2"><img className="rounded-full w-32 h-32" src={item.pic} alt={item.handle} />
            <span className="font-bold ">{item.handle}</span>
            <span className="desc text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link href={item.link} key={index}><div className="py-3 px-2 bg-white rounded-md my-3 flex flex-col gap-2 shadow-lg min-w-96 justify-center items-center opacity-90 transition hover:scale-105">
                        {item.linktext}</div></Link>
                })}
            </div>
        </div>}
    </div>
}
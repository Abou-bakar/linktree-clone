import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()

  const client = await clientPromise
  const db = client.db("linkstack")
  const collection = db.collection("links")

  // Check if the handle already exists
  const doc = await collection.findOne({ handle: body.handle })
  
  if (doc) {
    return Response.json({ success: false, error: true, message: 'This handle is already taken. Please choose another one.', result: null })
  }

  const result =  await collection.insertOne(body)


  return Response.json({ success: true, error: false, message: 'Your links have been added. Enjoy!', result: result },
                 { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
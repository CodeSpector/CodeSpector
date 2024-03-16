import client from "@/models/client";
import connect from "@/utils/mongo";

export async function GET(request: Request) {
  return Response.json({ msg: "Hello World!" });
}

export async function POST(request: Request) {
  try {
    await connect();
    const res = await request.json()

    const newClient = new client({
      name: res.name,
      mail: res.mail,
      phone: res.phone,
      contactm: res.contactm,
      web: res.web,
      use: res.use,
      color: res.color,
      info: res.addinfo,
      pending: true
    })
    // TODO: Responce is not working
    await newClient.save()
    return Response.json({ msg: "done" }, { status: 200 });

    //   return Response.json({ res }, { status: 200 })
  } catch (err) {
    console.log(err)
    return Response.json({ msg: err }, { status: 500 });
  }
}
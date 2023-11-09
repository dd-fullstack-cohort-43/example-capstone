import {cookies} from "next/headers";

export async function POST(request: Request) {
    const data = await request.json()



    const responseFromServer =  await fetch(`${process.env.REST_API_URL}/apis/tweet`,
        {
            method: "POST",
            credentials: "include",
           headers: request.headers,
            body: JSON.stringify(data)
        }
    )

    const result = responseFromServer.json()

    console.log(result)

return Response.json({result})


}
import {NextResponse, } from "next/server";

export async function POST(request: Request){


    const data = await request.json()

   const responseFromServer =  await fetch(`${process.env.REST_API_URL}/apis/sign-in`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        )

    const result = await responseFromServer.json()

    result.status === 200 ? result.type = "alert alert-success" : result.type = "alert alert-danger"

    const clientResponse = NextResponse.json(result)

  let jwtToken = responseFromServer.headers.get("Authorization")

  if (jwtToken) {
    clientResponse.cookies.set("jwt-token", jwtToken, {maxAge: 3 * 60 * 60 *1000, httpOnly: true})
  }


    const serverCookies = responseFromServer.headers.get("Set-Cookie")

    if(serverCookies) {
        clientResponse.headers.set("Set-Cookie", serverCookies)
    }


   // Response
    return clientResponse

}
export async function POST(request: Request){
    const data = await request.json()
    console.log(data)

   const response =  await fetch(`${process.env.REST_API_URL}/apis/sign-in`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        )

    const cookies = response.headers.getSetCookie()
    console.log(cookies)
    const result = await response.json()
    result.status === 200 ? result.type = "alert alert-success" : result.type = "alert alert-danger"
    return Response.json(result)

}
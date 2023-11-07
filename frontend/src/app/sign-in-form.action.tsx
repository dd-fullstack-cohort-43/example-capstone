'use server'
import {SignInSchema} from "@/utils/models/SignIn";
import {parseFetchResponse} from "@/utils/fetch.utils";
import { cookies } from 'next/headers'


export async function signInFormAction(prevState: unknown, formData: FormData): Promise<{message: string, type: string}> {
    console.log(formData);


    const cookieStore = cookies()

    console.log(cookieStore.getAll())
    //create a reusable error response
    const errorResponse = {
        type: "alert alert-danger",
        message: "login failed"
    }

    //create a request body to send to express
    const requestBody = {
        profileEmail: formData.get('profileEmail'),
        profilePassword: formData.get('profilePassword')
    }

    //validate the request body to ensure it matches what the backend expects
    const validationResult = SignInSchema.safeParse(requestBody)

    //if the validation fails, return the error response
    if (!validationResult.success) {
        errorResponse.message = validationResult.error.issues[0].message
        return errorResponse
    }

    //if the validation succeeds, send the request to the backend and return the response to the client component
    const result = await fetch(
        `${process.env.REST_API_URL}/apis/sign-in`,
        {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(validationResult.data)
        }
    )
        .then(parseFetchResponse("login failed"))
        .then(responseBody => {
            if (responseBody.status === 200) {
                return {
                    type: "alert alert-success",
                    message: "login successful"
                }
            } else {
                errorResponse.message = responseBody.message ?? "login failed"
                return errorResponse
            }

        }).catch(error => {
            return errorResponse
        })

    console.log(result)
    return result
}
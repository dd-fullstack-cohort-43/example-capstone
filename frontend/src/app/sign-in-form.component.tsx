'use client'
import {useFormState} from "react-dom";
import {z} from "zod";
import {SignInSchema} from "@/utils/models/SignIn";
import {parseFetchResponse} from "@/utils/fetch.utils";
import {signInFormAction} from "@/app/sign-in-form.action";
import {cookies} from "next/headers";

export function SignInFormComponent() {

    const initialState = {
        message: null,
        type: null
    }


    const [formState, serverAction] = useFormState(signInFormAction, initialState)

    console.log(formState)



    return (
        <>

            <h1 className="text-3xl font-bold">Login</h1>
            <form action={serverAction} className={"py-2"}>
                <div className="pb-5">
                    <label className="text-md" htmlFor="us">Email</label>
                    <input
                        placeholder="example@eamil.com"
                        required={true}
                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        maxLength={128}
                        className="input input-bordered w-full peer"
                        type="text"
                        name="profileEmail"
                        id="username"
                    />
                    <output
                        className="hidden border-rounded rounded-sm peer-[&:not(:placeholder-shown):not(:focus):invalid]:block alert alert-danger">
                        please provide a valid email
                    </output>
                </div>
                <div className="pb-5">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="password"
                        required={true}
                        maxLength={128}
                        className="input input-bordered w-full max-w-s peer"
                        type="password"
                        name="profilePassword"
                        id="password"
                    />
                    <output
                        className="hidden border-rounded peer-[&:not(:placeholder-shown):not(:focus):invalid]:block alert alert-danger">
                        please provide a valid password
                    </output>
                </div>
                <div className="pb-4 flex gap-2">
                    <button className='btn btn-success' type="submit">Log In</button>
                    <button className='btn btn-danger' type="reset">reset</button>
                </div>
                <output className={formState.type}>{formState.message}</output>
            </form>
        </>

    )
}



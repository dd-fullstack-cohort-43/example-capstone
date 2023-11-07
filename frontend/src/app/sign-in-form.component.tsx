"use client";
import {SignIn, SignInSchema} from "@/utils/models/SignIn";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";


export function SignInFormComponent() {

    const initialValues : any = {
        profileEmail: '',
        profilePassword: ''
    }

    const handleSubmit = (values: SignIn, actions: FormikHelpers<SignIn>) => {
        console.log(values)
    }

    return(
        <>
        <h1 className="text-3xl font-bold">Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={toFormikValidationSchema(SignInSchema)}
            >
                {SignInFormContent}
            </Formik>

        </>
    )
}


function SignInFormContent(props: FormikProps<SignIn>) {

    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return(
        <>
            <form className={"py-2"}>
                <div className="pb-2">
                    <label className="text-md" htmlFor="profileEmail">email</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileEmail}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileEmail"
                        id="profileEmail"
                    />
                </div>
                <div className="pb-2">
                    <label  htmlFor="password">Password</label>
                    <input
                        className="input input-bordered w-full max"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <div className="pb-4 flex gap-2">
                    <button className='btn btn-success' type="submit">Log In</button>
                    <button className='btn btn-danger' type="reset">reset</button>
                </div>
            </form>
 </>
    )
}
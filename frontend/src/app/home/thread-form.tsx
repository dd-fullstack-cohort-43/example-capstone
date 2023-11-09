'use client'
import {ThreadSchema} from "@/utils/models/Thread";
import {cookies} from "next/headers";
import { z} from "zod";
import {type} from "os";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayError} from "@/components/displayError";
import {toFormikValidationSchema} from "zod-formik-adapter";


const formSchema = ThreadSchema.pick({threadContent: true})
type  Values = z.infer<typeof formSchema>

export function ThreadForm() {

    const initialValues = {
        threadContent: "",
    };


    const formSchema = ThreadSchema.pick({threadContent: true})
     type  Values = z.infer<typeof formSchema>

    const handleSubmit = (values: Values ,actions: FormikHelpers<Values> ) => {
        const {setStatus, resetForm} = actions
        const result = fetch('/apis/thread', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        }).then(response => response.json()).then(json => {
            if(json.status === 200) {
                resetForm()
            }
            setStatus({type: json.type, message: json.message})
        })

    };

    return(
        <>
            <h1 className="text-3x p-4 font-bold">Home</h1>
            <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={toFormikValidationSchema(formSchema)}>
                {ThreadFormContent}
            </Formik>

        </>
    )
}


function ThreadFormContent(props: FormikProps<Values>) {

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
            <form className={"px-4 min-width-50"} onSubmit={handleSubmit}>
                <div className="form-control min-width-50 ">
                    <label className="text-lg pb-3" htmlFor="tweetContent">tweet</label>
                    <textarea
                        value={ values.threadContent}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="textarea textarea-bordered"
                        name="threadContent"
                        id="tweetContent"
                        cols={30}
                        rows={3}
                    >
                    </textarea>
                </div>
                <DisplayError errors={errors} touched={touched} field={"threadContent"} />
                <div className="form-control">
                    <button type="submit" className="btn btn-accent">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}



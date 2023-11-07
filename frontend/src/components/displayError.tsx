import {FormikProps, FormikValues} from 'formik'


interface DisplayErrorProps {
    errors: FormikProps<FormikValues>['errors']
    touched: FormikProps<FormikValues>['touched']
    field: string
}

export function DisplayError(props: DisplayErrorProps) {
    const { errors, touched, field } = props
    if(errors[field] && touched[field]) {
        return (

                <output className={'block alert alert-danger'}>
                    {errors[field] as string}
                </output>
        )
    } else {
        return <></>
    }
}

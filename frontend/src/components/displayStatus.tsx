interface DisplayStatusProps {
    status: {
        type: string,
        message: string
    }
}

export function DisplayStatus(props: DisplayStatusProps): JSX.Element {
    const {status} = props
    if(status) {
        return(
            <>

                    <output className={`block ${status.type}`}>
                        {status.message}
                    </output>
            </>

        )

    }
    return <></>
}
import {Profile} from "@/utils/models/Profile";
import {cookies} from "next/headers";


export type Auth = {
    profile: Profile,
    authorization: string
}




let auth: Auth | undefined

function fetchAuth() {
    if(auth === undefined) {
        const cookiesStore = cookies()
        const unparsedJwtToken = cookiesStore.get("jwt-token")
    }



}
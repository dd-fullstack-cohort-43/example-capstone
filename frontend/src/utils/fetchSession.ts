import {Profile, ProfileSchema} from "@/utils/models/Profile";
import {cookies} from "next/headers";
import {jwtDecode} from "jwt-decode";


export type Session = {
    profile: Profile,
    authorization: string
}


let auth: Session | undefined

export function fetchSession() {

  //check to see if the jwt-token cookie is set
  const cookiesStore = cookies()
  const unparsedJwtToken = cookiesStore.get("jwt-token")



  //if unparsedJwtToken is undefined the user is no longer signed in set session to null
  if(unparsedJwtToken === undefined) {
    auth = undefined
  }


   // if auth is undefined and unparsedJwtToken is defined then parse the jwtToken and set auth
    if (auth === undefined && unparsedJwtToken) {
            const parsedJwtToken = jwtDecode(unparsedJwtToken.value) as any
             return {
                profile: ProfileSchema.parse(parsedJwtToken.auth),
                authorization: unparsedJwtToken.value
            }
    }
    return auth
}